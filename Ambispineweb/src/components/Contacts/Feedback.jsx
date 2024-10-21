// import React, { useState, useRef } from 'react';
// import { useDispatch } from "react-redux";
// import { toast } from 'react-toastify';
// import { createFeedback } from "../../redux/slices/feedbackSlice";
// import ReactStars from "react-rating-stars-component";

// const Feedback = () => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     date: new Date().toISOString().split('T')[0],
//     rating: 0,
//     prodSer: '',
//     improve: '',
//     recommend: false, // Changed to boolean
//     additional: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.date) newErrors.date = 'Date is required';
//     if (!formData.rating) newErrors.rating = 'Rating is required';
//     if (!formData.prodSer) newErrors.prodSer = 'Product or Service is required';
//     if (!formData.improve) newErrors.improve = 'Improvement suggestion is required';
//     return newErrors;
//   };

//   const modalRef = useRef(null);
//   const handleRatingChange = (newRating) => {
//     setFormData({
//       ...formData,
//       rating: newRating  // Update rating value
//     });
//   };
//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [id]: type === "checkbox" ? checked : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       dispatch(createFeedback(formData))
//         .then(() => {
//           toast.success('Feedback submitted successfully!');
//           onClose();
//         })
//         .catch(() => {
//           toast.error('Failed to submit Feedback. Please try again.');
//         });

//       setFormData({
//         name: '',
//         email: '',
//         date: new Date().toISOString().split('T')[0],
//         rating: '',
//         prodSer: '',
//         improve: '',
//         recommend: false,
//         additional: ''
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div className='feedback w-100'>
//       <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//         <div className="modal-content" ref={modalRef}>
//           <div className="modal-body">
//             <form onSubmit={handleSubmit}>
//               <div className='border border-1 border-dark p-3'>
//                 <h6>Feedback Form</h6>

//                 <div className="mb-1 d-flex justify-content-justify align-items-center">
//                   <label htmlFor="name" className="form-label">Name:</label>
//                   <input
//                     type="text"
//                     className="form-control w-50"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && <p className="text-danger">{errors.name}</p>}
//                 </div>

//                 <div className="mb-1 d-flex justify-content-start">
//                   <label htmlFor="email" className="form-label">Email:</label>
//                   <input
//                     type="email"
//                     className="form-control w-50"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && <p className="text-danger">{errors.email}</p>}
//                 </div>

//                 <div className="mb-1 d-flex justify-content-start">
//                   <label htmlFor="date" className="form-label">Date:</label>
//                   <input
//                     type="date"
//                     className="form-control w-50"
//                     id="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                   />
//                   {errors.date && <p className="text-danger">{errors.date}</p>}
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Rating (1-5):</label>
//                   <ReactStars
//                     count={5}
//                     onChange={handleRatingChange}
//                     size={24}
//                     activeColor="#ffd700"
//                     value={formData.rating}
//                   />
//                 </div>

//                 <h6>Comments</h6>

//                 <div className="mb-1">
//                   <label htmlFor="prodSer" className="form-label">1. What did you like most about our [Product/service]?</label>
//                   <input
//                     type="text"
//                     className="form-control w-100"
//                     id="prodSer"
//                     value={formData.prodSer}
//                     onChange={handleChange}
//                   />
//                   {errors.prodSer && <p className="text-danger">{errors.prodSer}</p>}
//                 </div>

//                 <div className="mb-1">
//                   <label htmlFor="improve" className="form-label">2. What can we improve?</label>
//                   <input
//                     type="text"
//                     className="form-control w-100"
//                     id="improve"
//                     value={formData.improve}
//                     onChange={handleChange}
//                   />
//                   {errors.improve && <p className="text-danger">{errors.improve}</p>}
//                 </div>

//                 <div className="mb-1">
//                   <label className="form-label">3. Would you recommend us to others?</label>
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       id="recommend"
//                       className="form-check-input"
//                       checked={formData.recommend}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="recommend" className="form-check-label">Yes</label>
//                   </div>
//                 </div>

//                 <div className="mb-1">
//                   <label htmlFor="additional" className="form-label">4. Additional Comments:</label>
//                   <input
//                     type="text"
//                     className="form-control w-100"
//                     id="additional"
//                     value={formData.additional}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>

//               <div className="d-flex justify-content-between mt-2 me-2">
//                 <button type="button" className="btn btn-danger btn-sm" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
//                 <button type="submit" className="btn btn-primary btn-sm">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

// ============================

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createFeedback } from "../../redux/slices/feedbackSlice";
import { X } from "lucide-react";
import "./Contact.css";

const Feedback = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    productService: "",
    improvement: "",
    recommend: false,
    additionalComments: "",
  });

  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.rating === 0) newErrors.rating = "Rating is required";
    if (!formData.productService)
      newErrors.productService = "This field is required";
    if (!formData.improvement) newErrors.improvement = "This field is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(createFeedback(formData))
        .then(() => {
          toast.success("Feedback submitted successfully!");
          onClose();
        })
        .catch(() => {
          toast.error("Failed to submit feedback. Please try again.");
        });
    }
  };

  return (
    <div className="feedback-modal">
      <button onClick={onClose} className="close-button">
        <X size={24} />
      </button>
      <h2 className="feedback-title">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div
          className={`form-group ${
            focusedField === "name" || formData.name ? "focused" : ""
          }`}
        >
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            className={errors.name ? "error" : ""}
          />
          <label htmlFor="name">Name</label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div
          className={`form-group ${
            focusedField === "email" || formData.email ? "focused" : ""
          }`}
        >
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            className={errors.email ? "error" : ""}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className={formData.rating >= star ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
          {errors.rating && <p className="error-message">{errors.rating}</p>}
        </div>

        <div
          className={`form-group ${
            focusedField === "productService" || formData.productService
              ? "focused"
              : ""
          }`}
        >
          <input
            type="text"
            id="productService"
            value={formData.productService}
            onChange={handleChange}
            onFocus={() => handleFocus("productService")}
            onBlur={handleBlur}
            className={errors.productService ? "error" : ""}
          />
          <label htmlFor="productService">
            What did you like most about our product/service?
          </label>
          {errors.productService && (
            <p className="error-message">{errors.productService}</p>
          )}
        </div>

        <div
          className={`form-group ${
            focusedField === "improvement" || formData.improvement
              ? "focused"
              : ""
          }`}
        >
          <textarea
            id="improvement"
            value={formData.improvement}
            onChange={handleChange}
            onFocus={() => handleFocus("improvement")}
            onBlur={handleBlur}
            rows="3"
            className={errors.improvement ? "error" : ""}
          ></textarea>
          <label htmlFor="improvement">What can we improve?</label>
          {errors.improvement && (
            <p className="error-message">{errors.improvement}</p>
          )}
        </div>

        <div className="form-group-c checkbox-group">
          <input
            type="checkbox"
            id="recommend"
            checked={formData.recommend}
            onChange={handleChange}
          />
          <label htmlFor="recommend">Would you recommend us to others?</label>
        </div>

        <div
          className={`form-group ${
            focusedField === "additionalComments" || formData.additionalComments
              ? "focused"
              : ""
          }`}
        >
          <textarea
            id="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            onFocus={() => handleFocus("additionalComments")}
            onBlur={handleBlur}
            rows="4"
          ></textarea>
          <label htmlFor="additionalComments">Additional Comments</label>
        </div>

        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
