import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./ListItem.scss"

function ListItem({index}) {
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="listItem" 
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)} 
      style={{left:isHovered && index*225-50+index*3}}>
      <img src="https://wallpaperaccess.com/full/1810148.jpg" >

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
          <span>10 Seasons</span>
          <span className="limit">13+</span>
          <span>1994</span>
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quos, hic earum quasi maxime.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </div>
        <div className="genre">
          Action
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default ListItem