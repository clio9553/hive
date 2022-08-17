import React from 'react'
import { forwardRef } from 'react'
import '../../styles/about.css'

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="about-section"  >
            <div className="about-us">
                <h1 className="about-heading">
                    Who am I?
                </h1>
                <div className="about-content">
                    <div className="mck img"></div>
                    <div className="me-desc">
                        <h2 className="title">Mcknight Kuria</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis ullam corrupti, nobis delectus eligendi dolores obcaecati ipsa autem eos porro in nam, explicabo id dicta officiis debitis iste repellat!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default About
