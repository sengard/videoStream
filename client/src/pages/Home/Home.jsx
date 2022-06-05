import "./home.scss"
import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/featured"
import List from "../../components/List/List"
import { useState, useEffect } from "react"
import axios from "axios";

const Home = ({type}) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
        try{

          const res = await axios.get(
            `lists`,{//${type ? "?type=" + type : ""}${ genre ? "&genre=" + genre : "" }
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTc1ZWZhZmYxZWQwOWU3MTlkMDY2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDQyMjk5MywiZXhwIjoxNjU0ODU0OTkzfQ.SzIusrtzFRrnaDi_g0cFJ9OAIgjHGhEIFASI_WjYmH0"//+JSON.parse(localStorage.getItem("user")).accessToken,
              },
            }
          );
          setLists(res.data);
          console.log(res)
        }catch(err){
          console.log(err);
        }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className = "home">
        <Navbar/>
       <Featured type={type} setGenre={setGenre} />
       {lists.map}
       {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home