import React from "react";
import { Link } from "react-router-dom";
import "../../styles/post.css";

function Post({ post, index }) {
  let style = {
    height: " 200px",
    width: "300px",
    borderRadius: "10px",
    background: "url(" + post.imageUrl + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  var date = new Date(post.created);
  var row_c = (index % 2 === 0) ? "post-preview-row" : "post-preview-row odd"
  var des_c = (index % 2 === 0) ? "post-preview-desc" : "post-preview-desc odd"
  return (
    <Link to={`/${post._id}`}>
      <div className="post-preview-container">
        <div className={row_c}>
          <div className="post-preview-media">
            <div className="post-preview-image" style={style}></div>
          </div>
          <div className="post-preview-words">
            <div className="post-preview-stuff">
              <div className="post-preview-title">{post.title}</div>
              <div className="post-preview-date">{date.toDateString()}</div>
            </div>
            <div className="snippet"><p>{post.snippet}</p> </div>
            <div className={des_c}>
              <div className="likes">
                <div className="value">0</div>
                <div className="desc">Likes</div>
              </div>
              <div className="views">
                <div className="value">0</div>
                <div className="desc">Views</div>
              </div>
              <div className="date">
                <div className="value">0</div>
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
