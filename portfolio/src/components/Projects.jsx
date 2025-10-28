// import React from 'react'
// import AboutImage from "../assets/aboutme-image.png";
// // https://github.com/subbumoni/movie-cast.git
// // https://movie-cast-frontend.onrender.com


// const projects = [
//   {
//     id: 1,
//     name: "Movie-Cast",
//     technologies: "MERN Stack",
//     image: AboutImage,
//     github: "https://github.com/subbumoni/movie-cast.git",
//   },
//   {
//     id: 2,
//     name: "E-Commerce",
//     technologies: "MERN Stack",
//     image: AboutImage,
//     github: "https://giyhub.com/SubbuMoni",
//   },

//   {
//     id: 3,
//     name: "Multi School Management System",
//     technologies: "MERN Stack",
//     image: AboutImage,
//     github: "https://giyhub.com/SubbuMoni",
//   },
//   {
//     id: 4,
//     name: "Income and Expense Tracker",
//     technologies: "MERN Stack",
//     image: AboutImage,
//     github: "https://giyhub.com/SubbuMoni",
//   },
// ];
// const Projects = () => {
//   return (
//      <div className="bg-black text-white py-20" id="project">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {projects.map(project => (
//                       <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
//                       transform transition-transform duration-300 hover:scale-105">
//                           <img src={project.image} alt={project.name} className='rounded-lg mb-4
//                           w-full h-48 object-cover' />
//                           <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
//                           <p className='text-gray-400 mb-4'>{project.technologies}</p>
//                           <a href="" className='inline-block bg-gradient-to-r from-green-400
//                           to-blue-500 text-white px-4 py-2 rounded-full' target='_blank'
//                           rel='noopener noreferrer'>GitHub</a>
//                       </div>
//                   ))}
//               </div>
//                   </div>
//                   </div>
//   )
// }

// export default Projects




import React from "react";
import AboutImage from "../assets/school.jpg";
import ECommerce from "../assets/e-commerce.jpg"
import Movie from "../assets/movie.jpg"

// ✅ Add both github and demo links
const projects = [
  {
    id: 1,
    name: "School Management System",
    technologies: "MERN Stack",
    image: AboutImage,
    github: "https://github.com/subbumoni/G1.git",
    demo: "https://g1-f.onrender.com",
  },
  {
    id: 2,
    name: "E-Commerce",
    technologies: "MERN Stack",
    image: ECommerce,
    github: "https://github.com/subbumoni/E-commerce-new.git",
    demo: "https://e-commerce-new-frontend-o166.onrender.com",
  },
  {
    id: 3,
    name: "Movie-Cast",
    technologies: "MERN Stack",
    image: Movie,
    github: "https://github.com/subbumoni/movie-cast.git",
    demo: "https://movie-cast-frontend.onrender.com",
  },
  // {
  //   id: 4,
  //   name: "Income and Expense Tracker",
  //   technologies: "MERN Stack",
  //   image: AboutImage,
  //   github: "https://github.com/SubbuMoni",
  //   demo: "https://your-expense-tracker-demo-link.com",
  // },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* ✅ Image click -> Demo site */}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover cursor-pointer"
                />
              </a>

              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              {/* ✅ Button click -> GitHub repo */}
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
