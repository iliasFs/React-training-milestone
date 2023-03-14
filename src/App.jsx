import React from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <div>
        <PostsList
          modalIsVisible={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </div>
    </>
  );
}

export default App;
