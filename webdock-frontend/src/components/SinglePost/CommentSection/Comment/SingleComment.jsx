import Username from "../../../Username/Username";
import "./SingleComment.scss";
import formatCustomDate from "../../../../helper/formatDate";
import { checkAdmin } from "../../../../helper/checkAdmin";
import { useState, useRef } from "react";

export default function SingleComment({ User, content, Replies, createdAt, id, handleReply }) {
  const [replying, setReplying] = useState(false);
  const [newRender, setNewRender] = useState(false);
  const inputRef = useRef();

  const handleReplyClick = (inputText) => {
    var inputValue = "";
    if(inputText === null || inputText === undefined) {
      inputValue = inputRef.current.value;
      inputRef.current.value = "";
    }
    else {
      inputValue = inputText;
      setNewRender(!newRender);
    }
    handleReply(inputValue, id)
  };
  
  return (
    <div className="comment-container">
      <div className="comment-user">

        <div className={`comment-user__avatarURL${User && checkAdmin(User.email) ? "--admin" : ""}`}>
          {User.name.charAt(0)} <br />
        </div>

        <h4>
          <Username isAdmin={User && checkAdmin(User.email)} user={User ? User.name : 'Unknown'} />
        </h4>
      </div>
      <p>{content}</p>

      <div className="comment-meta-container">
        <span className="comment-meta-container__icon"></span>
        <span>•</span>
        <div>
          {formatCustomDate(new Date(createdAt))}
          </div> 
        <div>
          <button className="reply-button-style" onClick={() => setReplying(true)}>reply</button>
        </div>
        {/* <div className="comment-meta-container__reply-btn">
          {loggedIn ? (
            <a href="#"> Reply </a>
          ) : (
            <a href="#"> Login to reply </a>
          )}
        </div> */}
      </div>

      {replying === true && (
          <div className="reply-input-container">
            <input  ref={inputRef} type="text" />
            <button className="send-button-style" onClick={() => {
              setReplying(false);
              handleReplyClick();
              }}>
              Send
              </button>
          </div>
        )}

      {Replies && Replies.length > 0 && (
        <div className="replies-container">
          {Replies.map((reply) => (
            <SingleComment key={reply.id} {...reply} handleReply={handleReplyClick} />
          ))}
        </div>
      )}

    </div>
  );
}
