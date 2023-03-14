import React from "react";
import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ onCancel,onAddPost }) => {
  const [textArea, setTextArea] = useState("");
  const [author, setAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setTextArea(event.target.value);
  };

  const authorChange = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: textArea,
      author: author,
    };
    console.log(postData);
    onAddPost(postData)
    onCancel()
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" onChange={bodyChangeHandler} required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChange} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
