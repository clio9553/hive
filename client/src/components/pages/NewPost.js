import React, { Component } from "react";
import DropDown from "../widgets/DropDown";
import ReactMarkdown from "react-markdown";
import { FiAirplay, FiCalendar, FiCamera, FiChevronLeft, FiCpu, FiFeather, FiInstagram, FiKey, FiScissors, FiTag, FiType } from 'react-icons/fi'
import "../../styles/new_post.css";
import { Link } from "react-router-dom";

import { PulseLoader } from "react-spinners";
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
          alert("Project added to INVESITE succesfully!");
        } else {
          alert("Failed to add project to INVESITE!!\nError: " + resp.message);
        }
      })
    }
    );
  }
  render() {
    const categories = [
      { label: "general technology", value: "gt" },
      { label: "finance technology", value: "ft" },
      { label: "food technology", value: "ft" },
      { label: "bio technology", value: "bt" },
      { label: "agro technology", value: "at" },
    ];
    const phases = [
      { label: "concept phase", value: "1" },
      { label: "research phase", value: "2" },
      { label: "funding phase", value: "3" },
      { label: "development phase", value: "4" },
      { label: "complete phase", value: "5" },
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
        <div className="new-header">
          <Link to='/' className="back-button"  >
            <FiChevronLeft size="2rem"
            />
          </Link>
        </div>
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
            <div className="input-desc-title">Project Basics</div>
            <p>
              This is basic information about your project and what it entails.
              Make sure to meet the required standards and of course, make it
              <span className="desc-special"> interesting.</span> In any case consult with your{" "}
              <em>peers</em> and ensure that you have a{" "}
              <span className="desc-special">unanimous</span> decision on the fields below as they
              are the <span className="desc-special">selling points</span> for your project. Happy
              Hacking!! 🎉🐱
            </p>
          </div>
          <div className="form">
            <div className="form-1">
              <div className="input-input">
                <FiType fontSize={22} />
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Enter your project title"
                  required
                  autoFocus
                />
              </div>
              <div className="input-input">
                <FiScissors fontSize={22} />
                <input
                  type="text"
                  name="snippet"
                  value={snippet}
                  onChange={this.handleChange}
                  placeholder="Briefly describe your project"
                  required
                />
              </div>
              <div className="input-input">
                <FiInstagram fontSize={22} />
                <input
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.handleChange}
                  placeholder="Paste your image url"
                  required
                />
              </div>

              <div className="input-input">
                <FiAirplay fontSize={22} />
                <input
                  type="text"
                  name="videoUrl"
                  value={videoUrl}
                  onChange={this.handleChange}
                  placeholder="Paste your video Url"
                  required
                />
              </div>
              <DropDown
                icon={<FiCpu fontSize={22} />}
                options={categories}
                onChange={(option) => this.handleSelect('category', option)}
              />


              <DropDown
                icon={<FiFeather fontSize={22} />}
                options={phases}
                onChange={(option) => this.handleSelect('phase', option)}
              />
            </div>
          </div>
          <div className="input-desc">
            <div className="input-desc-title">Project Description</div>
            <p>
              Oh well, that was the hard part, smooth sailing from here 😁😁.
              How much do you know about <span className="desc-special">markdown editors</span>? If
              your answer was <span className="desc-special">"a lot 👌"</span>, then you're in for a
              treat. If your answer was <span className="desc-special">"very little 😢"</span>, worry
              not! We are a <span className="desc-special">invesite</span> remember? We got you! All you
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
              <span className="desc-special">captivating</span> as well, the most captivating
              description in the world 😆😆🌟. Also make sure it fully covers the
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
                <textarea
                  className="input"
                  name="description"
                  onChange={this.handleChange}
                  cols="90"
                  rows="20"
                  value={description}
                  required
                />
              </label>
            </div>
          </div>
          <div className="input-desc" id="output">
            <div className="input-desc-title">Pixie Dust</div>
            <p>
              I'll admit, what you just wrote is not eye captivating at all fahm
              😆😆,sorry, not sorry. Like I said, I got you! If you believe you
              have done pretty much all that is needed in the{" "}
              <span className="desc-special">description editor</span> or you just want to check how
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

          <div className="input-desc">
            <div className="input-desc-title">Final Product</div>
            <p>
              Okay! We're done ...Awesome work so far. Below is how your
              description will appear in the{" "}
              <span className="desc-special">project description</span> page alongside other
              content like your
              <span className="desc-special"> video, image , title </span> e.t.c.
            </p>{" "}
            <div className="mark-down-page ">
              <ReactMarkdown children={description} />
            </div>
            <p>
              Now that that is over, all thats is left to do is hit the{" "}
              <span className="desc-special">submit</span> button and let  <span className="desc-special">INVESITE</span>{" "}
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
        </form>
      </section>
    );
  }
}

export default NewPost;

