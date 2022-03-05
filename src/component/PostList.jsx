import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remuve }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>posts not found</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "teal" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remuve={remuve} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
