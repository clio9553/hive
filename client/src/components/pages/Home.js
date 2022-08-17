import React, { useState, useCallback, useRef } from "react";
import Navigation from "../core_widgets/Navigation";
import About from "../sections/About";
import Categories from "../sections/Categories";
import Landing from "../sections/Landing";
import MainHome from "../sections/MainHome";

const Home = ({ signOutCallback }) => {
  const [category, setCategory] = useState('at');

  const aboutRef = useRef();
  const categoryRef = useRef();

  const handleCategory = useCallback((choice) => {
    setCategory(choice);
  }, []);

  const categories = [{
    label: "general technology",
    value: "gt"
  }, {
    label: "bio technology",
    value: "bt"
  }, {
    label: "food technology",
    value: "ft"
  }, {
    label: "agro technology",
    value: "at"
  }, {
    label: "finance technology",
    value: "ft"
  }];

  return <div>
    <Navigation refs={{ aboutRef, categoryRef }} signOutCallback={signOutCallback} />
    <Landing />
    <Categories ref={categoryRef} categories={categories} handleCategory={cat => handleCategory(cat)} selectedCategory={category} />
    <MainHome category={category} />
    <About ref={aboutRef} />
  </div>
};
export default Home;
