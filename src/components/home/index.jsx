import React from 'react';

import './index.css';
import { useState, useEffect } from 'react';
import Post from '../page/index' 
import axios from 'axios';

const Home = () => {

  const [isLit, setLit] = useState(true);
  const [Posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/HafizMuhammadRayyan/jsonplaceholder/posts")
      .then(response => {
        console.log("Respone, ", response);
        setPosts(response.data) 
      })
      .catch(err => {
        console.log("Error, ", err);
      })

  }, [])


  const clickHandler = () => {
    console.log("I am a Handler");
    setLit(!isLit);
  }

  return (

    <div className={`room ${(isLit) ? "lit" : "dark"}`}>
      Screen is {(isLit) ? "Lit" : "Dark"}
      <br />
      <button onClick={clickHandler}>Toggle</button>

      {

        Posts.map((eachPost, i) => (
          <>
            <Post
              profilePic={eachPost.profilePhoto}
              name={eachPost.name}
              postDate={eachPost.postDate}
              postText={eachPost.postText}
              postImg={eachPost.postImage}
            />
          </>
        ))

      }

      {/* <Post 
      name="Inzamam malik"
      postDate="21 may 2022"
      postText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
      postImg="https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg"
      profilePic="https://dstudiosphotography.com/wp-content/uploads/2019/01/Corporate-Headshots-3-square.jpg"
      /> */}

    </div>
  )
}

export default Home
