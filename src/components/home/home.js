import React from 'react'
import Post from '../post/post'
import posts from '../../../blog-posts.json'

const Home = () => (
    <div>
        { posts.posts.map(post => <Post {...post} key={post.slug} titleLink />) }
    </div>
)

export default Home