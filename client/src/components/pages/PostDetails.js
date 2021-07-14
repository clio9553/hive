import React, { Component } from "react";
import MoreDetails from "../sections/MoreDetails";

class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      error: "",
      isError: false,
      isLoading: false,
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    fetch(`api/posts/${params.id}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({ post: data, isLoading: false });
          });
        } else {
          if (res.status === 404) {
            throw Error("Unable to get data");
          } else {
            throw Error("Unidentified error occured!");
          }
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, isLoading: false, isError: true });
      });
  }
  render() {
    let child;
    if (this.state.isLoading) {
      child = <p>Is Loading ...</p>;
    } else {
      if (this.state.isError) {
        child = <p>{this.state.error}</p>;
      } else {
        child = <MoreDetails post={this.state.post} />;
      }
    }
    return <section className="post-details">{child}</section>;
  }
}

export default PostDetails;

// 3 days
// 21 days
// 19th july
