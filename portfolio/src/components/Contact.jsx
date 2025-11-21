// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
// import axios from "axios";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5001/api/contact",
//         formData
//       );
//       if (res.data.success) {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" }); // Reset form
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Failed to send message.");
//     }
//   };

//   return (
//     <div className="bg-gray-800 text-white py-6" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           {/* Left Side Info */}
//           <div className="flex-1">
//             <h3
//               className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
//               from-green-400 to-blue-500 mb-4"
//             >
//               Let's Talk
//             </h3>
//             <p>
//               I'm open to discussing web development projects or partnership
//               opportunities.
//             </p>
//             <div className="mb-4 mt-8">
//               <FaEnvelope className="inline-block text-green-400 mr-2" />
//               <a
//                 href="mailto:subramanianbeee@gmail.com"
//                 className="hover:underline"
//               >
//                 subramanianbeee@gmail.com
//               </a>
//             </div>
//             <div className="mb-4">
//               <FaPhone className="inline-block text-green-400 mr-2" />
//               <span>8940357216</span>
//             </div>
//             <div className="mb-4">
//               <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
//               <span>
//                 3/127,Ganapathi Agraharam Street, Tanjure, Tamilnadu,India
//               </span>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="flex-1 w-full">
//             <form className="flex-1 w-full" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   placeholder="Enter Your Email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
//                   rows="5"
//                   placeholder="Enter Your Message"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full mt-4"
//               >
//                 Send
//               </button>
//             </form>
//             {status && <p className="mt-4">{status}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





















import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/contact",
        formData
      );
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <div className="bg-gray-800 text-white py-10" id="contact">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-10">
          {/* Left Info */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
              Let's Talk
            </h3>

            <p className="mb-4">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="flex items-center mb-2">
              <FaEnvelope className="text-green-400 mr-2" />
              <a
                href="mailto:subramanianbeee@gmail.com"
                className="hover:underline"
              >
                subramanianbeee@gmail.com
              </a>
            </div>

            <div className="flex items-center mb-2">
              <FaPhone className="text-green-400 mr-2" />
              <span>8940357216</span>
            </div>

            <div className="flex items-center mb-2">
              <FaMapMarkedAlt className="text-green-400 mr-2" />
              <span>
                3/127, Ganapathi Agraharam Street, Tanjavur, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full mt-6 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="4"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full mt-2"
              >
                Send
              </button>
            </form>

            {status && <p className="mt-3">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
