// import React from "react";
// import AboutImage from "../assets/school.jpg";
// import ECommerce from "../assets/e-commerce.jpg";
// import Movie from "../assets/movie.jpg";

// const projects = [
//   {
//     id: 1,
//     name: "School Management System",
//     technologies: "MERN Stack (React, Node.js, Express, MongoDB)",
//     image: AboutImage,
//     description:
//       "Role-based School Management System with Admin, Teacher, and Student dashboards. Features include student data management, attendance tracking, exam details, and secure JWT authentication.",

//     frontend: "https://github.com/subbumoni/G1/tree/main/frontend",
//     backend: "https://github.com/subbumoni/G1/tree/main/API",
//     demo: "https://g1-f.onrender.com",
//   },
//   {
//     id: 2,
//     name: "E-Commerce Website",
//     technologies: "MERN Stack (Product CRUD, JWT Auth, Image Upload)",
//     image: ECommerce,
//     description:
//       "Full-stack e-commerce platform with user authentication, product CRUD, secure JWT login, image uploads using Multer, and shopping cart functionality.",

//     frontend: "https://github.com/subbumoni/E-commerce-new/tree/main/ECOMMERCE",
//     backend: "https://github.com/subbumoni/E-commerce-new/tree/main/api",
//     demo: "https://e-commerce-new-frontend-o166.onrender.com",
//   },
//   {
//     id: 3,
//     name: "Movie Cast Search App",
//     technologies: "MERN Stack (Register / Login, CRUD, Image Upload)",
//     image: Movie,
//     description:
//       "Movie Cast lookup platform with login, actor profile CRUD operations, image uploads, and dynamic search functionality built using React and Node.js.",

//     frontend:
//       "https://github.com/subbumoni/movie-cast/tree/main/frontend/movi-cast",
//     backend: "https://github.com/subbumoni/movie-cast/tree/main/api",
//     demo: "https://movie-cast-frontend.onrender.com",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="bg-gray-900 text-white py-10" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

//         {/* Project Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col h-full"
//             >
//               {/* Project Image (click → demo) */}
//               <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={project.image}
//                   alt={`${project.name} preview`}
//                   className="rounded-lg mb-4 w-full h-48 object-cover cursor-pointer"
//                 />
//               </a>

//               {/* TOP CONTENT */}
//               <div className="flex-grow">
//                 <h3 className="text-2xl font-bold mb-1">{project.name}</h3>

//                 <p className="text-gray-400 text-sm">{project.technologies}</p>

//                 <p className="text-gray-300 mt-3 mb-4 text-sm leading-relaxed">
//                   {project.description}
//                 </p>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex flex-col gap-2 mt-auto">
//                 <a
//                   href={project.frontend}
//                   className="bg-gradient-to-r from-teal-300 to-blue-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
//                   target="_blank"
//                 >
//                   Frontend GitHub
//                 </a>

//                 <a
//                   href={project.backend}
//                   className="bg-gradient-to-r from-orange-300 to-yellow-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
//                   target="_blank"
//                 >
//                   Backend GitHub
//                 </a>

//                 <a
//                   href={project.demo}
//                   className="bg-gradient-to-r from-purple-300 to-pink-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
//                   target="_blank"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;










import React from "react";
import AboutImage from "../assets/school.jpg";
import ECommerce from "../assets/e-commerce.jpg";
import Movie from "../assets/movie.jpg";

const projects = [
  {
    id: 1,
    name: "School Management System",
    technologies: "MERN Stack (React, Node.js, Express, MongoDB)",
    image: AboutImage,
    description:
      "Role-based School Management System with Admin, Teacher, and Student dashboards. Features include student data management, attendance tracking, exam details, and secure JWT authentication.",

    frontend: "https://github.com/subbumoni/G1/tree/main/frontend",
    backend: "https://github.com/subbumoni/G1/tree/main/API",
    demo: "https://g1-f.onrender.com",
  },
  {
    id: 2,
    name: "E-Commerce Website",
    technologies: "MERN Stack (Product CRUD, JWT Auth, Image Upload)",
    image: ECommerce,
    description:
      "Full-stack e-commerce platform with user authentication, product CRUD, secure JWT login, image uploads using Multer, and shopping cart functionality.",

    frontend: "https://github.com/subbumoni/E-commerce-new/tree/main/ECOMMERCE",
    backend: "https://github.com/subbumoni/E-commerce-new/tree/main/api",
    demo: "https://e-commerce-new-frontend-o166.onrender.com",
  },
  {
    id: 3,
    name: "Movie Cast Search App",
    technologies: "MERN Stack (Register / Login, CRUD, Image Upload)",
    image: Movie,
    description:
      "Movie Cast lookup platform with login, actor profile CRUD operations, image uploads, and dynamic search functionality built using React and Node.js.",

    frontend:
      "https://github.com/subbumoni/movie-cast/tree/main/frontend/movi-cast",
    backend: "https://github.com/subbumoni/movie-cast/tree/main/api",
    demo: "https://movie-cast-frontend.onrender.com",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-10" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col h-full"
            >
              {/* Project Image */}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="rounded-lg mb-4 w-full h-48 object-cover cursor-pointer"
                />
              </a>

              {/* TOP CONTENT */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.technologies}</p>
                <p className="text-gray-300 mt-3 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-2 mt-auto items-center">
                <a
                  href={project.frontend}
                  className="w-1/2 bg-gradient-to-r from-teal-300 to-blue-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
                  target="_blank"
                >
                  Frontend GitHub
                </a>

                <a
                  href={project.backend}
                  className="w-1/2 bg-gradient-to-r from-orange-300 to-yellow-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
                  target="_blank"
                >
                  Backend GitHub
                </a>

                <a
                  href={project.demo}
                  className="w-1/2 bg-gradient-to-r from-purple-300 to-pink-300 text-black font-semibold px-2 py-1 rounded-md text-center text-xs hover:opacity-90"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;






