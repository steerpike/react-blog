import React from 'react'
import Post from './post'

const PostDetail = (props) => (
    <div>  
        <Post {...props.post} />
    </div>
)

export default PostDetail