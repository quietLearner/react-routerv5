import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts}></Feed>
      ) : (
        <p style={{ margintop: "2em" }}>No Posts</p>
      )}
    </main>
  );
};

export default Home;
