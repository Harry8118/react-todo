import React, { useState } from "react";
import MyButton from "./button/Mybutton";

import Myinput from "./input/Myinput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Myinput
        type="text"
        placeholder="post title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <Myinput
        type="text"
        placeholder="pasta description"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>create a post</MyButton>
    </form>
  );
};

export default PostForm;
