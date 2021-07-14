import React from "react";
import useFetch from "../../hooks/useFetch";
import HiveLoader from "./HiveLoader";
import Post from "./Post";

function Posts({ category }) {
  let child;
  const { data: posts, error, isError, isFetching } = useFetch("api/posts");
  if (isFetching) {
    child = <HiveLoader isFull={true} />
  } else {
    if (isError) {
      child = <p>{error}</p>;
    } else {
      child =
        posts?.length > 0 ? (
          posts.filter((post) => {
            let pass;
            switch (category) {
              case 'all technologies':
                pass = true;
                break;
              default:
                pass = post.category === category;
                break;
            }
            return pass;
          }).map(post_ => <Post post={post_} key={post_._id} />)
        ) : (
          <p>There are no posts yet!</p>
        );
    }
  }
  return <div className="posts-container">{child}</div>;
}

export default Posts;
