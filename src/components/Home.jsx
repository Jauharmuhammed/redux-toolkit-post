import React from 'react'
import PostForm from './PostForm'
import PostList from './PostList'

const Home = () => {
  return (
    <div className='lg:flex lg:gap-16'>
        <PostList/>
        <PostForm/>
    </div>
  )
}

export default Home