"use client"
import React, {useEffect} from "react";
import "../styles/home.css"

export default function Home() {
  useEffect(() => {
    const handleScroll = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const words = entry.target.querySelectorAll(".testimonial-word");
          words.forEach((word: { classList: { add: (arg0: string) => void; }; }, index: number) => {
            setTimeout(() => {
              word.classList.add("drop");
            }, index * 100); // Delay each word's animation
          });
        } else {
          const words = entry.target.querySelectorAll(".testimonial-word");
          words.forEach((word: { classList: { remove: (arg0: string) => void; }; }) => {
            word.classList.remove("drop");
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    const testimonial = document.querySelector(".testimonial");
    if (testimonial) {
      observer.observe(testimonial);
    }

    return () => {
      if (testimonial) {
        observer.unobserve(testimonial);
      }
    };
  }, []);

  const testimonialText =
    "With Task Buddy, you can clear your mind and focus on what's important, knowing that all your tasks are in one place";
  const words = testimonialText.split(" ");

  return (
    <div className="home-section">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="assets/logo.png" alt="Task Buddy Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
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

      <div className="home-top-section">
        <img src="assets/home_bg.png" alt="home_image" className="background-image" />
        <div className="left-content">
          <div className="overlay-content">
            <p className="headline">
              Simplify your life and task together, your personal productivity Hub
            </p>
            <p className="sub-text">
              Say goodbye to scattered notes and forgotten tasks by centralizing
              your workflow.
            </p>
            <input type="text" placeholder="Email" />
            <button className="signup-btn">Signup - it's free</button>
          </div>
        </div>
        <img src="assets/top-home-section.png" alt="home_img" className="right-image" />
      </div>
      {/* <div className="home-top-section">
        <img src="assets/home_bg.png" alt="home_image" />
        <div className="overlay-content">
          <p className="headline">
            Simplify your life and task together, your personal productivity Hub
          </p>
          <p className="sub-text">
            Say goodbye to scattered notes and forgotten tasks by centralizing
            your workflow.
          </p>
          <input type="text" placeholder=" Email" />
          <button className="signup-btn">Signup - it's free</button>
        </div>
        <img src="assets/top-home-section.png" alt="home_img" />
      </div> */}

      <div className="home-second-section">
        <div className="quote-section">
          <p className="headline text-black">Organize your work, One task at a time </p>
          <p className="sub-title">
            Task Buddy simplifies your life, helping you accomplish more with
            less effort.
          </p>
        </div>
        <div className="middle-section">
          <div className="features-container text-black">
            <div className="feature-box">
              <h3>Task Buddy</h3>
              <p>
                Effortlessly manage your tasks with our intuitive interface.
                Keep track of deadlines, set reminders, and prioritize your
                work.
              </p>
            </div>
            <div className="feature-box2">
              <h3>Lists</h3>
              <p>
                Organize your tasks into lists to keep everything in order.
                Create lists for different projects, categories, or priorities.
              </p>
            </div>
            <div className="feature-box3">
              <h3>Cards</h3>
              <p>
                Visualize your tasks as cards to track progress at a glance.
                Cards provide a flexible and visual way to manage your tasks.
              </p>
            </div>
          </div>
          <div className="dashboard-preview">
            <img
              className="animated-image"
              src="/assets/middle-section.png"
              alt="Dashboard Preview"
            />
          </div>
        </div>
        <div className="benefits text-black">
          <div className="benefit-item">"Stay organized, stay productive"</div>
          <div className="line"></div>
          <div className="benefit-item">"Track your progress"</div>
          <div className="line"></div>
          <div className="benefit-item">"Achieve more, stress less"</div>
          <div className="line"></div>
          <div className="benefit-item">
            "Your task, 
             your way"</div>
        </div>
      </div>

      <div className="home-third-section">
        <div className="workflow-container">
          <div className="workflow-text">
            <h2>Simplify Your Workflow</h2>
            <p className="simplify-quote">
              Managing tasks can be overwhelming, but TaskMaster is here to
              simplify your workflow. Whether you're a busy professional, a
              student juggling multiple assignments, or someone who just wants
              to keep track of personal projects, TaskMaster offers the tools
              you need to stay organized and productive.
            </p>
            <p className="taskbuddy-quote">
              <em>
                Don't let your tasks overwhelm you. Join TaskMaster today and
                take control of your productivity. Sign up now and start
                managing your tasks efficiently and effectively.
              </em>
            </p>
            <figcaption className="org">
              &mdash;
              <strong> Khilraj Shrestha</strong>, <cite>Task Buddy</cite>
            </figcaption>
          </div>
          <div className="workflow-image">
            <img src="assets/third-section_img.png" alt="Workflow" />
          </div>
        </div>
        <div className="features-details">
          <div className="features-image">
            <img src="assets/feature-section.png" alt="Features" />
          </div>
          <ul className="features-list text-black">
            <li>Add Task</li>
            <li>Break it into sub projects</li>
            <li>Move tasks into projects</li>
            <li>Give tasks a priority level</li>
            <li>Add to favourite or important</li>
            <li>Complete tasks</li>
          </ul>
        </div>
      </div>f

      <div className="fourth-section">
        <div className="testimonial text-black">
          {words.map((word, index) => (
            <span key={index} className="testimonial-word">
              {word}
            </span>
          ))}
        </div>
        <div className="headline text-black">
          <h2>Explore all the Task Buddy has to offer!!</h2>
        </div>
        <div className="features-grid text-black">
          <div className="feature-card">
            <img src="assets/feature_second-last.png" alt="Features" />
            <p>Features</p>
          </div>
          <div className="feature-card">
            <img src="assets/template_gallery.png" alt="Template Gallery" />
            <p>Template Gallery</p>
          </div>
          <div className="feature-card">
          <a href="/FAQs">
            <img src="assets/productivity-quiz.png" alt="Template Gallery" />
            <p>FAQ</p>
          </a>   
          </div>
          {/* <div className="feature-card">
            <img src="template-gallery-icon.png" alt="Template Gallery" />
            <p>Template Gallery</p>
          </div> */}
        </div>
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
    </div>
  );
}




// "use client";
// import Tasks from "./Components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";
// import { useUser } from "@clerk/nextjs";

// export default function Home() {
//   const { tasks } = useGlobalState();
//   const { isSignedIn } = useUser();

//   if (isSignedIn) {
//     return <Tasks title="All Tasks" tasks={tasks} />;
//   }

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-5">Welcome</h1>
//       <p className="mb-5">
//         This is the demo site for Traversy Media's Next.js & Clerk tutorial. Go
//         ahead and sign up or sign in!
//       </p>
//       <Link href={'/signin'}>SignIn</Link>
//       <Link href={'/signup'}>SignUp</Link>
//     </>
//   );
// }



// .......................................................................................



// "use client";
// import Tasks from "./Components/Tasks/Tasks";
// import { useGlobalState } from "./context/globalProvider";

// export default function Home() {
//   const { tasks } = useGlobalState();

//   return <Tasks title="All Tasks" tasks={tasks} />;
// }


// ........................................................................................

