import Typical from "react-typical"
import React from "react"
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/iamkeshavsaraogi/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/_keshavsaraogi">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/keshav-saraogi/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {""}
            Hello, I'm <span className="highlighted-text">Keshav</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {""}
            <h1>
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack MERN Dev 🌐",
                  1000,
                  "Mobile Dev 📲",
                  1000,
                  "Cross Platform Dev ⭐️",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Enjoy Building Full Stack Mobile and Web Applications
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          <a href="keshav.pdf" download="Keshav.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}
