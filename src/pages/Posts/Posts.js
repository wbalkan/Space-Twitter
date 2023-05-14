import React, { useEffect } from "react";
import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";

import "./Posts.css";

import postlist from "../../data/posts.json";

const navlinks = ["/Home", "/People"];

const Posts = () => {
  const [posts, changePosts] = useState(postlist);
  const [newPost, changeNewPost] = useState("");

  useEffect(() => {}, [posts]);

  const addPost = (e) => {
    e.preventDefault();
    let post_temp = posts.slice(0);
    const new_object = {
      user: "You",
      text: newPost,
    };
    post_temp.push(new_object);
    changePosts(post_temp);
    changeNewPost("");
  };

  return (
    <div className="posts">
      <NavBar links={navlinks} title="Posts" />
      <form
        onSubmit={(e) => {
          addPost(e);
        }}
      >
        <label className="newpost">
          <input
            className="post-type"
            onChange={(e) => {
              changeNewPost(e.target.value);
            }}
            type="text"
            placeholder="Speak your truth..."
            value={newPost}
          ></input>
          <button>Post!</button>
        </label>
      </form>
      {posts
        .slice(0)
        .reverse()
        .map((data, key) => {
          return (
            <div className="post" key={key}>
              <div className="username">@{data.user}:</div>
              <div className="text"> {data.text}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
