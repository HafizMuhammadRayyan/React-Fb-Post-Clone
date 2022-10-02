import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
























// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// import moment from "moment";

// import { AiFillLike } from "react-icons/ai";
// import { MdInsertComment } from "react-icons/md";
// import { FaShare } from "react-icons/fa";

// function Post(props) {
//   return (
//     <div className="post">

//       <div className="postHeader">
//         <img className="profile" src={props.profilePic} alt="" />

//         <div>
//           {props.name} <br />
//           {moment(props.postDate).fromNow()}
//         </div>

//       </div>

//       <div className="postText">{props.postText}</div>

//       <div>
//         <img className="postImage" src={props.postImg} alt="" />
//       </div>

//     <hr />
//       <div className="postFooter">
//         <div><AiFillLike /> Like</div>
//         <div><MdInsertComment /> Comments</div>
//         <div><FaShare /> Share</div>
//       </div>
//     <hr />
//     </div>
//   );
// }

// function Page() {
//   return <div className="page">
//   <Post
//     name="Rayyan"
//     profilePic="https://tinyurl.com/euy4hh84"
//     postDate="12 Dec 2018"
//     postText=""
//     postImg="https://tinyurl.com/3ven3c62"
//   />

//   <Post
//     name="Arslan"
//     profilePic="https://tinyurl.com/3wf7d6er"
//     postDate="14 Sep 2022"
//     postText=""
//     postImg="https://tinyurl.com/3nzk2263"
//   />

//   <Post
//     name="Elizabeth"
//     profilePic="https://tinyurl.com/ym9htpet"
//     postDate="12 Jun 2022"
//     postText="Helicopter Helicopter"
//     postImg="https://tinyurl.com/yck5fxds"
//   />

//   <Post
//     name="CEO Mindset"
//     profilePic="https://tinyurl.com/4d6kb9ex"
//     postDate="12 Jun 2022"
//     postText=""
//     postImg="https://tinyurl.com/25tsnm6k"
//   />

//   <Post
//     name="M Inzamam Malik"
//     profilePic="https://tinyurl.com/sj8m8h5n"
//     postDate="12 Jun 2022"
//     postText="will soon make a video on how to deploy a chatbot on whatsapp using their new whatsapp business cloud api previously facebook was not giving access of their whatsapp business api to everyone and for individual like me it was mandatory to use whatsapp business api through third party vendor such"
//     postImg="https://tinyurl.com/4nkkhtbz"
//   />

//   <Post
//     name="CEO Mindset"
//     profilePic="https://tinyurl.com/4d6kb9ex"
//     postDate="12 Jun 2022"
//     postText=""
//     postImg="https://tinyurl.com/4xfjsk6s"
//   />
// </div>
// }

// ReactDOM.render(<Page/>,document.querySelector("#root"));
