import React, { Component } from "react";
import Navigation from "../core_widgets/Navigation";
import About from "../sections/About";
import Categories from "../sections/Categories";
import Landing from "../sections/Landing";
import MainHome from "../sections/MainHome";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: 'all technologies', 
    }
    this.handleCategory = this.handleCategory.bind(this);

  }
  handleCategory(choice) {
    this.setState({
      category: choice
    });
  }
  render() {
   const categories= [
        "all technologies",
        "bio technology",
        "food technology",
        "agro technology",
        "finance technology",
      ]
    return (
      <div>
        <Landing />
        <Navigation />
        <Categories categories={categories} handleCategory={(cat)=>this.handleCategory(cat)} />
        <MainHome category={this.state.category} />
        <About  />
      </div>
    );
  }
}
export default Home;
