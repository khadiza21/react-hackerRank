import React from "react";

function PostDisplay({ submittedData, setSubmittedData }) {

  const handleDelete = (deletedId) => {
    setSubmittedData(prevData =>
      prevData.filter((_, index) => index !== deletedId)
    );

  }
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {
        submittedData && submittedData.map((blog, index) =>
          <div key={index} className="post-box">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        )
      }
    </div>
  );
}

export default PostDisplay;
