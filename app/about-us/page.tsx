import React from 'react'
import AboutusFirstSection from './AboutusFirstSection'
import AboutusSecondSection from './AboutusSecondSection'
import AboutusThirdSection from './AboutusThirdSection'
import OurStorySection from './OurStorySection'
import "../../styles/home.css"


const Aboutuspage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="assets/logo.png" alt="Task Buddy Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/about-us">About</a>
          </li>
          <li className="login-link">
            <a href="/signin">Login</a>
          </li>
          <button type="submit" className="signup-button">
            Start for free
          </button>
        </ul>
      </nav>

      <div>
        <AboutusFirstSection />
        <AboutusSecondSection />
        <AboutusThirdSection />
        <OurStorySection />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src='assets/logo.png' alt="Task Buddy Logo" />
            <p>
              Join millions of people who organize work and life with Task
              Buddy.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="#how-it-works">How it works</a>
                </li>
                <li>
                  <a href="#for-teams">For Teams</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#templates">Templates</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#how-it-works">Help Center</a>
                </li>
                <li>
                  <a href="#for-teams">For Teams</a>
                </li>
                <li>
                  <a href="#pricing">Productivity Method</a>
                </li>
                <li>
                  <a href="#templates">Integratin</a>
                </li>
                <li>
                  <a href="#templates">Status</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>

                <li>
                  <a href="#for-teams">Inspiration Hub</a>
                </li>
                <li>
                  <a href="#pricing">Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <a href="#facebook">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#instagram">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#google">
              <img src="google-icon.png" alt="Google" />
            </a>
            <a href="#twitter">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Aboutuspage
