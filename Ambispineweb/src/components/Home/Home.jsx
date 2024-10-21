// import React from "react";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="hero-section-1">
//         <div className="hero-overlay-1"></div>
//         <div className="hero-content-1">
//           <h1 className="hero-title-1">
//             Let's Hangout and Explore <br />
//             <span className="highlight">the Future</span> Lorem
//           </h1>
//           <p className="hero-description">
//             Join us on a journey towards innovation and technology. Join us on a
//             journey towards innovation and technology.
//           </p>
//           <div className="cta-buttons">
//             <button className="cta-button primary">
//               Learn More
//               <span className="button-arrow">→</span>
//             </button>
//             <button className="cta-button secondary">
//               Read the press release
//               <span className="button-arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import "./Home.css";
// import backgroundVideo from "../../Images/ambVideo1.mp4"; // Make sure this path is correct
// import homeRightImage from "../../Images/HomeRightImage.png";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="hero-section-1">
//         <video autoPlay loop muted className="background-video">
//           <source src={backgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay-1"></div>
//         <div className="hero-content-1">
//           <div className="titleHero">
//             {/* <h3 className="hero-title-1">
//               Embracing The Future Of Technology Innovating
//               <br />
//               <span className="highlight">For A Better</span> Tommorow.
//             </h3> */}
//             {/* <p className="hero-description">
//               Join us on a journey towards innovation and technology. Join us on
//               a journey towards innovation and technology.
//             </p> */}
//             <h3>Embracing The Future Of Technology Innovating</h3>
//             <span className="highlight">For A Better</span> Tommorow.
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
//               saepe deserunt totam provident tempore possimus corporis
//               consequuntur iste delectus, repellat tempora nobis placeat, maxime
//               odit unde dolorem? Quidem, veniam qui?
//             </p>
//             <button className="cta-button primary">
//               Learn More
//               <span className="button-arrow">→</span>
//             </button>
//           </div>
//           <img src={homeRightImage} alt="" width={400} height={400} />
//           {/* <div className="cta-buttons">
//             <button className="cta-button primary">
//               Learn More
//               <span className="button-arrow">→</span>
//             </button>
//             <button className="cta-button secondary">
//               Read the press release
//               <span className="button-arrow">→</span>
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// -----------------------------------------------------------------
// import React, { useEffect, useRef } from "react";
// import "./Home.css";
// import backgroundVideo from "../../Images/ambVideo1.mp4";
// import homeRightImage from "../../Images/HomeRightImage.png";
// import HomeImage from "../../Images/careerImage.jpg";
// import ImageCarousel from "./ImageCarousel";

// const Home = () => {
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const paragraphs =
//       contentRef.current.querySelectorAll(".animate-on-scroll");
//     paragraphs.forEach((paragraph) => {
//       observer.observe(paragraph);
//     });

//     return () => {
//       paragraphs.forEach((paragraph) => {
//         observer.unobserve(paragraph);
//       });
//     };
//   }, []);

//   const contentItems = [
//     "AI-powered chatbots automate customer interactions, providing instant responses and support.",
//     "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
//     "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
//     "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
//   ];
//   return (
//     <div className="home-container">
//       <div className="hero-section">
//         <video autoPlay loop muted className="background-video">
//           <source src={backgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <div className="text-content">
//             {/* <h1 className="hero-title">Embracing The Future Of Technology</h1>
//             <h2 className="hero-subtitle">
//               Innovating For A<span className="highlight">Better Tomorrow</span>
//             </h2>
//             <p className="hero-description">
//               Join us on a journey towards innovation and cutting-edge
//               technology. Together, we'll shape the future and create solutions
//               that matter.
//             </p>
//             <div className="cta-buttons">
//               <button className="cta-button primary">
//                 Explore Technologies
//                 <span className="button-arrow">→</span>
//               </button>
//               <button className="cta-button secondary">
//                 Read the press release
//                 <span className="button-arrow">→</span>
//               </button>
//             </div> */}
//             <h3 className="hero-subtitle">
//               Embracing The Future Of Technology Innovating <br /> For A Better
//               Tomorrow
//             </h3>
//             <p className="hero-description">
//               Join us on a journey towards innovation and cutting-edge
//               technology. Together, we'll shape the future and create solutions
//               that matter.
//             </p>
//             <hr />
//             <div className="cta-buttons">
//               <button className="cta-button primary">
//                 Explore Technologies
//                 <span className="button-arrow">→</span>
//               </button>
//               {/* <button className="cta-button secondary">
//                 Read the press release
//                 <span className="button-arrow">→</span>
//               </button> */}
//             </div>
//           </div>
//           <div className="image-content">
//             <img src={homeRightImage} alt="Innovation" className="hero-image" />
//           </div>
//         </div>
//       </div>
//       <div className="mini-content">
//         <h2>Unlock The Power</h2>
//         <p>
//           Become Part Of A Vibrant Community - Celebrate Diversity, Creativity
//           And Connection. Dive into the digital era with gadgets that simplify
//           and enhance life. AI analyzes engagement patterns to determine the
//           best times to post content for maximum reach and interaction,
//           personalized content
//         </p>
//       </div>
//       <div className="homeImage-2">
//         <img src={HomeImage} alt="" />
//       </div>
//       <div className="animate">
//         <div ref={contentRef} className="scroll-animated-content">
//           {contentItems.map((item, index) => (
//             <p key={index} className="animate-on-scroll">
//               {item}
//             </p>
//           ))}
//         </div>
//       </div>
//       <div className="bottom-home-section">
//         <h3>Spread your wings, expand your network</h3>
//         <hr />
//         <p>
//           Expand your reach and influence grow your connections ,increase your
//           opportunities and access to resources make a bond with new
//           possibilities and horizons. AI analyzes engagement patterns to
//           determine the best times to post content for maximum reach and
//           interaction, personalized content
//         </p>
//         <ImageCarousel />
//       </div>
//     </div>
//   );
// };

// export default Home;
// ====================================

import React, { useEffect, useRef } from "react";
import "./Home.css";
import backgroundVideo from "../../Images/ambVideo1.mp4";
import homeRightImage from "../../Images/HomeRightImage-2.png";
import HomeImage from "../../Images/careerImage.jpg";
import ImageCarousel from "./ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";
import HomeHero from "../../Images/HomeHero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contentRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const contentItems = [
    "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
  ];
  const t = useTranslation();

  return (
    <div className="home-container">
      <section className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">Embracing The Future Of Technology</h1>
            <h2 className="hero-subtitle">
              Innovating For A{" "}
              <span className="highlight">Better Tomorrow</span>
            </h2>
            <p className="hero-description">
              Join us on a journey towards innovation and cutting-edge
              technology. Together, we'll shape the future and create solutions
              that matter.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                <Link
                  to="/product"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Explore Technologies
                </Link>
                <span className="button-arrow">→</span>
              </button>
              {/* <button className="cta-button secondary">
                Read Our Vision
                <span className="button-arrow">→</span>
              </button> */}
            </div>
          </div>
          <div className="image-content">
            <img src={homeRightImage} alt="Innovation" className="hero-image" />
          </div>
        </div>
      </section>

      {/* <section className="hero-section">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">
              Embracing The
              <span className="highlight"> Future </span>
              Of Technology
            </h1>
            <h2 className="hero-subtitle">
              Innovating For A{" "}
              <span className="highlight">Better Tomorrow</span>
            </h2>
            <p className="hero-description">
              Join us on a journey towards innovation and cutting-edge
              technology. Together, we'll shape the future and create solutions
              that matter.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Explore Technologies
                <span className="button-arrow">→</span>
              </button>
              <button className="cta-button secondary">
                Read Our Vision
                <span className="button-arrow">→</span>
              </button>
            </div>
          </div>
          <div className="image-content">
            <img src={homeRightImage} alt="Innovation" className="hero-image" />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </section> */}

      <section className="features-section">
        <h2 className="section-title">Unlock The Power</h2>
        <p className="section-description">
          <b>AMBISPINE TECHNOLOGIES </b> will provide you vibrant community to
          celebrate diversity, creativity and connection.
        </p>
        <div className="feature-image">
          <img src={HomeHero} alt="Feature" />
        </div>
      </section>

      <section ref={contentRef} className="ai-features-section">
        <h2 className="section-title">AI-Powered Solutions</h2>
        <div className="features-grid">
          {contentItems.map((item, index) => (
            <div key={index} className="feature-card animate-on-scroll">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="network-section">
        <h2 className="section-title">
          Spread Your Wings, Expand Your Network
        </h2>
        <p className="section-description">
          Expand your reach and influence. Grow your connections, increase your
          opportunities, and access to resources. Make a bond with new
          possibilities and horizons.
        </p>
        <ImageCarousel />
      </section>
      {/* <h1>{t("welcome_message")}</h1> */}
    </div>
  );
};

export default Home;
