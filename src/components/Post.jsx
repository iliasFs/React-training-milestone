import React from "react";
import classes from './Post.module.css'
const Post = ({author, body}) => {
  return (
    <div className={classes.post}>
      <h3>{author}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
