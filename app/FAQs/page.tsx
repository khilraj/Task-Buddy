import React from 'react';
import "../../styles/home.css"
import '../../styles/faq.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="assets/logo.png" alt="Task Buddy Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href='/features' >Features</a>
          </li>
          <li>
            <a href="/about-us">About</a>
          </li>
          <li className="login-link">
            <a href="/signin">Login</a>
          </li>
          <button type="submit" className="signup-button">
            <a href="/signup">Start for free</a>
          </button>
        </ul>
      </nav>
      
      <header className="faq-header text-black">
        <h1>Ask us anything</h1>
        <p>Need something cleared up? Here are our most frequently asked questions.</p>
        <input type="text" placeholder="Search" />
      </header>
      <div className="faq-grid">
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="heart">❤️</span>
          <h2>How do I create a new task?</h2>
          <p>To create a new task, click on the "Add Task" button located at the top of your dashboard. A form will appear where you
             can enter the task details such as title, description, due date, and priority. Once you have filled out the necessary information, 
             click "Save" to add the task to your list.
          </p>
        </div>
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="arrows">🔄</span>
          <h2>Can I change my plan later?</h2>
          <p>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
        </div>
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="cross">❌</span>
          <h2>What is your cancellation policy?</h2>
          <p>We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.</p>
        </div>
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="clipboard">📋</span>
          <h2> How can I organize my tasks into projects?</h2>
          <p>Tasks can be organized into projects by using the project management feature. To create a new project, go to the "Projects" section 
            and click "Add Project." Name your project and click "Save." You can then assign tasks to this project by selecting the project from 
            the dropdown menu within the task details.
          </p>
        </div>
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="briefcase">💼</span>
          <h2>How do I prioritize my tasks?</h2>
          <p>Tasks can be prioritized by setting their priority level when you create or edit them. The priority levels available are High, Medium, and Low.
             These priority levels help you manage your workflow by highlighting the most important tasks that need immediate attention.
          </p>
        </div>
        <div className="faq-item">
          <span className="faq-icon" role="img" aria-label="envelope">📧</span>
          <h2>How do I change my account email?</h2>
          <p>You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
        </div>
      </div>
      <section className="still-ques text-black">
        <div>
          <p>Still have questions?</p>
          <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        </div>
        <button>Get in touch</button>
      </section>

      <section className='about-section'>
        <div className="about-content">
          <h2>Get to know us</h2>
          <h1>We're just getting started</h1>
          <p>Untitled is growing fast, and we are always looking for passionate, dynamic, and talented individuals to join our distributed team all around the world.</p>
          <p>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work. Read more about</p>
          <div className="about-buttons">
            <button className="btn-primary">Read our principles</button>
            <button className="btn-secondary">We're hiring!</button>
          </div>
        </div>
        <div className="about-images">
          <img src="" alt="" />
          <img src="assets/faq1.png" alt="Team member 1" className='square first-image' />
          <img src="assets/faq2.png" alt="Team member 2" className='tall second-image' />
          <img src="assets/faq3.png" alt="Team member 3" className='square third-image' />
          <img src="assets/faq5.png" alt="Team member 4" className='tall fourth-image' />
          <img src="assets/faq4.png" alt="Team member 5" className='square fifth-image' />
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Sign up for our newsletter</h2>
        <p>Be the first to know about releases and industry news and insights.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
        <p className="privacy-text">We care about your data in our <a href="#">privacy policy</a>.</p>
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

    </div>
  );
};

export default FAQ;
