import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostsList = ({ modalIsVisible, onStopPosting }) => {
  const [textArea, setTextArea] = useState("");
  const [author, setAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setTextArea(event.target.value);
  };

  const authorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChange}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} body={textArea} />
        <Post author="Manuel" body="Learning React is awesome too" />
      </ul>
    </>
  );
};

export default PostsList;
