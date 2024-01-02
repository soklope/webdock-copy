import { React, useEffect, useState } from "react";

import "./UpvoteBtn.scss";

export default function UpvoteBtn({ numberOfUpvotes, postId }) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(numberOfUpvotes);
  const loggedInUser = localStorage.getItem("user");

  const upvotePost = async () => {
    try {
      const response = await fetch(`${window.apiHostName}/v1/upvotepost/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: loggedInUser,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      //If data has "createdUpvote" incremtent upvotes, otherwise decrement.
      if (data.createdUpvote) {
        setUpvotes(upvotes + 1)
        setIsUpvoted(true)
      } else {
        setUpvotes(upvotes - 1)
        setIsUpvoted(false)
      }

      console.log("data is:", data);
      console.log("Upvote successful!", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };


  const handleUpvotes = () => {
    if (loggedInUser) {
      // setIsUpvoted(!isUpvoted);
      upvotePost();
    } else {
      const userConfirmed = window.confirm("You need to login to upvote, go to login page?");

      if (userConfirmed) {
        // Redirect to a specific route using React Router
        window.location.href = `/login`;
      } 
    }
  };


  return (
    <div
      className={`upvote-btn${isUpvoted ? "--active" : ""}`}
      onClick={handleUpvotes}
    >
      <div className={`upvote-btn__icon${isUpvoted ? "--active" : ""}`}></div>
      <div className={`upvote-btn__text${isUpvoted ? "--active" : ""}`}>
        {upvotes}
      </div>
    </div>
  );
}
