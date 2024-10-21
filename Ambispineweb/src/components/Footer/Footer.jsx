// import React from "react";
// import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { PiTrademarkLight } from "react-icons/pi";
// import "./Footer.css";
// import logo from "../../Images/AmbiSpine_logo.png";
// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container-fluid text-center text-md-start py-1 ">
//         <div className="row  text-white footer-link ">
//           <div className="col-lg-3 col-md-6   text-center ">
//             <img src={logo} className="" width="180" />
//             <PiTrademarkLight className="fs-5 trade-mark" />
//             <div className="ms-2 ">
//               <a href="https://www.linkedin.com/company/ambispine-technologies/">
//                 <FaLinkedinIn className="fa-I  rounded-1 p-1 fs-3" />
//               </a>
//               <a href="https://www.youtube.com/@AmbiSpineTechnologies/">
//                 {" "}
//                 <FaYoutube className="fa-y rounded-1 p-1 ms-3 fs-3" />
//               </a>
//               <a href="https://www.instagram.com/">
//                 <FaInstagramSquare className="fa-Is p-1 rounded-1 p-1 ms-3 fs-3" />{" "}
//               </a>
//               <a href="https://www.x.com/">
//                 <FaTwitter className="fa-I rounded-1 ms-3 p-1 fs-3" />{" "}
//               </a>
//               <a href="">
//                 <FaFacebookF className=" fa-b rounded-1 p-1 ms-3 fs-3" />
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-6 mx-auto pt-3 pb-1">
//             <h6 className=" fw-semibold pt-2 " style={{ fontSize: "22px" }}>
//               Our Company
//             </h6>
//             <p>
//               <a href="#!" className="text-reset">
//                 About Us
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Career
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Newsroom
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Spreads
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Spreads Web Solutions
//               </a>
//             </p>
//           </div>

//           <div className="col-lg-2 col-md-4 mx-auto pt-3 pb-1">
//             <h6 className=" fw-semibold pt-2 " style={{ fontSize: "22px" }}>
//               Services
//             </h6>
//             <p>
//               <a href="#!" className="text-reset">
//                 Digital marketing
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Cloud Solutions
//               </a>
//             </p>
//           </div>
//           <div className="col-lg-2 col-md-4 mx-auto pt-3 pb-1">
//             <h6 className=" fw-semibold pt-2" style={{ fontSize: "22px" }}>
//               {" "}
//               Support
//             </h6>
//             <p>
//               <a href="#!" className="text-reset">
//                 Terms of Use
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Privacy Statement
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Cookie Policy
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Spreads Support
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Spreads ADs Support
//               </a>
//             </p>
//             <p>
//               <a href="#!" className="text-reset">
//                 Spreads Web Support
//               </a>
//             </p>
//           </div>
//           <div className="col-lg-3 col-md-4  mb-md-0 pt-3 pb-1">
//             <h6 className=" fw-bold " style={{ fontSize: "22px" }}>
//               Contact
//             </h6>
//             <p>
//               <IoLocationSharp className="me-3" /> Rewa(M.P.), India
//             </p>
//             <p>
//               <MdOutlineMailOutline className="me-3" />{" "}
//               ambispinetechnolog@gmail.com
//             </p>
//             <p>
//               <IoCallSharp className=" p-1 me-2 bg-white text-black rounded-circle" />
//               +91 9685221056
//             </p>
//             <p>
//               <IoCallSharp className=" p-1 me-2 bg-white text-black rounded-circle" />
//               +91 8368140262{" "}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="text-center p-4 text-white " style={{ fontSize: "14px" }}>
//         All Rights Reserved <span className="fs-8 mt-1">&copy;</span> 2024
//         Copyright: Taken by AmbiSpine Technologies Private Limited
//       </div>
//     </footer>
//   );
// }

// -----------------------

import React from "react";
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { PiTrademarkLight } from "react-icons/pi";
import "./Footer.css";
import logo from "../../Images/AmbiSpine_logo.png";

const SocialIcon = ({ href, Icon, className }) => (
  <a
    href={href}
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className={`icon ${className}`} />
  </a>
);

const FooterSection = ({ title, links }) => (
  <div className="footer-section">
    <h6 className="footer-title">{title}</h6>
    {links.map((link, index) => (
      <p key={index}>
        <a href={link.href} className="footer-link">
          {link.text}
        </a>
      </p>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="AmbiSpine Logo" className="footer-logo" />
          <PiTrademarkLight className="trademark-icon" />
          <div className="social-icons">
            <SocialIcon
              href="https://www.linkedin.com/company/ambispine-technologies/"
              Icon={FaLinkedinIn}
              className="linkedin"
            />
            <SocialIcon
              href="https://www.youtube.com/@AmbiSpineTechnologies/"
              Icon={FaYoutube}
              className="youtube"
            />
            <SocialIcon
              href="https://www.instagram.com/"
              Icon={FaInstagramSquare}
              className="instagram"
            />
            {/* <SocialIcon
              href="https://www.x.com/"
              Icon={FaTwitter}
              className="twitter"
            /> */}
            <SocialIcon
              href="https://www.facebook.com/"
              Icon={FaFacebookF}
              className="facebook"
            />
          </div>
        </div>

        <FooterSection
          title="Our Company"
          links={[
            { href: "/aboutus", text: "About Us" },
            { href: "/career", text: "Career" },
            { href: "#", text: "Newsroom" },
            // { href: "#", text: "Spreads" },
            // { href: "#", text: "Spreads Web Solutions" },
          ]}
        />

        <FooterSection
          title="Support"
          links={[
            { href: "#", text: "Privacy Statement" },
            { href: "#", text: "Terms of Use" },
            { href: "#", text: "Cookie Policy" },
            // { href: "#", text: "Spreads Support" },
            // { href: "#", text: "Spreads ADs Support" },
            // { href: "#", text: "Spreads Web Support" },
          ]}
        />

        <div className="footer-section">
          <h6 className="footer-title">Contact</h6>
          <p>
            <IoLocationSharp className="contact-icon" /> Rewa(M.P.), India
          </p>
          <p style={{ width: "300px" }}>
            <MdOutlineMailOutline className="contact-icon" />
            ambispinetechnologies@gmail.com
          </p>
          <p>
            <IoCallSharp className="contact-icon" /> +91 9685221056
          </p>
          {/* <p>
            <IoCallSharp className="contact-icon" /> +91 8368140262
          </p> */}
        </div>

        {/* <form action="" className="subscription-form bg-white">
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
        </form> */}
      </div>

      <div className="footer-bottom">
        <p>
          All Rights Reserved &copy; 2024 Copyright: Taken by AmbiSpine
          Technologies Private Limited
        </p>
        {/* <span style={{ margin: "0" }}>Developed by: Javed Akhtar</span> */}
      </div>
    </footer>
  );
}
