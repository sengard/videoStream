import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

function featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movies"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horro">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-Fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img width="100%" src="https://wallpaperaccess.com/full/500745.jpg"></img>
        <div className="info">
            <img src="https://i.kym-cdn.com/photos/images/original/001/311/833/119.png">

            </img>
            <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatum dolorem impedit obcaecati repudiandae, rem ullam suscipit ipsam iusto eius nisi temporibus aliquam atque tempore quam facilis quaerat dignissimos! Dolor commodi sit deserunt autem culpa ipsa tenetur.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default featured