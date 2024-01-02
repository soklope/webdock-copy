import Username from "../../../Username/Username";
import "./SingleComment.scss";
import formatCustomDate from "../../../../helper/formatDate";
import { checkAdmin } from "../../../../helper/checkAdmin";

export default function SingleComment({ User, content, Replies, createdAt, Email }) {
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
        {/* <div className="comment-meta-container__reply-btn">
          {loggedIn ? (
            <a href="#"> Reply </a>
          ) : (
            <a href="#"> Login to reply </a>
          )}
        </div> */}
      </div>

      {Replies && Replies.length > 0 && (
        <div className="replies-container">
          {Replies.map((reply) => (
            <SingleComment key={reply.id} {...reply} />
          ))}
        </div>
      )}

    </div>
  );
}
