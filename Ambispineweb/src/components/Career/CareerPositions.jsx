// import React from "react";
// import {
//   BsClock,
//   BsGeoAlt,
//   BsCurrencyBitcoin,
//   BsArrowUpRight,
// } from "react-icons/bs";
// // import { BsCurrencyBitcoin } from "react-icons/bs";
// import "./Career.css";

// export default function CareerPositions({ onApply }) {
//   const positions = [
//     {
//       title: "Product Designer",
//       description: "Shape the future of freight technology",
//       experience: "0-5 Yrs",
//       salary: "Not Disclosed",
//       location: "Noida",
//       type: "Full time",
//       remote: "100% remote",
//     },
//     {
//       title: "Software Engineer",
//       description: "Build scalable logistics solutions",
//       experience: "2-6 Yrs",
//       salary: "Competitive",
//       location: "Remote",
//       type: "Full time",
//       remote: "100% remote",
//     },
//     {
//       title: "Data Analyst",
//       description: "Drive data-driven decisions",
//       experience: "1-3 Yrs",
//       salary: "Not Disclosed",
//       location: "Hybrid",
//       type: "Full time",
//       remote: "Hybrid",
//     },
//   ];

//   return (
//     <div className="positions-section" id="positions">
//       <h2>Open Positions</h2>
//       <div className="positions-grid">
//         {positions.map((position, index) => (
//           <div key={index} className="position-card">
//             <div className="position-header">
//               <h3>{position.title}</h3>
//               <p>{position.description}</p>
//             </div>
//             <div className="position-details">
//               <span>
//                 <BsClock /> {position.type}
//               </span>
//               <span>
//                 <BsGeoAlt /> {position.location}
//               </span>
//               <span>
//                 <BsCurrencyBitcoin /> {position.salary}
//               </span>
//             </div>
//             <button className="apply-button" onClick={() => onApply(position)}>
//               Apply <BsArrowUpRight />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import {
  BsClock,
  BsGeoAlt,
  BsCurrencyBitcoin,
  BsArrowUpRight,
} from "react-icons/bs";
import "./Career.css";

export default function CareerPositions({ onApply }) {
  const positions = [
    {
      title: "Product Designer",
      description: "Shape the future of freight technology",
      experience: "0-5 Yrs",
      salary: "Competitive",
      location: "Riwa",
      type: "Full time",
      remote: "100% remote",
    },
    {
      title: "FullStack Developer",
      description: "Build scalable logistics solutions",
      experience: "2-6 Yrs",
      salary: "Competitive",
      location: "Riwa",
      type: "Full time",
      remote: "100% remote",
    },
    // {
    //   title: "Data Analyst",
    //   description: "Drive data-driven decisions",
    //   experience: "1-3 Yrs",
    //   salary: "Not Disclosed",
    //   location: "Hybrid",
    //   type: "Full time",
    //   remote: "Hybrid",
    // },
  ];

  return (
    <div className="positions-section" id="positions">
      <h2>Open Positions</h2>
      <div className="positions-grid">
        {positions.map((position, index) => (
          <div key={index} className="position-card">
            <div className="position-header">
              <h3>{position.title}</h3>
              <p>{position.description}</p>
            </div>
            <div className="position-details">
              <span>
                <BsClock /> {position.type}
              </span>
              <span>
                <BsGeoAlt /> {position.location}
              </span>
              <span>
                <BsCurrencyBitcoin /> {position.salary}
              </span>
            </div>
            <button className="apply-button" onClick={() => onApply(position)}>
              Apply <BsArrowUpRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
