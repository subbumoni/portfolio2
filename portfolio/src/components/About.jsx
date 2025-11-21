// import React from 'react'
// import AboutImage from '../assets/final.jpg';

// const About = () => {
//   return (
//     <div className="bg-gray-800 text-white py-6" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12"> About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={AboutImage}
//             alt=""
//             className="w-72 h-100 rounded object-cover mb-8 md:mb-0"
//           />
//           <div className="flex-1">
//             <p className="text-lg  mb-8">
//               I am a passionate full-stack developer with a focus on building
//               modern and responsive web applications.With a strong foundation in
//               both frontend and backend technologies,I strive to create seamless
//               and efficient user experiences.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   HTML & CSS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                                   transform transition-transform duration-300 hover:scale-105 w-10/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   React JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                                   transform transition-transform duration-300 hover:scale-105 w-11/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   Node JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                                   transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 flex justify-between text-center">
//               <div>
//                 <h3
//                   className="text-2xl font-bold text-transparent bg-clip-text
//                               bg-gradient-to-r from-green-400 to-blue-500"
//                 >
//                   3+
//                 </h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3
//                   className="text-2xl font-bold text-transparent bg-clip-text
//                               bg-gradient-to-r from-green-400 to-blue-500"
//                 >
//                   4+
//                 </h3>
//                 <p>Projects Complete</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About


























// import React from "react";
// import AboutImage from "../assets/final.jpg";

// // ICONS
// import {
//   FaHtml5,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
//   FaBootstrap,
//   FaServer,
// } from "react-icons/fa";
// import { SiRedux, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

// // SKILL ROW COMPONENT
// const Skill = ({ icon, label, percent }) => (
//   <div className="flex items-center justify-start gap-6 py-1">
//     <div className="flex items-center gap-3">
//       {icon}
//       <span className="text-lg">{label}</span>
//     </div>
//     <span className="text-gray-300 text-lg">{percent}</span>
//   </div>
// );

// const About = () => {
//   return (
//     <div className="bg-gray-800 text-white py-6" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={AboutImage}
//             alt="profile"
//             className="w-72 h-100 rounded object-cover mb-8 md:mb-0"
//           />

//           <div className="flex-1">
//             <p className="text-lg mb-8">
//               I am a passionate MERN Stack Developer with a strong focus on
//               building modern, scalable, and responsive web applications. I
//               specialize in frontend and backend development using React,
//               Node.js, Express, and MongoDB.
//             </p>

//             {/* SKILLS SECTION */}
//             <div className="space-y-3">
//               <Skill
//                 icon={<FaHtml5 className="text-orange-500 text-xl" />}
//                 label="HTML / CSS"
//                 percent="90%"
//               />

//               <Skill
//                 icon={<FaJs className="text-yellow-400 text-xl" />}
//                 label="JavaScript (ES6)"
//                 percent="90%"
//               />

//               <Skill
//                 icon={<FaReact className="text-blue-400 text-xl" />}
//                 label="React JS"
//                 percent="90%"
//               />

//               <Skill
//                 icon={<SiRedux className="text-purple-500 text-xl" />}
//                 label="Redux"
//                 percent="70%"
//               />

//               <Skill
//                 icon={<FaNodeJs className="text-green-500 text-xl" />}
//                 label="Node JS"
//                 percent="85%"
//               />

//               <Skill
//                 icon={<SiExpress className="text-gray-300 text-xl" />}
//                 label="Express JS"
//                 percent="80%"
//               />

//               <Skill
//                 icon={<SiMongodb className="text-green-600 text-xl" />}
//                 label="MongoDB"
//                 percent="85%"
//               />

//               <Skill
//                 icon={<FaGithub className="text-white text-xl" />}
//                 label="Git & GitHub"
//                 percent="85%"
//               />

//               <Skill
//                 icon={<SiTailwindcss className="text-cyan-400 text-xl" />}
//                 label="Tailwind CSS"
//                 percent="90%"
//               />

//               <Skill
//                 icon={<FaBootstrap className="text-purple-600 text-xl" />}
//                 label="Bootstrap"
//                 percent="90%"
//               />

//               <Skill
//                 icon={<FaServer className="text-red-400 text-xl" />}
//                 label="REST API / JWT Auth"
//                 percent="70%"
//               />
//             </div>

//             {/* EXPERIENCE BOX */}
//             <div className="mt-12 flex justify-between text-center">
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//                   3+
//                 </h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//                   4+
//                 </h3>
//                 <p>Projects Completed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


















// import React from "react";
// import AboutImage from "../assets/final.jpg";

// const skills = [
//   { name: "HTML", level: "95%" },
//   { name: "CSS", level: "90%" },
//   { name: "JavaScript", level: "85%" },
//   { name: "React.js", level: "85%" },
//   { name: "Context API", level: "85%" },
//   { name: "Redux Toolkit", level: "80%" },
//   { name: "Node.js", level: "80%" },
//   { name: "Express.js", level: "80%" },
//   { name: "MongoDB", level: "75%" },
//   { name: "REST API", level: "90%" },
//   { name: "JWT Auth", level: "85%" },
//   { name: "Axios", level: "90%" },
//   { name: "React Router", level: "90%" },
//   { name: "Material UI", level: "88%" },
//   { name: "Tailwind CSS", level: "80%" },
//   // { name: "Bootstrap", level: "85%" },
//   { name: "Git & GitHub", level: "80%" },
//   { name: "Postman", level: "85%" },
// ];

// const About = () => {
//   const containerStyle = {
//     backgroundColor: "#111827",
//     color: "white",
//     padding: "40px 0",
//   };

//   const wrapperStyle = {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "20px",
//   };

//   const titleStyle = {
//     textAlign: "center",
//     fontSize: "34px",
//     fontWeight: "bold",
//     marginBottom: "40px",
//   };

//   const rowStyle = {
//     display: "flex",
//     flexDirection: "row",
//     gap: "40px",
//     alignItems: "center",
//     flexWrap: "wrap",
//   };

//   const imageStyle = {
//     width: "260px",
//     height: "340px",
//     borderRadius: "12px",
//     objectFit: "cover",
//   };

//   const textStyle = {
//     fontSize: "18px",
//     lineHeight: "1.6",
//     marginBottom: "20px",
//   };

//   const skillsGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "15px",
//     marginTop: "25px",
//   };

//   const skillCard = {
//     background: "#1f2937",
//     padding: "16px 20px",
//     borderRadius: "12px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: "18px",
//     boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
//     transition: "0.3s",
//   };

//   const gradientText = {
//     background: "linear-gradient(to right, #34d399, #3b82f6)",
//     WebkitBackgroundClip: "text",
//     color: "transparent",
//     fontWeight: "bold",
//     fontSize: "28px",
//   };

//   const statsRow = {
//     marginTop: "35px",
//     display: "flex",
//     justifyContent: "space-between",
//     maxWidth: "300px",
//   };

//   return (
//     <div style={containerStyle} id="about">
//       <div style={wrapperStyle}>
//         <h2 style={titleStyle}>About Me</h2>

//         <div style={rowStyle}>
//           <img src={AboutImage} alt="" style={imageStyle} />

//           <div style={{ flex: 1 }}>
//             <p style={textStyle}>
//               I am a passionate full-stack developer with a focus on building
//               modern and responsive web applications. With strong knowledge in
//               both frontend and backend technologies, I create seamless and
//               user-friendly digital experiences.
//             </p>

//             {/* Skills Section */}
//             <div style={skillsGrid}>
//               {skills.map((skill, index) => (
//                 <div key={index} style={skillCard}>
//                   <span style={{ fontWeight: "600" }}>{skill.name}</span>
//                   <span style={{ fontWeight: "700", color: "#60a5fa" }}>
//                     {skill.level}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div style={statsRow}>
//               <div>
//                 <h3 style={gradientText}>3+</h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3 style={gradientText}>4+</h3>
//                 <p>Projects Completed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
























// import React from "react";
// import AboutImage from "../assets/final.jpg";

// const skills = [
//   { name: "HTML", level: "95%" },
//   { name: "CSS", level: "90%" },
//   { name: "JavaScript", level: "85%" },
//   { name: "React.js", level: "85%" },
//   { name: "Context API", level: "85%" },
//   { name: "Redux Toolkit", level: "80%" },
//   { name: "Node.js", level: "80%" },
//   { name: "Express.js", level: "80%" },
//   { name: "MongoDB", level: "75%" },
//   { name: "REST API", level: "90%" },
//   { name: "JWT Auth", level: "85%" },
//   { name: "Axios", level: "90%" },
//   { name: "React Router", level: "90%" },
//   { name: "Material UI", level: "88%" },
//   { name: "Tailwind CSS", level: "80%" },
//   { name: "Git & GitHub", level: "80%" },
//   { name: "Postman", level: "85%" },
// ];

// const About = () => {
//   const containerStyle = {
//     backgroundColor: "#1F2937", // ⭐ Tailwind bg-gray-800
//     color: "white",
//     padding: "40px 0",
//   };

//   const wrapperStyle = {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "20px",
//   };

//   const titleStyle = {
//     textAlign: "center",
//     fontSize: "34px",
//     fontWeight: "bold",
//     marginBottom: "40px",
//   };

//   const rowStyle = {
//     display: "flex",
//     flexDirection: "row",
//     gap: "40px",
//     alignItems: "center",
//     flexWrap: "wrap",
//   };

//   const imageStyle = {
//     width: "260px",
//     height: "340px",
//     borderRadius: "12px",
//     objectFit: "cover",
//   };

//   const textStyle = {
//     fontSize: "18px",
//     lineHeight: "1.6",
//     marginBottom: "20px",
//   };

//   const skillsGrid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "15px",
//     marginTop: "25px",
//   };

//   const skillCard = {
//     background: "#273549", // looks better on gray-800
//     padding: "16px 20px",
//     borderRadius: "12px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: "18px",
//     boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
//     transition: "0.3s",
//   };

//   const gradientText = {
//     background: "linear-gradient(to right, #34d399, #3b82f6)",
//     WebkitBackgroundClip: "text",
//     color: "transparent",
//     fontWeight: "bold",
//     fontSize: "28px",
//   };

//   const statsRow = {
//     marginTop: "35px",
//     display: "flex",
//     justifyContent: "space-between",
//     maxWidth: "300px",
//   };

//   return (
//     <div style={containerStyle} id="about">
//       <div style={wrapperStyle}>
//         <h2 style={titleStyle}>About Me</h2>

//         <div style={rowStyle}>
//           <img src={AboutImage} alt="" style={imageStyle} />

//           <div style={{ flex: 1 }}>
//             <p style={textStyle}>
//               I am a passionate full-stack developer with a focus on building
//               modern and responsive web applications. With strong knowledge in
//               both frontend and backend technologies, I create seamless and
//               user-friendly digital experiences.
//             </p>

//             {/* Skills */}
//             <div style={skillsGrid}>
//               {skills.map((skill, index) => (
//                 <div key={index} style={skillCard}>
//                   <span style={{ fontWeight: "600" }}>{skill.name}</span>
//                   <span style={{ fontWeight: "700", color: "#60a5fa" }}>
//                     {skill.level}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div style={statsRow}>
//               <div>
//                 <h3 style={gradientText}>3+</h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3 style={gradientText}>4+</h3>
//                 <p>Projects Completed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



























import React from "react";
import AboutImage from "../assets/final.jpg";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React.js", level: "85%" },
  { name: "Context API", level: "85%" },
  { name: "Redux Toolkit", level: "80%" },
  { name: "Node.js", level: "80%" },
  { name: "Express.js", level: "80%" },
  { name: "MongoDB", level: "75%" },
  { name: "REST API", level: "90%" },
  { name: "JWT Auth", level: "85%" },
  { name: "Axios", level: "90%" },
  { name: "React Router", level: "90%" },
  { name: "Material UI", level: "88%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Git & GitHub", level: "80%" },
  { name: "Postman", level: "85%" },
];

const About = () => {
  const containerStyle = {
    backgroundColor: "#1F2937",
    color: "white",
    padding: "40px 0",
  };

  const wrapperStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  // ⭐ UPDATED HEIGHT HERE
  const imageStyle = {
    width: "260px",
    height: "430px", // 🔥 Increased height (you can change)
    borderRadius: "12px",
    objectFit: "cover",
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const skillsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginTop: "25px",
  };

  const skillCard = {
    background: "#273549",
    padding: "16px 20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
    transition: "0.3s",
  };

  const gradientText = {
    background: "linear-gradient(to right, #34d399, #3b82f6)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontWeight: "bold",
    fontSize: "28px",
  };

  const statsRow = {
    marginTop: "35px",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "300px",
  };

  return (
    <div style={containerStyle} id="about">
      <div style={wrapperStyle}>
        <h2 style={titleStyle}>About Me</h2>

        <div style={rowStyle}>
          <img src={AboutImage} alt="" style={imageStyle} />

          <div style={{ flex: 1 }}>
            <p style={textStyle}>
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With strong knowledge in
              both frontend and backend technologies, I create seamless and
              user-friendly digital experiences.
            </p>

            {/* Skills */}
            <div style={skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} style={skillCard}>
                  <span style={{ fontWeight: "600" }}>{skill.name}</span>
                  <span style={{ fontWeight: "700", color: "#60a5fa" }}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={statsRow}>
              <div>
                <h3 style={gradientText}>3+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 style={gradientText}>4+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
