import "./ListViewPostItem.scss";
import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

import { Link } from 'react-router-dom';

export default function ListViewPostItem({ id, title, category, status, numberOfComments, statusColor, totalUpvotes, indicatorColor, myOwnStatus, content, date }) {

  return (
    <Link 
    to={`/posts/${id}`} 
    className="listview-child-container"
    >
      <div className="listview-child-container__button">
        <UpvoteBtn
          numberOfUpvotes={totalUpvotes}
        />
      </div>

      <div className="listview-child-container__title-category-tag">
        <div className="listview-child-container__flex">
          <p className="listview-child-container__title">{title}</p>
          <div>&middot;</div>
          <p className="listview-child-container__category">{category}</p>
          <div>&middot;</div>
          <p className="listview-child-container__date">{date}</p>
        </div>

        <div className="listview-child-container__tag-parent">
          { status && <p className={`listview-child-container__tag ${statusColor}`}>{status}</p>}
          { myOwnStatus && <p className={`listview-child-container__tag tag-my-post-color`}>My Post</p>}
        </div>
        <p className="listview-child-container__content">{content}</p>
      </div>

      <div className="listview-child-container__comment">
        <span className="listview-child-container__comment__icon"></span>
        <p>{numberOfComments}</p>
      </div>

      <div className={`listview-child-container__indicator ${indicatorColor}`}/>

    </Link>
  );
}
