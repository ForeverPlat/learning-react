import React from 'react'
import posts from '../utils/posts'
import Post from './Post'

const Feed = () => {

  return (
    <div className='feed'>
        {
            posts.map(({ id, username, profilePicture, postImage }) => (
                <Post key={id} username={username} profilePicture={profilePicture} postImage={postImage} />
            ))
        }
    </div>
  )
}

export default Feed