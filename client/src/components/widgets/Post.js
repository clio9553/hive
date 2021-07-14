import React from "react";
import { Link } from "react-router-dom";
import "../../styles/post.css";

function Post({ post }) {
  let style = {
    height: " 200px",
    width: "300px",
    borderRadius: "10px",
    background: "url(" + post.imageUrl + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Link to={`/${post._id}`}>
      <div className="post-preview-container">
        <div className="post-preview-row">
          <div className="post-preview-media">
            <div className="post-preview-image" style={style}></div>
          </div>
          <div className="post-preview-words">
            <div className="post-preview-stuff">
              <div className="post-preview-title">{post.title}</div>

              <p>{post.created}</p>
            </div>
            <div className="snippet">{post.snippet}</div>
            <div className="post-preview-desc">

              <div className="likes">
                <div className="value">80</div>
                <div className="desc">Likes</div>
              </div>
              <div className="views">
                <div className="value">4,709</div>
                <div className="desc">Views</div>
              </div>
              <div className="date">
                <div className="value">50</div>
                <div className="desc">dislikes</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
