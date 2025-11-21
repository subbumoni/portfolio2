// import React, { useState } from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubscribe = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setMessage("❌ Please enter your email.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5001/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("✅ Subscribed Successfully!");
//         setEmail("");
//       } else {
//         setMessage(`⚠️ ${data.message}`);
//       }
//     } catch (error) {
//       setMessage("❌ Server error, try again later.");
//     }
//   };

//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Subramanian J</h3>
//             <p className="text-gray-400">
//               Full Stack Developer specializing in web and software development.
//             </p>
//           </div>

//           <div className="flex-1 w-full">
//             <form
//               className="flex items-center justify-center"
//               onSubmit={handleSubscribe}
//             >
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>

//             {/* ✅ Success/Error Message */}
//             {message && (
//               <p
//                 className={`mt-2 text-sm ${
//                   message.startsWith("✅") ? "text-green-400" : "text-red-400"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400">
//             © {new Date().getFullYear()} Subramanian J. All Rights Reserved.
//           </p>

//           <div className="flex space-x-4 my-4 md:my-0">
//             <a
//               href="https://www.linkedin.com/in/subramanian-j"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaLinkedin size={24} />
//             </a>
//             <a
//               href="https://github.com/subbumoni"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaGithub size={24} />
//             </a>
//           </div>

//           <div className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               Privacy
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Subramanian J</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in web and software development.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Subramanian J. All Rights Reserved.
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/subramanian-j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/subbumoni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
