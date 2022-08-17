import React from "react";
import Posts from "../widgets/Posts";
import "../../styles/mainhome.css";
function MainHome({category}) {
  return (
    <section className="home-main-section">
      <div className="home-main">
        <div className="main-row">
          <div className="main-content">
            <Posts category={category} />
          </div>
        </div>
      </div>
    </section>
  );

}
export default MainHome;
