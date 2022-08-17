import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../styles/details.css";
import bg from '../../assets/images/bgs/form2.jpg';

import HiveLoader from "../widgets/HiveLoader";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import ReactPlayer from 'react-player/youtube'


function MoreDetails({ post, isLoading }) {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000);

  }, [loading])
  const playerOptions = {
    src: post.videoUrl,
    controls: true,
    autoplay: false,
  };
  const videojsOptions = {
    fluid: true,
    poster: bg,
  };

  const HeaderImage = {
    margin: 'auto',
    width: "80%",
    background: "no-repeat url(" + post.imageUrl +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",

  }
  var date = new Date(post.created)
  return (
    <section className="details-section">
      {loading ?
        <HiveLoader isFull={true} />
        : <div className="details-container">
          <Link to='/' className="back-button"  >
            <FiChevronLeft size="1.5rem"
            />
          </Link>
          <div className="date"><p>{date.toDateString()}</p></div>
          <div className="details-header">
            <div className="project-title">{post.title}</div>
          </div>
          <div className='banner' style={HeaderImage} ></div>

          <div className="details-snippet">
            <p>"{post.snippet}"</p>
          </div>
          <div className="details-video">
            <div className="brief-vid-desc">
              <div className="vid-desc-title">Project Preview</div>
              <div className="video-prev-words">
                Below is a video showing a preview of what our project "{post.title}" is all about and how we intend to "{post.snippet}", with your help, this dream could become a reality. Enjoy ❤️
              </div>
            </div>
            <ReactPlayer className="actual-video"
              url={post.videoUrl}
            />
          </div>
          <div className="details-words small-container">
            <ReactMarkdown children={post.description} width={"800px"} height={"450px"} />
          </div>
        </div>}

    </section>
  );
}

export default MoreDetails;
