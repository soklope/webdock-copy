import React, { useEffect } from "react";

import UpvoteBtn from "../../UpvoteBtn/UpvoteBtn";
import Username from "../../Username/Username";

import "./SinglePostHeading.scss";
import LabelTag from "../../LabelTag/LabelTag";
import { getColorTagFromStatus } from "../../../helper/colorFromStatus";
import formatCustomDate from "../../../helper/formatDate";

export default function SinglePostHeading({
  postTitle,
  postStatus,
  postDate,
  postCategory,
  postAuthor,
  isAdmin,
  myOwnStatus,
}) {
  return (
    <>
      <div className="single-post-heading">
        <div className="single-post-heading__meta">
          <h1 className="single-post-heading__title">{postTitle}</h1>

          <div className="single-post-heading__meta-container">
            <LabelTag
              LabelStatus={postStatus}
              LabelColor={getColorTagFromStatus(postStatus)}
            />
            {myOwnStatus && (
              <LabelTag
                LabelStatus={'My Post'}
                LabelColor={getColorTagFromStatus('My Post')}
              />
            )}

            <div className="single-post-heading__desktop">
              <div>Category: {postCategory}</div>
              <span>•</span>
              <div>Date: {formatCustomDate(new Date(postDate))}</div>
              <span>•</span>
              <Username user={postAuthor} isAdmin={isAdmin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
