import React from 'react'
import '../../styles/about.css'
function About() {
    return (
        <section className="about-section"  >
            <div className="about-us">
                <h1 className="about-heading">
                    Who are we?
                </h1>
                <div className="about-content">
                    <div className="clio img"></div>
                    <div className="me-desc">
                        <h2 className="title">Clinton Omondi</h2>
                        <p>
                            Mobile and web app developer in <strong>Flutter/Dart</strong> and <strong>React Js </strong> respectively. Also have a keen interest in <strong>Robotics</strong> and <strong>Artificial Intenlligence</strong>.
                        </p>
                    </div>
                    <div className="me-desc last">
                        <h2 className="title">Mark Odhiambo</h2>
                        <p>
                            A computer engineering student, programming and  animation enthusiast, versatile in machine learning and <strong>elcetronics designs</strong>, These are some of the things that describe me.
                        </p>
                    </div>
                    <div className="mark img"></div>
                </div>
            </div>
        </section>
    )
}

export default About
