import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset===0 ? false: true);
    return() => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://firebasestorage.googleapis.com/v0/b/printful-afe3c.appspot.com/o/AlOo%20(1).png?alt=media&token=3351db5e-8698-453e-9af6-46b30b4defa6"></img>
                <Link to="/" className="link">
                <span>HomePage</span>
                </Link>
                <Link to="/series" className="link">
                <span>Series</span>
                </Link>
                <Link to="/movies" className="link">
                <span>Movies</span>
                </Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className = "icon"/>
                <span>KID</span>
                <Notifications className = "icon"/>
                <img src="https://images.pexels.com/photos/8834489/pexels-photo-8834489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=640&w=640"></img>
                <div className="profile">
                  <ArrowDropDown className = "icon"/>
                  <div className="options">
                  <span>Settings</span>
                  <span>LogOut</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar