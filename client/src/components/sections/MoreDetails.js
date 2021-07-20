import React, { useEffect, useState } from "react";
import videojs from "video.js";
import VideoPlayer from "videojs-react-enhanced";
import "video.js/dist/video-js.css";
import ReactMarkdown from "react-markdown";
import "../../styles/details.css";
import bg from '../../assets/images/bgs/landing3.jpg';

import HiveLoader from "../widgets/HiveLoader";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";



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
      {loading ? <HiveLoader isFull={true} /> : <div className="details-container">
        <Link to='/' className="back-button"  >
          <FiChevronLeft size="1.5rem"
          />
        </Link>
        <div className="date"><p>{date.toDateString()}</p></div>
        <div className="details-header">
          <h1 className="project-title">{post.title}</h1>
        </div>
        <div className='banner' style={HeaderImage} ></div>
        
        <div className="details-snippet">
          <p>"{post.snippet}"</p>
        </div>
        <div className="details-video">
          <VideoPlayer className="actual-video"
            playerOptions={playerOptions}
            videojsOptions={videojsOptions}
          />
        </div>
        <div className="details-words small-container">
          <ReactMarkdown children={post.description} />
        </div>
      </div>}

    </section>
  );
}

export default MoreDetails;
