import React from 'react'
import './index.css'
// moment Js import
import moment from "moment";
// icons import
import { AiFillLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { FaShare } from "react-icons/fa";



const Post = (props) =>  (
        <div className="post">
            <div className="postHeader">
                <img className="profile" src={props.profilePic} alt="Profile" />

                <div>
                    {props.name} <br />
                    {moment(props.postDate).fromNow()}
                </div>
            </div>

            <div className="postText">{props.postText}</div>

            <div>
                <img className="postImage" src={props.postImg} alt="Post Image" />
            </div>

            <hr />
            <div className="postFooter">
                <div className="pFooter">
                    <AiFillLike /> Like
                </div>
                <div className="pFooter">
                    <MdInsertComment /> Comments
                </div>
                <div className="pFooter">
                    <FaShare /> Share
                </div>
            </div>
            <hr />
        </div>
    );

export default Post
