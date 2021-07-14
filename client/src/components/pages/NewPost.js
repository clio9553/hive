import React, { Component } from "react";
import DropDown from "../widgets/DropDown";
import ReactMarkdown from "react-markdown";
import { FiChevronLeft } from 'react-icons/fi'
import { PulseLoader } from "react-spinners";
import "../../styles/new_post.css";
import { Link } from "react-router-dom";

class NewPost extends Component {
  constructor() {
    let firstdesc =
      "# Sample Description\n\n\n### Requirements\n\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaenim quis, labore, temporibus minima sunt fuga dolores reprehenderit reiciendis cupiditate consequatur. Ex porro nullaamet quo. Optio, at consequatur!\n\n\n### Ideology and theorems\n\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. In quaenim quis, labore, temporibus minima sunt fuga dolores reprehenderit reiciendis cupiditate consequatur.";
    super();
    this.state = {
      isLoading: false,
      title: "",
      imageUrl: "",
      videoUrl: "",
      snippet: "",
      description: firstdesc,
      phase: "Concept phase",
      category: "general technologies",
      created: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState((prev) => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  }
  handleSelect(name, option) {
    this.setState((prev) => {
      return {
        [name]: option,
      };
    });
  }
  handleSubmit(e, data) {
    e.preventDefault();
    this.setState({ isLoading: true });
    // post request
    fetch("/api/create-post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      this.setState({ isLoading: false });
      res.json().then((resp) => {
        if (res.status === 200) {
          alert("Project added to HIVE succesfully!");
        } else {
          alert("Failed to add project to HIVE!!\nError: " + resp.message);
        }
      })
    }
    );
  }
  render() {
    const categories = [
      "general technology",
      "bio technology",
      "food technology",
      "agro technology",
      "finance technology",
    ];
    const phases = [
      "concept phase",
      "research phase",
      "funding phase",
      "development phase",
      "complete phase",
    ];
    const {
      title,
      imageUrl,
      videoUrl,
      description,
      snippet,
      phase,
      category,
      isLoading,
    } = this.state;
    return (
      <section className="new-post-page">
        <Link to='/' className="back-button"  >
          <FiChevronLeft size="2rem"
          />
        </Link>
        <h1 className="page-title">The Nursery.</h1>
        <form
          onSubmit={(e) =>
            this.handleSubmit(e, {
              title: title,
              imageUrl: imageUrl,
              videoUrl: videoUrl,
              snippet: snippet,
              description: description,
              phase: phase,
              category: category,
              created: "",
            })
          }
        >
          <div className="input-desc">
            <h2 className="input-desc-title">Project Basics</h2>
            <p>
              This is basic information about your project and what it entails.
              Make sure to meet the required standards and of course, make it
              <strong> interesting.</strong> In any case consult with your{" "}
              <em>peers</em> and ensure that you have a{" "}
              <strong>unanimous</strong> decision on the fields below as they
              are the <strong>selling points</strong> for your project. Happy
              Hacking!🎉🐱‍👤☕
            </p>
          </div>
          <div className="form">
            <div className="form-1">
              <label className="form-label">
                Title
                <input
                  className="input dark"
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Enter your project title"
                  required
                  autoFocus
                />
              </label>
              <label className="form-label">
                Snippet
                <input
                  className="input dark"
                  type="text"
                  name="snippet"
                  value={snippet}
                  onChange={this.handleChange}
                  placeholder="Briefly describe your project"
                  required
                />
              </label>
              <label className="form-label">
                Image URL
                <input
                  className="input dark"
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.handleChange}
                  placeholder="Paste your image url"
                  required
                />
              </label>
              <label className="form-label">
                Video URL
                <input
                  className="input dark"
                  type="text"
                  name="videoUrl"
                  value={videoUrl}
                  onChange={this.handleChange}
                  placeholder="Paste your video Url"
                  required
                />
              </label>

              <label className="form-label">
                Category
                <DropDown
                  options={categories}
                  onChange={(option) => this.handleSelect('category', option)}
                />
              </label>
              <label className="form-label">
                Phase
                <DropDown
                  options={phases}
                  onChange={(option) => this.handleSelect('phase', option)}
                />
              </label>
            </div>
          </div>
          <div className="input-desc">
            <h2 className="input-desc-title">Project Description</h2>
            <p>
              Oh well, that was the hard part, smooth sailing from here 😁😁.
              How much do you know about <strong>markdown editors</strong>? If
              your answer was <strong>"a lot👌"</strong>, then you're in for a
              treat. If your answer was <strong>"very little😢"</strong>, worry
              not! We are a <strong>hive</strong> remember? We got you! All you
              gotta do is ...
              <a
                className="inline-link"
                href="https://medium.com/@itsjzt/beginner-guide-to-markdown-229adce30074"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <em>click me!</em>
              </a>
              <br />
              <br />
              Now, below is a markdown editor, hopefully you're a <em>
                champ
              </em>{" "}
              in that sector by now. Try make your project description as{" "}
              <strong>captivating</strong> as well, the most captivating
              description in the world😆😆🌟. Also make sure it fully covers the
              following about your project:
            </p>
            <br />
            <br />
            <ul className="desc-ul">
              <li>Ideology and concept</li>
              <li>Requirements</li>
              <li>Implementation</li>
              <li>Merits and Demerits</li>
              <li>Research references</li>
            </ul>
            <br />
          </div>
          <div className="form">
            <div className="form-2">
              <label className="form-label">
                Markdown Editor
                <textarea
                  className="input"
                  name="description"
                  onChange={this.handleChange}
                  cols="104"
                  rows="20"
                  value={description}
                  required
                />
              </label>
            </div>
          </div>
          <div className="input-desc" id="output">
            <h2 className="input-desc-title">Pixie Dust</h2>
            <p>
              I'll admit, what you just wrote is not eye captivating at all fahm
              😆😆,sorry, not sorry. Like I said, I got you! If you believe you
              have done pretty much all that is needed in the{" "}
              <strong>description editor</strong> or you just want to check how
              awesome your work is so far,{" "}
              <a href="#output" className="inline-link">
                well here it is
              </a>{" "}
              .Spoiler alert! You'll love it 😍😍. If you don't, well, it's your
              work😆😆.
              <br />
              Here's your transformed work!Congrats👏😊🎉🐱‍👤
              <br />
              <br />
            </p>{" "}
          </div>
          <div className="grey">
            <div className="input-desc">
              <h2 className="input-desc-title">Final Product</h2>
              <p>
                Okay! We're done ...Awesome work so far. Below is how your
                description will appear in the{" "}
                <strong>project description</strong> page alongside other
                content like your
                <strong> video, image , title </strong> e.t.c.
              </p>{" "}
              <div className="mark-down-page">
                <ReactMarkdown children={description} />
              </div>
              <p>
                Now that that is over, all thats is left to do is hit the{" "}
                <strong>submit</strong> button and let the <strong>HIVE</strong>{" "}
                work its magic!!!🎉🎉🎉🌟✨{" "}
              </p>
              {isLoading ? (
                <button className="new-post-btn" type="submit" disabled>
                  <PulseLoader color='white' />
                </button>
              ) : (
                <button className="new-post-btn" type="submit">
                  Submit Project
                </button>
              )}
            </div>{" "}
          </div>
        </form>
      </section>
    );
  }
}

export default NewPost;
