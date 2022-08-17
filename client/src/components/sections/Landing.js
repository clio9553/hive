import React from "react";
import { SiHive } from "react-icons/si";
import "../../styles/landing.css";
function Landing() {
  return (
    <section className="landing-section">
      <div className="landing">
        <h1 className="landing-words">
          <SiHive className="site-icon" fontSize={50} />
          <div className="site-name"> Invesite</div>
          {/* <div className="site-extra">Where Capital meets entrepreneurs</div> */}
        </h1>
      </div>
    </section>
  );
}

export default Landing;
