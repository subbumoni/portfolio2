// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className="bg-black text-white px-8 md:px-16 lg:px-24">
//       <div className="container py-2 flex justify-center md:justify-between items-center">
//         <div className="text-2xl font-bold hidden md:inline">subbu</div>
//         <div className="space-x-6">
//           <a href="#home" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#about" className="hover:text-gray-400">
//             About Me
//           </a>
//           <a href="#service" className="hover:text-gray-400">
//             Services
//           </a>
//           <a href="#project" className="hover:text-gray-400">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//               <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
//         transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar




import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Import here

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hidden md:inline">Subramanian Jayabal</div>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>

          {/* Smooth scroll to sections on Home page */}
          <HashLink smooth to="/#about" className="hover:text-gray-400">
            About Me
          </HashLink>

          <HashLink smooth to="/#service" className="hover:text-gray-400">
            Services
          </HashLink>

          <HashLink smooth to="/#project" className="hover:text-gray-400">
            Projects
          </HashLink>

          <HashLink smooth to="/#contact" className="hover:text-gray-400">
            Contact
          </HashLink>
        </div>

        {/* Button */}
        {/* <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
          transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;














