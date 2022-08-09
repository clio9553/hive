import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./core_widgets/Footer";
import Home from "./pages/Home";
// ? css files
import "../styles/global.css";
import PostDetails from "./pages/PostDetails";
import NewPost from "./pages/NewPost";
import Splash from "./pages/Splash";
import Login from "./pages/Login";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isLoggedin: false,
    }
    this.handleSignIn = this.handleSignIn.bind(this)
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 5000);
  }

  handleSignIn() {
    this.setState({ ...this.state, isLoggedin: true })
  }
  render() {
    // return <Login />
    return this.state.isLoading ? (<Splash />) : this.state.isLoggedin ? (
      <Router>
        <Switch>
          <Route exact path="/create-post" component={NewPost} />
          <Route path="/:id" component={PostDetails} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    ) : <Login loginCallback={this.handleSignIn} />
  }
}

export default App;
