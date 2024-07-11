import React, { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import HeroSection from "../miniComponents/HeroSection";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";

const Home = () => {
  const { mode } = useContext(Context);
  return (
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <HeroSection />
        <TrendingBlogs />
        <LatestBlogs />
        <PopularAuthors />
      </article>
  );
};

export default Home;
