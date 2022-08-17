import React from "react";
import useFetch from "../../hooks/useFetch";
import HiveLoader from "./HiveLoader";
import Post from "./Post";

function Posts({ category }) {
  let child;
  const { data: posts, error, isError, isFetching } = useFetch("api/posts");
  if (isFetching) {
    // child = <HiveLoader isFull={true} />
    child = <p>Loading..</p>
  } else {
    if (isError) {
      child = <p>{error}</p>;
    } else {
      child =
        posts?.length > 0 ? (
          posts.filter((post) => {
            switch (category) {
              case 'at':
                return true;
              default:
                return post.category === category;
            }
          }).map((post_, index) => <Post post={post_} key={post_._id} index={index} />)
        ) : (
          <p>There are no posts yet!</p>
        );
    }
  }
  return <div className="posts-container">{child}</div>;
}

export default Posts;
