import { ArrowBackOutlined } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss"

function Watch() {
  const location = useLocation();
  const m = location.movie;
  const trailer = "https://firebasestorage.googleapis.com/v0/b/printful-afe3c.appspot.com/o/THE%20IMITATION%20GAME%20-%20Official%20UK%20Trailer%20-%20Starring%20Benedict%20Cumberbatch.mp4?alt=media&token=75da37a6-55a8-474a-b7ec-9576bc506ea8";

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home {m} 
        </div>
      </Link>
        
      <video className="video" autoPlay progress controls src={trailer}/>

    </div>
  );
} 

export default Watch