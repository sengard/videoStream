import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Navbar.scss"

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
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
                <span>HomePage</span>
                <span>Series</span>
                <span>Movies</span>
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