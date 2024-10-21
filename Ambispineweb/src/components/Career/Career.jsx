// import React, { useState } from "react";
// import "./Career.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";
// import { AiFillBank } from "react-icons/ai";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import Be_Part_Mission from "./Be_Part_Mission";
// import careerImage from "../../Images/career-1.jpg";
// export default function Career() {
//   const [Be_Part, setBe_Part] = useState(false);
//   const handleJoin = () => {
//     setBe_Part(true);
//   };
//   return (
//     <div className="Career ">
//       {/* <div className=" career_header ">
//         <Link className="career_header_link">Overview</Link>
//         <Link className="career_header_link">Platform</Link>
//         <Link className="career_header_link">Career</Link>
//       </div> */}
//       <div className="career_body">
//         <img src={careerImage} alt="career_build" className="career_build " />
//         <div className="career_body_top">
//           <p className="text-body-secondary fw-semibold">
//             CAREERS AT MOTHERSHIP
//           </p>
//           <h1 className="fw-bolder">Build what the world needs.</h1>
//           <p className="mx-4 text-body-secondary">
//             We’re shaping the future of freight and logistics . If you’re exited
//             by the prospect of unlocking the world’s potential by speeding up
//             the way goods move , join us
//           </p>
//           <p>
//             <a href="#" className="text-decoration-none fw-semibold">
//               See Open roles{" "}
//               <span>
//                 <FaChevronRight />
//               </span>
//             </a>{" "}
//           </p>
//           <h3 className="fw-bolder mt-4">Supported by exceptional benfits.</h3>
//           <p className="mx-4 text-body-secondary">
//             We’re shaping the future of freight and logistics . If you’re exited
//             by the prospect of unlocking the world’s potential by speeding up
//             the way goods move , join us
//           </p>

//           <div className="row mx-3 mt-3 g-4">
//             <div className="col-md-6 col-lg-4 text-start pe-4">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className=" text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//             <div className="col-md-6 col-lg-4 text-start pe-4">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className=" text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//             <div className="col-md-6 col-lg-4 text-start pe-4">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className="text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//             <div className="col-md-6 col-lg-4 text-start pe-4">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className="text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//             <div className="col-md-6 col-lg-4 text-start pe-4">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className="text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//             <div className="col-md-6 col-lg-4 text-start">
//               <AiFillBank /> <br />
//               <h6>Your Work Matter</h6>
//               <p className="text-body-secondary">
//                 We’re shaping the future of freight and logistics . If you’re
//                 exited by the prospect of unlocking the world’s potential by
//                 speeding up the way goods move , join us
//               </p>
//             </div>
//           </div>

//           <div className=" " style={{ width: "70%", margin: "5rem auto" }}>
//             <div className="row bg-dark  ">
//               <div className="col-12 col-md-5 bg-white m-4 ">
//                 <div className="text-start px-2 py-3">
//                   <h4 className="fs-3 p-2 mt-3">We’re shaping the future </h4>
//                   <p className="text-body-secondary fs-4">
//                     We’re shaping the future of freight and logistics. If you’re
//                     excited by the prospect of unlocking the world’s potential
//                     by speeding up the way goods move, join us.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-5 my-4">
//                 <div style={{ marginLeft: "-10px", position: "relative" }}>
//                   <img
//                     src={careerImage}
//                     className="Career_hiring_content_img"
//                     alt="Career hiring"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="career_join_ambi"
//             style={{ width: "80%", margin: "5rem auto" }}
//           >
//             <h2 className=" fw-bolder fs-1 px-3 pt-3">
//               AmbiSpine Technologies India
//             </h2>
//             <h4 className="px-3">
//               {" "}
//               The prefect time to join us , create your career <br /> with us{" "}
//             </h4>
//             <div className="text-end ">
//               <button
//                 className="border-white border border-1 py-1  px-3 text-white fw-bolder"
//                 onClick={handleJoin}
//                 style={{ background: "transparent" }}
//               >
//                 Join Us <FaLongArrowAltRight />
//               </button>
//             </div>
//           </div>
//           {Be_Part && <Be_Part_Mission />}
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   /* <div className='overflow-y-auto ' style={{height:"500px"}}>
//           <JobProfile jobname="Engineer Trainee(fresher)" date="July 20th, 2022 Posted By AnEdge" />
//           <JobProfile jobname="INTERNSHIP PROGRAM (1- Year)" date="July 20th, 2022 Posted By AnEdge" />
//           <JobProfile jobname="INTERNSHIP PROGRAM (3-months)" date="July 20th, 2022 Posted By AnEdge" />
//           <JobProfile jobname="INTERNSHIP PROGRAM (1- Year)" date="July 20th, 2022 Posted By AnEdge" />
//           <JobProfile jobname="INTERNSHIP PROGRAM (3-months)" date="July 20th, 2022 Posted By AnEdge" />
//           </div> */
// }

// function JobProfile({ jobname, date }) {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       mobile: "",
//       email: "",
//       resume: null,
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("Required"),
//       mobile: Yup.string()
//         .matches(/^\d{10}$/, "Must be a valid 10-digit number")
//         .required("Required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//       resume: Yup.mixed()
//         .required("Required")
//         .test("fileFormat", "Unsupported Format", (value) => {
//           return (
//             value &&
//             (value.type === "application/pdf" ||
//               value.type === "application/msword")
//           );
//         }),
//     }),
//     onSubmit: (values) => {
//       alert("Form submitted successfully");
//     },
//   });

//   return (
//     <React.Fragment>
//       <div className="row mb-4 mx-5 px-5 mt-5">
//         <div className="col-12 col-md-6 mx-auto px-auto">
//           <h5 className="text-primary">{jobname}</h5>
//           <h3 className="text-primary fs-4">{date}</h3>
//           <span>
//             <b className="fw-bold">Location</b>: SATNA{" "}
//             <b className="fw-bold">No of Post: 4</b>
//           </span>
//         </div>
//         <div className="col-12 col-md-6 text-center mx-auto px-auto">
//           <button
//             className="bg-warning fs-5 text-black border-0 rounded-1 px-2"
//             data-bs-toggle="modal"
//             data-bs-target="#ApplyJob"
//           >
//             Apply Now
//           </button>
//           <div
//             className="modal fade mt-5"
//             id="ApplyJob"
//             tabIndex="-1"
//             aria-labelledby="exampleModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-dialog-centered mt-5">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h1 className="modal-title fs-5 mt-3" id="exampleModalLabel">
//                     Apply Now
//                   </h1>
//                 </div>
//                 <div className="modal-body text-start">
//                   <form onSubmit={formik.handleSubmit}>
//                     <label htmlFor="name" className="form-label mt-2">
//                       Applicant Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       className="form-control"
//                       placeholder="Applicant Name"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.name}
//                     />
//                     {formik.touched.name && formik.errors.name ? (
//                       <div className="text-danger">{formik.errors.name}</div>
//                     ) : null}
//                     <label htmlFor="mobile" className="form-label mt-2">
//                       Mobile Number
//                     </label>
//                     <input
//                       id="mobile"
//                       name="mobile"
//                       type="text"
//                       className="form-control"
//                       placeholder="Mobile Number"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.mobile}
//                     />
//                     {formik.touched.mobile && formik.errors.mobile ? (
//                       <div className="text-danger">{formik.errors.mobile}</div>
//                     ) : null}
//                     <label htmlFor="email" className="form-label mt-2">
//                       Email Address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       className="form-control"
//                       placeholder="Email Address"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.email}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                       <div className="text-danger">{formik.errors.email}</div>
//                     ) : null}
//                     <label htmlFor="resume" className="form-label mt-2">
//                       Upload Resume
//                     </label>{" "}
//                     <br />
//                     <input
//                       id="resume"
//                       name="resume"
//                       type="file"
//                       className="form-control"
//                       onChange={(event) => {
//                         formik.setFieldValue("resume", event.target.files[0]);
//                       }}
//                       onBlur={formik.handleBlur}
//                     />
//                     <p className="small">file format in doc or pdf</p>
//                     {formik.touched.resume && formik.errors.resume ? (
//                       <div className="text-danger">{formik.errors.resume}</div>
//                     ) : null}
//                     <br />
//                     <button
//                       type="submit"
//                       className="btn btn-primary px-3 ms-4 mt-2"
//                     >
//                       Save
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// ----------------------------

// Career.jsx
// import React, { useState } from "react";
// import CareerHero from "./CareerHero";
// import CareerBenefits from "./CareerBenefits";
// import CareerPositions from "./CareerPositions";
// import CareerForm from "./CareerForm";
// import "./Career.css";

// export default function Career() {
//   const [showApplicationForm, setShowApplicationForm] = useState(false);
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   const handleApply = (position) => {
//     setSelectedPosition(position);
//     setShowApplicationForm(true);
//   };

//   return (
//     <div className="career-container">
//       <CareerHero />
//       <CareerBenefits />
//       <CareerPositions onApply={handleApply} />

//       {showApplicationForm && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <CareerForm
//               position={selectedPosition}
//               onClose={() => setShowApplicationForm(false)}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// =============

import React, { useState } from "react";
import CareerHero from "./CareerHero";
import CareerBenefits from "./CareerBenefits";
import CareerPositions from "./CareerPositions";
import CareerForm from "./CareerForm";
import JobDescription from "./JobDescription"; // New import
import "./Career.css";

export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showJobDescription, setShowJobDescription] = useState(false); // New state
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowJobDescription(true); // Show job description instead of form
  };

  const handleApplyFromDescription = () => {
    setShowJobDescription(false);
    setShowApplicationForm(true);
  };

  return (
    <div className="career-container">
      <CareerHero />
      <CareerBenefits />
      {!showJobDescription && <CareerPositions onApply={handleApply} />}

      {showJobDescription && (
        <JobDescription
          job={selectedPosition}
          onApply={handleApplyFromDescription}
          onBack={() => setShowJobDescription(false)}
        />
      )}

      {showApplicationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CareerForm
              position={selectedPosition}
              onClose={() => setShowApplicationForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
