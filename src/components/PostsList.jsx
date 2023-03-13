import React from 'react'
import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'

const PostsList = () => {
  return (

    <>
    <NewPost />
    <ul className={classes.posts}>
    <Post author ='Maximilian' body = 'React JS is awesome' />
    <Post author = 'Manuel' body = 'Learning React is awesomw too'/>
    </ul>
    </>
  )
}

export default PostsList
