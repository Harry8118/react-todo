import React, { useState } from "react";
import "./stiles/App.css";

import PostList from "./component/PostList";
import PostForm from "./component/UI/PostForm";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import MyButton from "./component/UI/button/Mybutton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const remvePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        create a post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remuve={remvePost}
        posts={sortedAndSearchedPosts}
        title="Post List"
      />
    </div>
  );
}

export default App;
