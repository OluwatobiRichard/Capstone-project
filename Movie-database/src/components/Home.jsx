import React from "react";
import Hero from "./Hero";
import Upcoming from "./Upcoming";
import Trending from "./Trending";
import Latest from "./Latest";

function Home() {
  return (
    <>
      <Hero />
      <Upcoming />
      <Trending />
      <Latest />
    </>
  );
}

export default Home;
