import React from "react"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return
      Animations.animations.fadeInScreen(props.id)
    }
  }

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  const SCREEN_CONSTANTS = {
    description:
      "Full Stack Web and Mobile Developer with MERN Stack and Android Development Experience",
    highlights: {
      bullet: [
        "Full Stack Web Development with MERN Stack",
        "Android Mobile Development with Android SDK",
        "Proficiency In Backend Development with Python, Java, NodeJS",
        "Designing and Implementing SQL and NoSQL Databases",
      ],
      heading: "Here are a few highlights: ",
    },
  }

  const renderHIghlight = () => {
    return SCREEN_CONSTANTS.highlights.bullet.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ))
  }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Chose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHIghlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">Hire Me </button>
              <a href="keshav.pdf" download="Keshav.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
