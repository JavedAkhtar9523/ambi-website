// import React from "react";
// import "./Contact.css";
// import { LuMoveRight } from "react-icons/lu";
// import { useState } from "react";
// import { MDBInput } from "mdb-react-ui-kit";
// import { IoIosStar } from "react-icons/io";
// import Feedback from "./Feedback";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { submitContactMessage } from "../../redux/slices/contactSlice";
// import { Modal, Button } from "react-bootstrap";
// import contact1 from "../../Images/home.jpg";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email_or_phone: "",
//     company: "",
//     position: "",
//     message: "",
//   });

//   const [focusedFields, setFocusedFields] = useState({
//     name: false,
//     email_or_phone: false,
//     company: false,
//     position: false,
//     message: false,
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();
//   const handleFocus = (field) => {
//     setFocusedFields((prev) => ({ ...prev, [field]: true }));
//   };

//   const handleBlur = (field) => {
//     setFocusedFields((prev) => ({ ...prev, [field]: false }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email_or_phone)
//       newErrors.email_or_phone = "Email or phone is required";
//     if (!formData.company) newErrors.company = "Company is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(submitContactMessage(formData))
//         .then((response) => {
//           toast.success("Contact submitted successfully!");
//           setFormData({
//             name: "",
//             email_or_phone: "",
//             company: "",
//             position: "",
//             message: "",
//           });
//           onClose();
//         })
//         .catch((error) => {
//           toast.error(
//             error?.response?.data?.message ||
//               "Failed to submit contact. Please try again."
//           );
//         });
//     }
//   };

//   return (
//     <div className="Contact">
//       <div className="contact_top">
//         <div className="row">
//           <div className="col-12 col-lg-7 p-4">
//             <div className="contact_top_left">
//               <h2>Connect with us</h2>
//               <p className="fs-5 mt-3">
//                 Taps into our solutions to empower clients globally to forge a
//                 more resilient, secure, and sustainable path forward. Contact us
//                 for better solutions.
//                 <LuMoveRight className="contact_top_arow" />
//               </p>
//               <h4 className="mt-2">We'd Love to Hear from You</h4>
//             </div>
//           </div>
//           <div className="col-12 col-lg-5">
//             <img src={contact1} className="img-fluid" alt="Contact" />
//           </div>
//         </div>
//       </div>

//       <div className="contact_ser_sup_con">
//         <div className="contact_ser_sup">
//           <div className="text-center">
//             <h3 className="fw-semibold fs-2">
//               Connect For Services And Support
//             </h3>
//           </div>
//           <div className="d-flex justify-content-evenly pt-4 mt-3">
//             <button className="contact_ser_button btn btn-outline-secondary fw-semibold">
//               Connect With Us
//             </button>
//             <button
//               className="contact_ser_button btn btn-outline-secondary fw-semibold"
//               data-bs-toggle="modal"
//               data-bs-target="#contact_feadback_form"
//             >
//               Feedback
//             </button>
//             <button className="contact_ser_button btn btn-outline-secondary fw-semibold">
//               Mail for queries
//             </button>
//             <button className="contact_ser_button btn btn-outline-secondary fw-semibold">
//               Offices
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="contact_send_message_container"
//         style={{ width: "70%", margin: "1rem auto" }}
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 form-outline">
//             <MDBInput
//               label={
//                 <>
//                   Your Name
//                   {focusedFields.name && (
//                     <sup className="required_field" style={{ color: "red" }}>
//                       <IoIosStar />
//                     </sup>
//                   )}
//                 </>
//               }
//               type="text"
//               className={`form-control ${errors.name ? "is-invalid" : ""}`}
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               onFocus={() => handleFocus("name")}
//               onBlur={() => handleBlur("name")}
//             />
//             {errors.name && (
//               <div className="invalid-feedback">{errors.name}</div>
//             )}
//           </div>

//           <div className="mb-4 form-outline">
//             <MDBInput
//               label={
//                 <>
//                   Your email/phone
//                   {focusedFields.email_or_phone && (
//                     <sup className="required_field" style={{ color: "red" }}>
//                       <IoIosStar />
//                     </sup>
//                   )}
//                 </>
//               }
//               type="text"
//               className={`form-control ${
//                 errors.email_or_phone ? "is-invalid" : ""
//               }`}
//               name="email_or_phone"
//               value={formData.email_or_phone}
//               onChange={handleChange}
//               onFocus={() => handleFocus("email_or_phone")}
//               onBlur={() => handleBlur("email_or_phone")}
//             />
//             {errors.email_or_phone && (
//               <div className="invalid-feedback">{errors.email_or_phone}</div>
//             )}
//           </div>

//           <div className="d-flex mb-4">
//             <div className="form-outline me-2">
//               <MDBInput
//                 label={
//                   <>
//                     Company
//                     {focusedFields.company && (
//                       <sup className="required_field" style={{ color: "red" }}>
//                         <IoIosStar />
//                       </sup>
//                     )}
//                   </>
//                 }
//                 type="text"
//                 className={`form-control ${errors.company ? "is-invalid" : ""}`}
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("company")}
//                 onBlur={() => handleBlur("company")}
//               />
//               {errors.company && (
//                 <div className="invalid-feedback">{errors.company}</div>
//               )}
//             </div>

//             <div className="form-outline ms-2">
//               <MDBInput
//                 label={
//                   <>
//                     Position
//                     {focusedFields.position && (
//                       <sup className="required_field" style={{ color: "red" }}>
//                         <IoIosStar />
//                       </sup>
//                     )}
//                   </>
//                 }
//                 type="text"
//                 className={`form-control ${
//                   errors.position ? "is-invalid" : ""
//                 }`}
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("position")}
//                 onBlur={() => handleBlur("position")}
//               />
//               {errors.position && (
//                 <div className="invalid-feedback">{errors.position}</div>
//               )}
//             </div>
//           </div>

//           <div className="form-outline mb-4">
//             <textarea
//               className={`form-control ${errors.message ? "is-invalid" : ""}`}
//               name="message"
//               rows="4"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               onFocus={() => handleFocus("message")}
//               onBlur={() => handleBlur("message")}
//             ></textarea>
//             {/* <label className="form-label" htmlFor="message">Message</label> */}
//             {errors.message && (
//               <div className="invalid-feedback">{errors.message}</div>
//             )}
//           </div>

//           <div className="text-end">
//             <button
//               type="submit"
//               className="border border-0 text-white  rounded-pill px-4 py-1 fs-4"
//               style={{ background: "red" }}
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//       <div className="map_container">
//         <div className="row">
//           <div className="col-12 col-lg-8 d-flex justify-content-start align-item-center">
//             <div className="px-4 py-2">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
//                 width="400"
//                 height="300"
//                 style={{ objectFit: "cover" }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//             <div className="my-auto">
//               <h3 className="fw-semibold " style={{ fontSize: "3rem" }}>
//                 Our Offices
//               </h3>
//               <p className="fs-5">
//                 District Rewa, Village <br /> Bidawa (M.P.)
//               </p>
//               <h6>
//                 <a href="#" className="text-success fw-semibold fs-4">
//                   Try Google Maps <LuMoveRight className="fw-bold fs-4" />
//                 </a>
//               </h6>
//               <h6>
//                 <a href="#" className="text-success fw-semibold fs-4">
//                   Mail Us For More Queries{" "}
//                   <LuMoveRight className="fw-bold fs-4" />
//                 </a>
//               </h6>
//             </div>
//           </div>
//           <div className="col-12 col-lg-4   my-auto">
//             <div className="">
//               <h3 className="fs-2">
//                 {" "}
//                 Embracing <br /> innovation today
//               </h3>
//               <h5 className="" style={{ lineHeight: "2rem" }}>
//                 prepares us for the <br />
//                 challenges and <br />
//                 opportunities of <br />
//                 tomorrow !
//               </h5>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div
//           class="modal fade"
//           id="contact_feadback_form"
//           tabindex="-1"
//           aria-labelledby="contact_feadback_formLabel"
//           aria-hidden="true"
//         >
//           <Feedback />
//         </div>
//       </div>
//     </div>
//   );
// }
// ============--------------===========
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { submitContactMessage } from "../../redux/slices/contactSlice";
// import Feedback from "./Feedback";
// import contact1 from "../../Images/home.jpg";
// import "./Contact.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email_or_phone: "",
//     company: "",
//     position: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email_or_phone)
//       newErrors.email_or_phone = "Email or phone is required";
//     if (!formData.company) newErrors.company = "Company is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(submitContactMessage(formData))
//         .then(() => {
//           toast.success("Contact submitted successfully!");
//           setFormData({
//             name: "",
//             email_or_phone: "",
//             company: "",
//             position: "",
//             message: "",
//           });
//         })
//         .catch((error) => {
//           toast.error(
//             error?.response?.data?.message ||
//               "Failed to submit contact. Please try again."
//           );
//         });
//     }
//   };

//   return (
//     <div className="contact">
//       <header className="contact-header">
//         <div className="contact-header-content">
//           <h1>Connect with us</h1>
//           <p>
//             Tap into our solutions to empower clients globally to forge a more
//             resilient, secure, and sustainable path forward. Contact us for
//             better solutions.
//           </p>
//           <h2>We'd Love to Hear from You</h2>
//         </div>
//         <img src={contact1} alt="Contact" className="contact-image" />
//       </header>

//       <section className="contact-services">
//         <h2>Connect For Services And Support</h2>
//         <div className="contact-buttons">
//           <button>Connect With Us</button>
//           <button
//             onClick={() =>
//               document.getElementById("feedback-modal").showModal()
//             }
//           >
//             Feedback
//           </button>
//           <button>Mail for queries</button>
//           <button>Offices</button>
//         </div>
//       </section>

//       <section className="contact-form">
//         <h2>Send us a message</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className={errors.name ? "error" : ""}
//             />
//             {errors.name && (
//               <span className="error-message">{errors.name}</span>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="email_or_phone"
//               value={formData.email_or_phone}
//               onChange={handleChange}
//               placeholder="Your email/phone"
//               className={errors.email_or_phone ? "error" : ""}
//             />
//             {errors.email_or_phone && (
//               <span className="error-message">{errors.email_or_phone}</span>
//             )}
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Company"
//                 className={errors.company ? "error" : ""}
//               />
//               {errors.company && (
//                 <span className="error-message">{errors.company}</span>
//               )}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 placeholder="Position"
//                 className={errors.position ? "error" : ""}
//               />
//               {errors.position && (
//                 <span className="error-message">{errors.position}</span>
//               )}
//             </div>
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Message"
//               className={errors.message ? "error" : ""}
//             ></textarea>
//             {errors.message && (
//               <span className="error-message">{errors.message}</span>
//             )}
//           </div>
//           <button type="submit" className="submit-btn">
//             Send Message
//           </button>
//         </form>
//       </section>

//       <section className="contact-map">
//         <div className="map-container">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//         <div className="map-info">
//           <h2>Our Offices</h2>
//           <p>District Rewa, Village Bidawa (M.P.)</p>
//           <a href="#" className="map-link">
//             Try Google Maps
//           </a>
//           <a href="#" className="map-link">
//             Mail Us For More Queries
//           </a>
//         </div>
//       </section>

//       <section className="contact-motto">
//         <h2>Embracing innovation today</h2>
//         <p>prepares us for the challenges and opportunities of tomorrow!</p>
//       </section>

//       <dialog id="feedback-modal">
//         <Feedback />
//       </dialog>
//     </div>
//   );
// }

// pppppppppppppppppppp
// ---------------------------

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { submitContactMessage } from "../../redux/slices/contactSlice";
import Feedback from "./Feedback";
import contact1 from "../../Images/home.jpg";
import "./Contact.css";
import { TeamMember } from "../About/About";
import ReactStars from "react-rating-stars-component";
import TeamMemberImg1 from "../../Images/admin.png";
import TeamMemberImg2 from "../../Images/user.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email_or_phone: "",
    company: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email_or_phone)
      newErrors.email_or_phone = "Email or phone is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(submitContactMessage(formData))
        .then(() => {
          toast.success("Contact submitted successfully!");
          setFormData({
            name: "",
            email_or_phone: "",
            company: "",
            position: "",
            message: "",
          });
        })
        .catch((error) => {
          toast.error(
            error?.response?.data?.message ||
              "Failed to submit contact. Please try again."
          );
        });
    }
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
    <div className="contact">
      <header className="contact-header">
        <div className="contact-header-content">
          <h1>Connect with us</h1>
          <p style={{ color: "#fff" }}>
            Tap into our solutions to empower clients globally to forge a more
            resilient, secure, and sustainable path forward. Contact us for
            better solutions.
          </p>
          <h2>We'd Love to Hear from You</h2>
        </div>
        <img src={contact1} alt="Contact" className="contact-image" />
      </header>

      <section className="contact-services">
        <h2>Connect For Services And Support</h2>
        <div className="contact-buttons">
          <a href="#contactus1" className="connect">
            Connect With Us
          </a>

          <button
            onClick={() =>
              document.getElementById("feedback-modal").showModal()
            }
          >
            Feedback
          </button>
          <a
            href="mailto:ambispinetechnologies@gmail.com"
            className="mail-button"
          >
            Mail for queries
          </a>

          <a href="#office" className="office1">
            Offices
          </a>
        </div>
      </section>

      {/* <section className="contact-form">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${focusedField === 'name' || formData.name ? 'focused' : ''}`}>
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email_or_phone">
              Email/Phone <span className="required">*</span>
            </label>
            <input
              type="text"
              id="email_or_phone"
              name="email_or_phone"
              value={formData.email_or_phone}
              onChange={handleChange}
              className={errors.email_or_phone ? "error" : ""}
            />
            {errors.email_or_phone && (
              <span className="error-message">{errors.email_or_phone}</span>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">
                Company <span className="required">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={errors.company ? "error" : ""}
              />
              {errors.company && (
                <span className="error-message">{errors.company}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="position">
                Position <span className="required">*</span>
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={errors.position ? "error" : ""}
              />
              {errors.position && (
                <span className="error-message">{errors.position}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section> */}
      <section className="contact-form" id="contactus1">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div
            className={`form-group ${
              focusedField === "name" || formData.name ? "focused" : ""
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className={errors.name ? "error" : ""}
            />
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div
            className={`form-group ${
              focusedField === "email_or_phone" || formData.email_or_phone
                ? "focused"
                : ""
            }`}
          >
            <input
              type="text"
              id="email_or_phone"
              name="email_or_phone"
              value={formData.email_or_phone}
              onChange={handleChange}
              onFocus={() => handleFocus("email_or_phone")}
              onBlur={handleBlur}
              className={errors.email_or_phone ? "error" : ""}
            />
            <label htmlFor="email_or_phone">
              Email/Phone <span className="required">*</span>
            </label>
            {errors.email_or_phone && (
              <span className="error-message">{errors.email_or_phone}</span>
            )}
          </div>

          <div className="form-row">
            <div
              className={`form-group ${
                focusedField === "company" || formData.company ? "focused" : ""
              }`}
            >
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => handleFocus("company")}
                onBlur={handleBlur}
                className={errors.company ? "error" : ""}
              />
              <label htmlFor="company">
                Company <span className="required">*</span>
              </label>
              {errors.company && (
                <span className="error-message">{errors.company}</span>
              )}
            </div>

            <div
              className={`form-group ${
                focusedField === "position" || formData.position
                  ? "focused"
                  : ""
              }`}
            >
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                onFocus={() => handleFocus("position")}
                onBlur={handleBlur}
                className={errors.position ? "error" : ""}
              />
              <label htmlFor="position">
                Position <span className="required">*</span>
              </label>
              {errors.position && (
                <span className="error-message">{errors.position}</span>
              )}
            </div>
          </div>

          <div
            className={`form-group ${
              focusedField === "message" || formData.message ? "focused" : ""
            }`}
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              className={errors.message ? "error" : ""}
            ></textarea>
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
      <div className="team-page">
        {/* <h2 className="com-title">OUR COMPANY</h2> */}
        <h1 className="com-subtitle">Meet Our Team</h1>
        <div className="com-text">
          Even the best technology needs the best people with the right spirit
          behind it. Right across the world, we have a team of dreamers and
          doers just like you, ready to help bring your ideas to life. Here are
          the folks leading the charge.
        </div>
        <div className="com-team">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      <section className="contact-map" id="office">
        <div className="map-container">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.6658513961215!2d81.3268811!3d24.5662067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398459d048188763%3A0x8300d47552e235d5!2sDISTANCE%20EDUCATION%20DEPARTMENT%20APSU!5e0!3m2!1sen!2sin!4v1729351862454!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-info">
          <h2>Our Offices</h2>
          <p style={{ color: "#fff" }}>District Rewa, Village Bidawa (M.P.)</p>
          <a
            href="https://www.google.com/maps?ll=24.566207,81.326881&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9439778419335378389"
            target="_blank"
            className="map-link"
          >
            Try Google Maps
          </a>
          <a href="mailto:ambispinetechnologies@gmail.com" className="map-link">
            Mail Us For More Queries
          </a>
        </div>
      </section>

      <section className="contact-motto">
        <h2>Embracing innovation today</h2>
        <p>prepares us for the challenges and opportunities of tomorrow!</p>
      </section>

      {/* <dialog id="feedback-modal">
        <Feedback />
      </dialog> */}
      <dialog id="feedback-modal">
        <Feedback
          onClose={() => document.getElementById("feedback-modal").close()}
        />
      </dialog>
    </div>
  );
}

// ============--------------===========
// import React, { useState } from "react";
// import "./Contact.css";
// import { LuMoveRight } from "react-icons/lu";
// import { MDBInput } from "mdb-react-ui-kit";
// import { IoIosStar } from "react-icons/io";
// import Feedback from "./Feedback";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { submitContactMessage } from "../../redux/slices/contactSlice";
// import contact1 from "../../Images/home.jpg";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email_or_phone: "",
//     company: "",
//     position: "",
//     message: "",
//   });

//   const [focusedFields, setFocusedFields] = useState({
//     name: false,
//     email_or_phone: false,
//     company: false,
//     position: false,
//     message: false,
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleFocus = (field) => {
//     setFocusedFields((prev) => ({ ...prev, [field]: true }));
//   };

//   const handleBlur = (field) => {
//     setFocusedFields((prev) => ({ ...prev, [field]: false }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email_or_phone)
//       newErrors.email_or_phone = "Email or phone is required";
//     if (!formData.company) newErrors.company = "Company is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(submitContactMessage(formData))
//         .then(() => {
//           toast.success("Contact submitted successfully!");
//           setFormData({
//             name: "",
//             email_or_phone: "",
//             company: "",
//             position: "",
//             message: "",
//           });
//         })
//         .catch((error) => {
//           toast.error(
//             error?.response?.data?.message ||
//               "Failed to submit contact. Please try again."
//           );
//         });
//     }
//   };

//   return (
//     <div className="Contact">
//       <section className="contact-hero">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7">
//               <div className="contact-hero-content">
//                 <h1>Connect with us</h1>
//                 <p>
//                   Tap into our solutions to empower clients globally to forge a
//                   more resilient, secure, and sustainable path forward. Contact
//                   us for better solutions.
//                   <LuMoveRight className="contact-hero-arrow" />
//                 </p>
//                 <h4>We'd Love to Hear from You</h4>
//               </div>
//             </div>
//             <div className="col-lg-5">
//               <img src={contact1} className="img-fluid" alt="Contact" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="contact-services">
//         <div className="container">
//           <h2 className="text-center">Connect For Services And Support</h2>
//           <div className="button-group">
//             <button className="btn btn-outline-secondary">
//               Connect With Us
//             </button>
//             <button
//               className="btn btn-outline-secondary"
//               data-bs-toggle="modal"
//               data-bs-target="#contact_feadback_form"
//             >
//               Feedback
//             </button>
//             <button className="btn btn-outline-secondary">
//               Mail for queries
//             </button>
//             <button className="btn btn-outline-secondary">Offices</button>
//           </div>
//         </div>
//       </section>

//       <section className="contact-form">
//         <div className="container">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <MDBInput
//                 label={
//                   <>
//                     Your Name
//                     {focusedFields.name && (
//                       <sup className="required-field">
//                         <IoIosStar />
//                       </sup>
//                     )}
//                   </>
//                 }
//                 type="text"
//                 className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("name")}
//                 onBlur={() => handleBlur("name")}
//               />
//               {errors.name && (
//                 <div className="invalid-feedback">{errors.name}</div>
//               )}
//             </div>

//             <div className="mb-4">
//               <MDBInput
//                 label={
//                   <>
//                     Your email/phone
//                     {focusedFields.email_or_phone && (
//                       <sup className="required-field">
//                         <IoIosStar />
//                       </sup>
//                     )}
//                   </>
//                 }
//                 type="text"
//                 className={`form-control ${
//                   errors.email_or_phone ? "is-invalid" : ""
//                 }`}
//                 name="email_or_phone"
//                 value={formData.email_or_phone}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("email_or_phone")}
//                 onBlur={() => handleBlur("email_or_phone")}
//               />
//               {errors.email_or_phone && (
//                 <div className="invalid-feedback">{errors.email_or_phone}</div>
//               )}
//             </div>

//             <div className="row mb-4">
//               <div className="col-md-6">
//                 <MDBInput
//                   label={
//                     <>
//                       Company
//                       {focusedFields.company && (
//                         <sup className="required-field">
//                           <IoIosStar />
//                         </sup>
//                       )}
//                     </>
//                   }
//                   type="text"
//                   className={`form-control ${
//                     errors.company ? "is-invalid" : ""
//                   }`}
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   onFocus={() => handleFocus("company")}
//                   onBlur={() => handleBlur("company")}
//                 />
//                 {errors.company && (
//                   <div className="invalid-feedback">{errors.company}</div>
//                 )}
//               </div>
//               <div className="col-md-6">
//                 <MDBInput
//                   label={
//                     <>
//                       Position
//                       {focusedFields.position && (
//                         <sup className="required-field">
//                           <IoIosStar />
//                         </sup>
//                       )}
//                     </>
//                   }
//                   type="text"
//                   className={`form-control ${
//                     errors.position ? "is-invalid" : ""
//                   }`}
//                   name="position"
//                   value={formData.position}
//                   onChange={handleChange}
//                   onFocus={() => handleFocus("position")}
//                   onBlur={() => handleBlur("position")}
//                 />
//                 {errors.position && (
//                   <div className="invalid-feedback">{errors.position}</div>
//                 )}
//               </div>
//             </div>

//             <div className="mb-4">
//               <textarea
//                 className={`form-control ${errors.message ? "is-invalid" : ""}`}
//                 name="message"
//                 rows="4"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 onFocus={() => handleFocus("message")}
//                 onBlur={() => handleBlur("message")}
//               ></textarea>
//               {errors.message && (
//                 <div className="invalid-feedback">{errors.message}</div>
//               )}
//             </div>

//             <div className="text-end">
//               <button
//                 type="submit"
//                 className="btn btn-primary rounded-pill px-4 py-2"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <section className="contact-map">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-8">
//               <div className="map-container">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
//                   width="100%"
//                   height="300"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//               <div className="map-info">
//                 <h3>Our Offices</h3>
//                 <p>District Rewa, Village Bidawa (M.P.)</p>
//                 <a href="#" className="btn btn-link">
//                   Try Google Maps <LuMoveRight />
//                 </a>
//                 <a href="#" className="btn btn-link">
//                   Mail Us For More Queries <LuMoveRight />
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="contact-slogan">
//                 <h3>Embracing innovation today</h3>
//                 <h5>
//                   prepares us for the challenges and opportunities of tomorrow!
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div
//         className="modal fade"
//         id="contact_feadback_form"
//         tabIndex="-1"
//         aria-labelledby="contact_feadback_formLabel"
//         aria-hidden="true"
//       >
//         <Feedback />
//       </div>
//     </div>
//   );
// }

// ==========================
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { submitContactMessage } from "../../redux/slices/contactSlice";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     position: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.company) newErrors.company = "Company is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(submitContactMessage(formData))
//         .then(() => {
//           alert("Contact submitted successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             company: "",
//             position: "",
//             message: "",
//           });
//         })
//         .catch((error) => {
//           alert("Failed to submit contact. Please try again.");
//         });
//     }
//   };

//   return (
//     <div className="contact">
//       <div className="contact-hero">
//         <div className="contact-hero-content">
//           <h1>Connect with us</h1>
//           <p>
//             Empower your business with our global solutions. Contact us for a
//             more resilient, secure, and sustainable path forward.
//           </p>
//         </div>
//       </div>

//       <div className="contact-form-container">
//         <h2>We'd Love to Hear from You</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className={errors.name ? "error" : ""}
//             />
//             {errors.name && (
//               <span className="error-message">{errors.name}</span>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className={errors.email ? "error" : ""}
//             />
//             {errors.email && (
//               <span className="error-message">{errors.email}</span>
//             )}
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Company"
//                 className={errors.company ? "error" : ""}
//               />
//               {errors.company && (
//                 <span className="error-message">{errors.company}</span>
//               )}
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 placeholder="Position"
//                 className={errors.position ? "error" : ""}
//               />
//               {errors.position && (
//                 <span className="error-message">{errors.position}</span>
//               )}
//             </div>
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               className={errors.message ? "error" : ""}
//             ></textarea>
//             {errors.message && (
//               <span className="error-message">{errors.message}</span>
//             )}
//           </div>
//           <button type="submit" className="submit-button">
//             Send Message
//           </button>
//         </form>
//       </div>

//       <div className="contact-info">
//         <div className="map-container">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//         <div className="office-info">
//           <h3>Our Offices</h3>
//           <p>District Rewa, Village Bidawa (M.P.)</p>
//           <a href="#" className="info-link">
//             Try Google Maps
//           </a>
//           <a href="#" className="info-link">
//             Mail Us For More Queries
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// ==========

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { submitContactMessage } from "../../redux/slices/contactSlice";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     position: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.company) newErrors.company = "Company is required";
//     if (!formData.position) newErrors.position = "Position is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(submitContactMessage(formData))
//         .then(() => {
//           alert("Message sent successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             company: "",
//             position: "",
//             message: "",
//           });
//         })
//         .catch(() => {
//           alert("Failed to send message. Please try again.");
//         });
//     }
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="container">
//           <div className="hero-content">
//             <h1>Connect with us</h1>
//             <p>
//               Tap into our solutions to empower clients globally and forge a
//               more resilient, secure, and sustainable path forward.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div className="quick-links">
//         <div className="container">
//           <h2>Services and Support</h2>
//           <div className="links-grid">
//             {["Connect With Us", "Feedback", "Mail for queries", "Offices"].map(
//               (text) => (
//                 <button key={text} className="link-button">
//                   {text}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="form-section">
//         <div className="container">
//           <div className="form-container">
//             <h2>We'd Love to Hear from You</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={errors.name ? "error" : ""}
//                 />
//                 {errors.name && <p className="error-message">{errors.name}</p>}
//               </div>

//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={errors.email ? "error" : ""}
//                 />
//                 {errors.email && (
//                   <p className="error-message">{errors.email}</p>
//                 )}
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="company"
//                     placeholder="Company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className={errors.company ? "error" : ""}
//                   />
//                   {errors.company && (
//                     <p className="error-message">{errors.company}</p>
//                   )}
//                 </div>

//                 <div className="form-group">
//                   <input
//                     type="text"
//                     name="position"
//                     placeholder="Position"
//                     value={formData.position}
//                     onChange={handleChange}
//                     className={errors.position ? "error" : ""}
//                   />
//                   {errors.position && (
//                     <p className="error-message">{errors.position}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={errors.message ? "error" : ""}
//                 ></textarea>
//                 {errors.message && (
//                   <p className="error-message">{errors.message}</p>
//                 )}
//               </div>

//               <div className="form-submit">
//                 <button type="submit">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="map-section">
//         <div className="container">
//           <div className="map-grid">
//             <div className="map-container">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.613142072125!2d84.68419245096531!3d26.11839063406912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c4a67d9da019%3A0x7ccd6ca41721c6dd!2sBrahmasthan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1728999843445!5m2!1sen!2sin"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//             <div className="office-info">
//               <h3>Our Offices</h3>
//               <p>District Rewa, Village Bidawa (M.P.)</p>
//               <div className="office-links">
//                 <a href="#">Try Google Maps →</a>
//                 <a href="#">Mail Us For More Queries →</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
