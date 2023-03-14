import React from "react";
import classes from "./NewPost.module.css";

const NewPost = ({onBodyChange, onAuthorChange, onCancel}) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" onChange={onBodyChange} required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
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
