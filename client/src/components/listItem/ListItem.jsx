import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react"
import "./ListItem.scss"
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({index, item}) {
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTc1ZWZhZmYxZWQwOWU3MTlkMDY2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDQyMjk5MywiZXhwIjoxNjU0ODU0OTkzfQ.SzIusrtzFRrnaDi_g0cFJ9OAIgjHGhEIFASI_WjYmH0"//+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
        <div className="listItem" 
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)} 
      style={{left:isHovered && index*225+index*3}}>
      <img src={movie?.img} >

      </img>

      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.limit}</span>
          <span className="limit">13+</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
        {movie.desc}
        </div>
        <div className="genre">
        {movie.genre}
        </div>
      </div>
        </>
      )}
    </div>
    </Link>
    
  )
}

export default ListItem