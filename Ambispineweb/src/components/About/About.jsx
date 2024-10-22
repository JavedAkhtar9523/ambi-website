// import React from "react";
// import "./About.css";
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="content_about">
//           <h3
//             style={{
//               textAlign: "center",
//               fontSize: "18px",
//               color: "gray",
//               marginTop: "8px",
//             }}
//           >
//             What We Are
//           </h3>
//           <hr />
//           <div className="aboutData">
//             <h2 style={{ fontSize: "25px" }}>About Us</h2>
//             <p style={{ width: "60%" }}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Doloremque, recusandae facilis dolores delectus voluptatum alias
//               quisquam nihil perferendis ullam iusto non accusantium, facere
//               minima, iure voluptatibus nemo porro culpa aliquam.
//             </p>
//           </div>
//           <button>
//             <Link to="/product">Explore Now</Link>
//           </button>
//         </div>
//         <div className="servicesLink">
//           <h3
//             style={{
//               textAlign: "center",
//               fontSize: "18px",
//               color: "gray",
//               marginTop: "8px",
//             }}
//           >
//             View Services
//           </h3>
//           <hr />
//           <div className="serviceshort">
//             <h3>
//               <Link to="/platform">Platform</Link>
//             </h3>
//             <h3>
//               <Link to="/career">Career</Link>
//             </h3>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./About.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiLogoInstagram } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiMapPinLight } from "react-icons/pi";
import { MdChevronLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuLoader2 } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import Counting from "./Counting";
import TeamMemberImg1 from "../../Images/admin.png";
import TeamMemberImg2 from "../../Images/user.png";

// TeamMember component
export const TeamMember = ({ name, role, location, rating, imgSrc }) => (
  <div className="team-card-scale">
    <img src={imgSrc} alt={`${name}'s profile`} className="imgCard-round" />
    <h3 className="team-name">{name}</h3>
    <p style={{ fontWeight: "bold", fontSize: "0.8rem" }}>{role}</p>
    <div className="rating">
      <ReactStars count={5} size={24} activeColor="#ffd700" value={rating} />
      <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>(67)</span>
    </div>
    <p style={{ fontWeight: "normal", fontSize: "0.8rem" }}>
      <PiMapPinLight className="icon" /> {location}
    </p>
    <div className="social-media">
      <BiLogoInstagram size={23} className="m-1" />
      <LiaFacebook size={23} className="m-1" />
      <TiSocialTwitterCircular size={23} className="m-1" />
      <TiSocialLinkedinCircular size={23} className="m-1" />
    </div>
  </div>
);

const AboutMe = () => {
  const [formData, setFormData] = useState({
    rating: 4,
  });

  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

  const teamMembers = [
    {
      name: "Mayank Shrivastava",
      role: "Directo and cmo",
      location: "Riwa, India",
      rating: formData.rating,
      imgSrc: TeamMemberImg1,
    },
    {
      name: "Aditya Shrivastava",
      role: "Director",
      location: "Riwa, India",
      rating: formData.rating,
      imgSrc: TeamMemberImg2,
    },
    {
      name: "Abhishek singh",
      role: "Product manager",
      location: "Riwa, India",
      rating: formData.rating,
      imgSrc: TeamMemberImg1,
    },
    {
      name: "Sanjay kumar ",
      role: "Project manager",
      location: "Riwa, India",
      rating: formData.rating,
      imgSrc: TeamMemberImg2,
    },
  ];

  return (
    <>
      <section>
        <div className="main">
          <img
            src="https://images.javatpoint.com/difference/images/difference-between-firm-and-company.png"
            alt="Company Banner"
          />
          <div className="main-content">
            <div>
              <h1>About Us</h1>
              <p>Get the latest news, updates, and tips</p>
            </div>
            {/* <div>
              <div className="anchor-btn">
                <a href="/home">Home</a>
                <MdOutlineArrowForwardIos className="arrow-icon" size={16} />
                <a href="/about">About Us</a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="about-page">
          <h2 className="about-subtitle">OUR COMPANY</h2>
          <h1 className="about-title">About Our Company</h1>
          <div className="about-text">
            In a world where technology bridges gaps and brings people closer,
            we stand at the forefront. We specialize in enhancing business
            health through robust IT support and innovative SaaS applications.
            Solutions are designed to connect people, streamline processes, and
            empower companies to reach their full potential. With personalized
            support and cutting-edge technology, we ensure your business runs
            smoothly and efficiently. Connecting People, Empowering Success.
          </div>
          <div className="about-content">
            <div>
              <img
                src="https://images.ctfassets.net/pdf29us7flmy/4C1SDkpwtqI2xy9GWabT42/af92a6a302d118c09f2686c22af3d9a8/shutterstock_796329814-red__1_.jpg?w=720&q=100&fm=jpg"
                alt="Our Services"
              />
            </div>
            <div className="about-me">
              <h1 className="" style={{ color: "blue", fontWeight: "bold" }}>
                Who we are ?
              </h1>
              <p style={{ fontSize: "1rem" }}>
                Connect, grow and succeed with us! <br /> Empower individual to
                achieve their goals expand their network and find new
                opportunity ""
              </p>
              <p>
                We are a dynamic community empowering individuals to achieve
                their goals, expand their network, and discover new
                opportunities. Through connection, growth, and support, we
                unlock potential, foster meaningful relationships, and create a
                ripple effect of success. Join us and transform your life!
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>

        <div className="team-page">
          {/* <h2 className="com-title">OUR COMPANY</h2> */}
          <h1 className="com-subtitle">Meet Our Team</h1>
          <div className="com-text">
            Even the best technology needs the best people with the right spirit
            behind it. Right across the world, we have a team of dreamers and
            doers just like you, ready to help bring your ideas to life. Here
            are the folks leading the charge.
          </div>
          <div className="com-team">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        {/* 
        <div className="blog-container">
          <div className="blog-page">
            <div className="blag-wrapper-flex">
              <div>
                <h1 className="blog-title">News and Blog</h1>
                <p className="blog-subtitle">
                  Get the latest news, updates, and tips
                </p>
              </div>
              <div className="blog-calouser-btn">
                <button className="blog-btn-left round">
                  <MdChevronLeft />
                </button>
                <button className="blog-btn-right round">
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>

            <div
              id="blogCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                
                <div className="carousel-item active">
                  <div className="row">
                    {[...Array(4)].map((_, index) => (
                      <div className="col-md-3" key={index}>
                        <div className="card-blog">
                          <img
                            src="https://www.shutterstock.com/image-illustration/mockup-3d-logo-facade-sign-600nw-2046330740.jpg"
                            alt=""
                            className="card-img-top"
                          />
                          <div className="p-2">
                            <span className="badge-bl0g">Job Tops</span>
                            <span className="badge-bl0g">Events</span>
                          </div>
                          <div className="card-t">
                            <h3>How to write an application letter</h3>
                          </div>
                          <div className="blog-card-body">
                            <p style={{ fontSize: "0.8rem" }}>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Temporibus optio nesciunt nulla
                              eos
                            </p>
                          </div>
                          <div className="blog-footer">
                            <div className="admin-avatars">
                              <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                alt="Admin Avatar"
                                className="admin-avatar"
                                width="30"
                              />
                              <span
                                className="admin"
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: "semibold",
                                }}
                              >
                                Administrator
                              </span>
                              <br />
                              <span
                                className="date"
                                style={{ fontSize: "0.7rem" }}
                              >
                                22 Sept 2024
                              </span>
                            </div>
                            <div className="read-more">
                              <a href="" style={{ fontSize: "0.8rem" }}>
                                2 min to read
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="carousel-item">
                  <div className="row">
                    {[...Array(4)].map((_, index) => (
                      <div className="col-md-3" key={index + 4}>
                        <div className="card-blog">
                          <img
                            src="https://www.shutterstock.com/image-illustration/mockup-3d-logo-facade-sign-600nw-2046330740.jpg"
                            alt=""
                            className="card-img-top"
                          />
                          <div>
                            <span className="badge-bl0g">Job Tops</span>
                            <span className="badge-bl0g">Events</span>
                          </div>
                          <div className="card-t">
                            <h3>Another blog post title</h3>
                          </div>
                          <div className="blog-card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Temporibus optio nesciunt nulla
                              eos, aliquid numquam voluptatibus accusantium
                              laudantium, dolorem accusamus magnam, atque
                              pariatur consectetur culpa omnis. In dolore ullam
                              quae?
                            </p>
                          </div>
                          <div className="blog-footer"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#blogCarousel"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#blogCarousel"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>

            <div className="load-more">
              <button>
                <LuLoader2 /> Load more posts
              </button>
            </div>
          </div>
        </div>
        
        */}

        {/* <div className="customer-container">
          <h1 className="about-title">Our Happy Customers</h1>
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            dicta dolores inventore ipsa in repellat minus, reprehenderit
            perferendis nemo quos, consectetur praesentium aliquid ab tempore
            facere accusantium ullam omnis a.
          </div>

          <div className="customer-wrapper">
            <div className="card-toolpin">
              <div className="customer-card">
                <div className="customer-info">
                  <span>Jobs -</span>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={4}
                  />
                </div>
                <div className="text-left">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, inventore hic illum quos numquam asperiores,
                    veritatis similique magni, natus nemo odit repellendus nobis
                    recusandae placeat pariatur autem optio vero? Facere.
                  </p>
                </div>
              </div>
              <div className="customer-tooltip">
                <img
                  src="https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg"
                  alt="Mayank Srivastav"
                  className="profile-image"
                />
                <div className="customer-details">
                  <h3>Mayank Srivastav</h3>
                  <p>Businessman</p>
                </div>
              </div>
            </div>
            <div className="card-toolpin">
              <div className="customer-card">
                <div className="customer-info">
                  <span>Jobs -</span>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={4}
                  />
                </div>
                <div className="text-left">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, inventore hic illum quos numquam asperiores,
                    veritatis similique magni, natus nemo odit repellendus nobis
                    recusandae placeat pariatur autem optio vero? Facere.
                  </p>
                </div>
              </div>
              <div className="customer-tooltip">
                <img
                  src="https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg"
                  alt="Mayank Srivastav"
                  className="profile-image"
                />
                <div className="customer-details">
                  <h3>Mayank Srivastav</h3>
                  <p>Businessman</p>
                </div>
              </div>
            </div>
            <div className="card-toolpin">
              <div className="customer-card">
                <div className="customer-info">
                  <span>Jobs -</span>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={4}
                  />
                </div>
                <div className="text-left">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, inventore hic illum quos numquam asperiores,
                    veritatis similique magni, natus nemo odit repellendus nobis
                    recusandae placeat pariatur autem optio vero? Facere.
                  </p>
                </div>
              </div>
              <div className="customer-tooltip">
                <img
                  src="https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg"
                  alt="Mayank Srivastav"
                  className="profile-image"
                />
                <div className="customer-details">
                  <h3>Mayank Srivastav</h3>
                  <p>Businessman</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="about-contact-container">
          <div className="about-wrapper-1">
            <h1 className="heading">New Things Will Always Update Regularly</h1>
            <form action="" className="subscription-form bg-white">
              <div className="input-group">
                <FaEnvelope size={30} />
                <input
                  type="text"
                  placeholder="Enter Your email.."
                  className="email-input"
                />
                <button className="subscribe-btn">
                  <BsPatchCheck className="icon" /> Subscribe
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </section>
      {/* <Counting /> */}
    </>
  );
};

export default AboutMe;
