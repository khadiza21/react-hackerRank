import Input from "./Input";
import PostDisplay from "./PostDisplay";
import React, { useState } from "react";
function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState([])


  const handleBlog = () => {
    if (title !== "" && description !== "") {
      setSubmittedData(prevData => [...prevData, { title, description }])
      setTitle("");
      setDescription("")
    }


  }

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input setTitle={setTitle} setDescription={setDescription} title={title} description={description} />
        <button data-testid="create-button" className="mt-10" onClick={() => handleBlog()}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay submittedData={submittedData} setSubmittedData={setSubmittedData} />
      </div>
    </div>
  );
}

export default Home;
