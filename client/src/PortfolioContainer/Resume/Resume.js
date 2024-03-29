import React, { useState, useEffect } from "react"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import "./Resume.css"

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    )
  }

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ]

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ]

  const projectsDetails = [
    {
      title: "Machine Learning Polygraph Kit",
      duration: { fromDate: "Aug '22", toDate: "Dec '22" },
      description:
        "A Polygraph Kit enabling Maching Learning and AI to detect suspicious lies using 5 detectors.",
      subHeading: "Technologies Used: Python, C++, MySQL, Tensorflow",
    },
    {
      title: "Food Reciepe Mobile App",
      duration: { fromDate: "Aril '23", toDate: "May '23" },
      description:
        "A Mobile Application that will generate recipes based on users personal customizations.",
      subHeading:
        "Technologies Used: Java, Android SDK, Android UI, Google Firebase, Google Cloud",
    },
    {
      title: "Whatsapp Clone",
      duration: { fromDate: "June '23", toDate: "Aug '23" },
      description:
        "Real Time Messaging mobile app with user authentication and customization.",
      subHeading:
        "Technologies Used: Kotlin, Google Firebase, Google Cloud, Git",
    },
  ]

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Temple University, Philadelphia, USA"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2018"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Boston University, Boston, USA"}
        subHeading={"MASTER OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2023"}
        toDate={"PRESENT"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Patton Labs"}
          subHeading={"SOFTWARE DEVELOPER INTERN"}
          fromDate={"January 2023"}
          toDate={"April 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed and Developed an microservice architecture using Linux,
            NodeJS, Docker and Kubernetes.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an E-commerce Website for Client with the Dashboard for
            managing the Products, Managing Reviews, Users, Payments etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Chess"
        description="Apart from being a tech enthusiast and a code writer, i also love to play chess and connect with people who enjoy playing chess."
      />
      <ResumeHeading
        heading="Music"
        description="I always prioritize listening to calming music, and browsing through Spotify's pop charts often proves to be the most effective stress reliever for me."
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume
