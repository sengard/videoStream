import "./home.scss"
import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/featured"
import List from "../../components/List/List"

const Home = () => {
  return (
    <div className = "home">
        <Navbar/>
       <Featured type="series"/>
       <List/>
       <List/>
       <List/>
       <List/>
    </div>
  )
}

export default Home