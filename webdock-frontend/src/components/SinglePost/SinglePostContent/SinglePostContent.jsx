import React from "react";

import "./SinglePostContent.scss";

export default function SinglePostContent({ postContent }) {
  const formattedContent = postContent.replace(/\n/g, '<br>');
  return (
    <div>
      {/* important when using dangerouslySetInnerHTML, to sanitize data in database. It opens xss vulnerabilities */}
      <p dangerouslySetInnerHTML={{ __html: formattedContent }}></p> 

    </div>
  );
}