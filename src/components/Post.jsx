import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

const Post = ({ username, profilePicture, postImage }) => {
  return (
    <div className='post'>
        <div className='post-header'>
            <img className='profile-picture' src={profilePicture} alt="image" />
            <p>{username}</p>
        </div>
        <div className='post-image-container'>
            <img className='post-image' src={postImage} alt="image" />
        </div>
        <div className='post-interactions'>
            <FaRegHeart />
            <FaRegComment />
            <PiShareFatBold />
        </div>

    </div>
  )
}

export default Post