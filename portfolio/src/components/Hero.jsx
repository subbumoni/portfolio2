
// import React from "react";
// import { Link } from "react-router-dom";
// import HeroImage from "../assets/final.jpg";

// const Hero = () => {
//   return (
//     <div className="bg-gray-800 text-white text-center min-h-screen pt-12 flex flex-col items-center justify-center">
//       {/* Profile Image */}
//       <div className="flex justify-center mb-4">
//         <img
//           src={HeroImage}
//           alt="Subramanian Jayabal"
//           className="w-64 h-[420px] rounded object-cover shadow-lg"
//         />
//       </div>

//       {/* Heading */}
//       <h1 className="text-2xl md:text-4xl font-bold leading-tight">
//         I'm{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//           Subramanian Jayabal
//         </span>
//         , Full-Stack Developer
//       </h1>

//       {/* Description */}
//       <p className="mt-2 text-base text-gray-300 px-4 md:px-24 max-w-2xl">
//         I specialize in building modern and responsive web applications using
//         the MERN stack. I’m passionate about turning ideas into visually
//         stunning and user-friendly solutions.
//       </p>

//       {/* Buttons */}
//       <div className="mt-6 flex gap-4">
//         {/* ⭐ Resume Button (Google Drive link) */}
//         <a
//           href="https://drive.google.com/file/d/188JTobbQq15kot-5dOXICrAn4Fe_MJh1/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-green-300 transition duration-300"
//         >
//           📄 View Resume
//         </a>

//         {/* Existing Read More Button */}
//         <Link
//           to="/read-more"
//           className="text-green-400 hover:text-blue-500 font-semibold text-lg transition-colors duration-300"
//         >
//           Read More →
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;
















import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/final.jpg";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white text-center min-h-screen pt-12 flex flex-col items-center justify-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={HeroImage}
          alt="Subramanian Jayabal"
          className="w-64 h-[420px] rounded object-cover shadow-lg"
        />
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold leading-tight">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Subramanian Jayabal
        </span>
        , Full-Stack Developer
      </h1>

      {/* Description */}
      <p className="mt-2 text-base text-gray-300 px-4 md:px-24 max-w-2xl">
        I specialize in building modern and responsive web applications using
        the MERN stack. I’m passionate about turning ideas into visually
        stunning and user-friendly solutions.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* ⭐ Updated Resume Button */}
        <a
          href="https://drive.google.com/file/d/1Rs1U-6FMVVEHVYHKGoINkFHC-6XpP1Qb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-green-300 transition duration-300"
        >
          📄 View Resume
        </a>

        {/* Read More Button */}
        <Link
          to="/read-more"
          className="text-green-400 hover:text-blue-500 font-semibold text-lg transition-colors duration-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default Hero;
