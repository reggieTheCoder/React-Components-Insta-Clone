// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";



const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(""); // added state 

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      
      <ul>
        {props.comments.map((comment) => (
         <Comment comment = {comment} />
        ))}
      </ul>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
