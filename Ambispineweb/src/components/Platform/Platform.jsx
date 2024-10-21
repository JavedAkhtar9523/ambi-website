// import React from "react";
// import "./Platform.css";

// const Platform = () => {
//   return (
//     <>
//       <div className="containerPlatform">
//         <h3 style={{ marginBottom: "30px", fontWeight: "600" }}>
//           Comming Soon
//         </h3>
//         <div className="project-1">
//           <div>
//             <h4 style={{ fontWeight: "700", fontSize: "28px" }}>
//               What are Spreads ?
//             </h4>
//             <p style={{ width: "50%" }}>
//               We're shaping the future of freight and logistics . If you're
//               exited by the prospect of unlocking the world's potential by
//               speeding up the way goods move , join usou're exited by the
//               prospect of unlocking the world's potential by speeding up the way
//               goods move , join usou're exited by the prospect of unlocking the
//               world's potential by speeding up the way goods move , join us
//             </p>
//           </div>
//           <img
//             src={project1Image}
//             width={200}
//             height={200}
//             alt="project1_logo"
//           />
//         </div>
//         <div className="project-2">
//           <img
//             src={project2Image}
//             width={200}
//             height={200}
//             alt="project2_logo"
//           />
//           <div>
//             <h3 style={{ fontWeight: "700", fontSize: "28px" }}>
//               What are Spine Web Solutions ?
//             </h3>
//             <p style={{ width: "80%" }}>
//               We're shaping the future of freight and logistics . If you're
//               exited by the prospect of unlocking the world's potential by
//               speeding up the way goods move , join usou're exited by the
//               prospect of unlocking the world's potential by speeding up the way
//               goods move , join usou're exited by the prospect of unlocking the
//               world's potential by speeding up the way goods move , join us
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Platform;

import React from "react";
import "./Platform.css";
import project1Image from "../../Images/pluto.png";
import project2Image from "../../Images/sws.png";

const ProjectCard = ({ title, description, imageSrc, imageAlt, reversed }) => (
  <div className={`project-card ${reversed ? "reversed" : ""}`}>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="learn-more">Learn More &rarr;</button>
    </div>
    <div className="project-image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  </div>
);

const Platform = () => {
  return (
    <div className="container-platform">
      <h2 className="coming-soon">Coming Soon</h2>

      <ProjectCard
        title="What are Spreads?"
        description="We're shaping the future of freight and logistics. If you're excited by the prospect of unlocking the world's potential by speeding up the way goods move, join us. We're revolutionizing the industry with cutting-edge technology and innovative solutions."
        imageSrc={project1Image}
        imageAlt="Spreads Project"
      />

      <ProjectCard
        title="What are Spine Web Solutions?"
        description="Spine Web Solutions is at the forefront of web development innovation. We create robust, scalable, and user-friendly web applications that drive business growth. Our team of experts is passionate about delivering high-quality solutions tailored to your unique needs."
        imageSrc={project2Image}
        imageAlt="Spine Web Solutions Project"
        reversed
      />
    </div>
  );
};

export default Platform;
