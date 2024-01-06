import { useState } from "react";
import "./CommentSection.scss";
import SingleComment from "./Comment/SingleComment.jsx";

export default function CommentSection({ comments, postId, updateComments, updateReply }) {
	const currentUser = JSON.parse(localStorage.getItem("user"));
	const isUserLoggedIn = currentUser && currentUser.id;

	const [commentData, setCommentData] = useState(
		currentUser
		&&  {
			content: "",
			user_id: currentUser.id,
			post_id: postId,
			}
	);
	
	const handleReplyClick = async (replyText, comentId) => {
		//Call backend recive the new created reply

		try {
			const response = await fetch(`${window.apiHostName}/v1/createreply`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					content: replyText,
					user_id: commentData.user_id,
					comment_id: comentId,
				}),
			});

			if(response.ok) {
				const result = await response.json();

				const newReply = { //Test return object (Replace with the returned object from backend)
					id: result.data.id, 
					content: result.data.content, 
					user_id: result.data.user_id, 
					like_id: result.data.like_id ?? null, 
					comment_id: result.data.comment_id, 
					createdAt: result.data.createdAt, 
					updatedAt: result.data.updatedAt, 
					User: {
						name: currentUser.name,
						email: currentUser.email,
					},
				}

				updateReply(newReply);
				setCommentData(prevData => {
					return { ...prevData, content: "" };
				});
			} else {
				console.error("Error:", response.status);
			}

		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleSubmit = async () => {
		console.log(commentData);
					  
		try {
			const response = await fetch(`${window.apiHostName}/v1/createcomment`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					content: commentData.content,
					user_id: commentData.user_id,
					post_id: commentData.post_id,
				}),
			});

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);

        const newComment = {
            id: result.id, 
            ...commentData,
            User: {
				name: currentUser.name,
				email: currentUser.email,
			},
            Replies: [], 
            createdAt: new Date().toISOString(),
        };
        // Update the comments state to include the new comment, and clear inputfield
		updateComments(newComment);	
		setCommentData(prevData => {
			return { ...prevData, content: "" };
		});

      	} else {
			console.error("Error:", response.status);
		}
    } catch (error) {
      console.error("Error:", error);
    }
  };

	return (
		<div className="comment-section-container">

			{isUserLoggedIn ? (

			<div className="comment-post-container">
				
				<textarea 
					className="comment-post"
					type="text"
					placeholder="Leave a comment"
					value={commentData.content}
					onChange={(event) =>
                    setCommentData((prevData) => ({
                      ...prevData,
                      content: event.target.value,
                    }))
                  }
				></textarea>
				<button 
					className="submit-comment"
					onClick={handleSubmit}
					disabled={!commentData.content.trim()}>
					SUBMIT
				</button>
			</div>

			) : ( 

				<div className="log-in-to-comment">
					<p>Log in to leave a comment</p>
				</div> 
			)}

			{comments.map((comment) => (
				<SingleComment 
					key={comment.id} {...comment} 
					content={comment.content} 
					createdAt={comment.createdAt}
					handleReply={handleReplyClick}
				/>
			))}
		</div>
	);
}