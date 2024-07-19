import "../../styles/home.css";
import "../../styles/features.css"

function Features() {
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
            <a href="#features">Features</a>
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

      <section className="feature-section full-screen">
        <div className="feature text-black">
          <div className="feature-text">
            <h2>Task Management</h2>
            <p>
              Effortlessly create and organize tasks with our intuitive task
              management system. Add new tasks with just a few clicks, set
              priorities to ensure the most important tasks are highlighted, and
              categorize tasks into specific projects or groups for better
              organization.
            </p>
            <p>
              You can also add detailed descriptions and subtasks to break down
              larger tasks into manageable steps, helping you stay on top of
              your workload and achieve your goals efficiently.
            </p>

            <button className="start-free-button">Start for free</button>
          </div>
          <div className="management-image">
            <img src="assets/features1.jpg" alt="Task management" />
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature reverse-layout">
          <div className="feature-image">
            <img src="assets/task.png" alt="User-friendly interface" />
          </div>
          <div className="feature-text text-black">
            <h2>User-Friendly Interface</h2>
            <p>
              Our platform is designed with a user-friendly interface to ensure
              that managing your tasks and projects is as effortless as
              possible. With an intuitive and clean design, you'll find it easy
              to navigate and utilize all the features our platform offers.
            </p>
            <p>
              The layout is streamlined and clutter-free, allowing you to focus
              on what's most important—your tasks and projects. Key functions
              are accessible with just a few clicks, so you can add, edit, and
              organize tasks without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section text-black">
        <div className="feature">
          <div className="feature-text">
            <h2>Calendar Integration</h2>
            <p>
              Stay on top of your schedule with seamless calendar integration.
              Sync your tasks and events with popular calendar applications such
              as Google Calendar and Outlook, allowing you to see all your
              commitments in one place.
            </p>
            <p>
              Our platform offers daily, weekly, and monthly views, giving you a
              comprehensive overview of your schedule. This integration helps
              you plan your days more effectively, avoid scheduling conflicts,
              and ensure that you allocate enough time for each task and event.
            </p>
          </div>
          <div className="feature-image">
            <img src='assets/calander.png' alt="Calendar Integration" />
          </div>
        </div>
      </section>

      <section className="feature-section text-black">
        <div className="feature reverse-layout last">
          <div className="feature-image">
            <img src='assets/privacy.png' alt="Data Security and Privacy" />
          </div>
          <div className="feature-text">
            <h2>Data Security and Privacy</h2>
            <p>
              Your data security and privacy are our top priorities. We
              understand the importance of keeping your information safe, which
              is why we use end-to-end encryption to protect your data.
            </p>
            <p>
              Our platform also offers robust privacy controls, allowing you to
              decide who can see and edit your tasks and projects. Whether
              you're working on sensitive projects or simply prefer to keep your
              personal tasks private, you can customize your privacy settings to
              suit your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="second-last-section">
        <div className="newsletter">
          <p className="news-text">Bring powerful new views to your team's work</p>
          <p className="trial">Start a free trai today!</p>
          <button className="try-now-button" type="button">Try now</button>
        </div>
      </section>

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
  );
}

export default Features;
