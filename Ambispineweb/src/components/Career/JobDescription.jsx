// import React from "react";
// import "./JobDescription.css";
// import TracxnLogo from "../../Images/tracxn_logo.jpeg";
// import { RxDotFilled } from "react-icons/rx";
// import { AiOutlineWallet } from "react-icons/ai";
// import { IoLocationOutline } from "react-icons/io5";
// import { PiToolboxFill } from "react-icons/pi";
// import { FiInfo } from "react-icons/fi";

// export default function JobDescription() {
//   return (
//     <div className="job_description">
//       <div className="w-75">
//         <div className="job_title_container">
//           <img
//             src={TracxnLogo}
//             width="90"
//             height="90"
//             className="img-fluid company_logo"
//             alt="Contact"
//           />
//           <div>
//             <h4 className="fw-semibold fs-1 text-dark">
//               Senior FullStack Developer (CSS3/React.js/MERN)
//             </h4>
//             <h6 className="text-secondary fw-bolder fs-5 my-2">
//               Tracxn Technologies Limited
//             </h6>
//             <p>
//               <span>
//                 <a
//                   href="#"
//                   className="text-secondary fw-semibold fs-6 text-decoration-none"
//                 >
//                   https://tracn.com
//                 </a>
//               </span>{" "}
//               <span className="text-secondary fw-semibold">
//                 <RxDotFilled /> Posted 2023-10-04{" "}
//               </span>
//             </p>
//           </div>
//           <hr className="text-dark fw-bold" />
//         </div>
//         <div className=" fw-semibold fs-6">
//           <h3 className="fw-semibold text-dark fs-3 ">Job Description</h3>
//           <p>
//             We are looking for innovative UI/UX Design Interns who have a strong
//             grasp of designprinciples and are passionate about creating
//             user-friendly and visually appealing digital applications.
//           </p>
//           <h6 className="fw-semibold fs-5">Responsibilites:</h6>
//           <p>
//             {" "}
//             - Design and implement UI elements like input controls, navigational
//             components, and informational components.{" "}
//           </p>
//           <p>
//             {" "}
//             - Design and implement UI elements like input controls, navigational
//             components, and informational components.{" "}
//           </p>
//           <p>
//             {" "}
//             - Design and implement UI elements like input controls, navigational
//             components, and informational components.{" "}
//           </p>

//           <h6 className="fw-semibold fs-5">Qualifications:</h6>
//           <p>
//             {" "}
//             - Bachelors degree in Design, Computer Science, or related fields.{" "}
//           </p>
//           <p> - Experience in UI/UX design backed by a strong portfolio </p>
//           <p>
//             {" "}
//             - Strong communication, teamwork skills, and attention to detail{" "}
//           </p>

//           <h6 className="fw-semibold fs-5">Preferred Skills:</h6>
//           <p> - Knowledge of HTML/CSS and JavaScript. </p>
//           <p> - Expertise in Figma. </p>
//           <p>
//             {" "}
//             - Familiarity with responsive design, animation, and prototyping.{" "}
//           </p>

//           <h6 className="fw-semibold fs-5">Selection Process:</h6>
//           <ol type="1">
//             <li>Assignment-based round.</li>
//             <li>Assignment-based round.</li>
//             <ul type="circle">
//               <li>Additional round or task detail.</li>
//               <li>Additional round or task detail.</li>
//             </ul>
//           </ol>
//           <hr className="my-4 " />
//         </div>
//         <div className="fw-semibold fs-6">
//           <h3 className="text-dark">About Company</h3>
//           <p className="mt-2">
//             Techvins is a leading mobile app and web development company based
//             in Gurgaon. We specialize in delivering innovative digital
//             transformation solutions across multiple industries. As we continue
//             to grow, we are looking for passionate freshers who are eager to
//             build their careers as Python/Django developers. This is a fantastic
//             opportunity for those looking to gain experience in backend
//             development and work with cutting-edge technologies.
//           </p>
//         </div>
//       </div>
//       <div className="w-25" style={{ marginTop: "50px" }}>
//         <div
//           className="card w-100 "
//           style={{ barder: "none", background: "rgba(245,245,247,255)" }}
//         >
//           <div class="card-body">
//             <p>
//               <AiOutlineWallet className="job_descript_top_icon" />
//               <span className="fw-semibold text-secondary-emphasis ms-3">
//                 70L per annum
//               </span>
//             </p>
//             <div className="d-flex">
//               <div>
//                 <IoLocationOutline className="job_descript_top_icon" />
//               </div>
//               <div className="mt-2 ms-3">
//                 <p className="fw-semibold text-secondary-emphasis ms-1">
//                   Onsite
//                 </p>
//                 <p
//                   className="text-body-tertiary "
//                   style={{ marginTop: "-1rem" }}
//                 >
//                   <span>
//                     <RxDotFilled />
//                     Bengaluri (Karnataka)
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="d-flex ">
//               <div>
//                 <PiToolboxFill className="job_descript_top_icon" />
//               </div>
//               <div className="mt-2 ms-3">
//                 <p className="fw-semibold text-secondary-emphasis ms-1">
//                   Full Time
//                 </p>
//                 <p
//                   className="text-body-tertiary "
//                   style={{ marginTop: "-1rem" }}
//                 >
//                   3+ Years
//                 </p>
//               </div>
//             </div>

//             <button
//               className="border-0 rounded-1 mt-2 py-2  w-100 text-white fw-semibold"
//               style={{ background: "rgb(24,116,44)" }}
//             >
//               Apply Now
//             </button>

//             <p className="mt-2">
//               <FiInfo className="text-primary fs-5 " />{" "}
//               <span className="text-body-tertiary ms-3">
//                 Last Date to Apply Mon Oct 28 2024
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// -----------------------

import React, { useState } from "react";
import "./JobDescription.css";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineWallet } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { PiToolboxFill } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import CareerForm from "./CareerForm";
import AmbiSpineLogo from "../../Images/AmbiSpine_logo.png";

export default function JobDescription({ job, onBack }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleApplyNow = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="job_description">
      <div className="w-75">
        <div className="job_title_container">
          <img
            src={job.companyLogo || AmbiSpineLogo}
            width="90"
            height="90"
            className="img-fluid company_logo"
            alt="Company Logo"
          />
          <div>
            <h4 className="fw-semibold fs-1 text-dark">{job.title}</h4>
            <h6 className="text-secondary fw-bolder fs-5 my-2">
              {job.companyName || "Company Name"}
            </h6>
            <p>
              <span>
                <a
                  href={job.companyWebsite || "#"}
                  className="text-secondary fw-semibold fs-6 text-decoration-none"
                >
                  {job.companyWebsite || "Company Website"}
                </a>
              </span>{" "}
              <span className="text-secondary fw-semibold">
                <RxDotFilled /> Posted {job.postedDate || "Date: 18/10/2024"}
              </span>
            </p>
          </div>
          <hr className="text-dark fw-bold" />
        </div>
        <div className="fw-semibold fs-6">
          <h3 className="fw-semibold text-dark fs-3 ">Job Description</h3>
          <p>{job.description || "Job description goes here."}</p>
          {/* Add more job details here */}
        </div>
      </div>
      <div className="w-25" style={{ marginTop: "0px" }}>
        <div
          className="card"
          style={{
            border: "none",
            background: "rgba(245,245,247,255)",
            width: "400px",
          }}
        >
          <div className="card-body">
            <p>
              <AiOutlineWallet className="job_descript_top_icon" />
              <span className="fw-semibold text-secondary-emphasis ms-3">
                {job.salary || "Salary not disclosed"}
              </span>
            </p>
            <div className="d-flex">
              <div>
                <IoLocationOutline className="job_descript_top_icon" />
              </div>
              <div className="mt-2 ms-3">
                <p className="fw-semibold text-secondary-emphasis ms-1">
                  {job.locationType || "On-site"}
                </p>
                <p
                  className="text-body-tertiary"
                  style={{ marginTop: "-1rem" }}
                >
                  <span>
                    <RxDotFilled />
                    {job.location}
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <PiToolboxFill className="job_descript_top_icon" />
              </div>
              <div className="mt-2 ms-3">
                <p className="fw-semibold text-secondary-emphasis ms-1">
                  {job.type}
                </p>
                <p
                  className="text-body-tertiary"
                  style={{ marginTop: "-1rem" }}
                >
                  {job.experience}
                </p>
              </div>
            </div>

            <button
              className="border-0 rounded-1 mt-2 py-2 w-100 text-white fw-semibold"
              style={{ background: "rgb(24,116,44)" }}
              onClick={handleApplyNow}
            >
              Apply Now
            </button>

            <p className="mt-2">
              <FiInfo className="text-primary fs-5" />{" "}
              <span className="text-body-tertiary ms-3">
                Last Date to Apply: {job.lastDateToApply || "Not specified"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={onBack} className="back-button">
        Back to Positions
      </button>
      {isFormOpen && <CareerForm position={job} onClose={handleCloseForm} />}
    </div>
  );
}
