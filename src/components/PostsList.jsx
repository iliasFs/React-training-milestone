import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

const PostsList = () => {
  const [textArea, setTextArea] = useState("");
  const [author, setAuthor] = useState("");
  const [modalisVisible, setModalIsVisible] = useState(true);

  const bodyChangeHandler = (event) => {
    setTextArea(event.target.value);
  };

  const authorChange = (event) => {
    setAuthor(event.target.value);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      {modalisVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChange}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} body={textArea} />
        <Post author="Manuel" body="Learning React is awesomw too" />
      </ul>
    </>
  );
};

export default PostsList;
