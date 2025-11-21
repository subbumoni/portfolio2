// export default function ReadMore() {
//   return (
//     <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl text-gray-800">
//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
//         My profile
//       </h1>

//       {/* Summary Section */}
//       <p className="text-lg leading-relaxed mb-4">
//         I’m <span className="font-semibold">Subramanian Jayabal</span>, a MERN
//         Stack Developer with hands-on experience in building responsive and
//         scalable web applications using React.js, Node.js, Express.js, and
//         MongoDB. I have transitioned from over 10 years of non-IT experience
//         into software development after completing the{" "}
//         <span className="font-semibold">
//           MERN Full Stack Program at GUVI (IIT-M Research Park)
//         </span>
//         .
//       </p>

//       <p className="text-lg leading-relaxed mb-4">
//         I’ve successfully developed and deployed three full-stack projects:
//         <span className="font-semibold"> School Management System</span>,
//         <span className="font-semibold"> E-Commerce Web App</span>, and{" "}
//         <span className="font-semibold">Movie Casting Portfolio</span>, all
//         hosted on Render with secure backend APIs and modern UI design.
//       </p>

//       {/* Highlight Box */}
//       <div className="p-4 bg-gray-100 border-l-4 border-indigo-500 rounded-lg mb-6">
//         <p className="text-gray-700">
//           💡 I specialize in React.js, Node.js, Express.js, MongoDB, REST APIs,
//           and JWT authentication. Passionate about delivering clean code,
//           scalable systems, and user-friendly UI.
//         </p>
//       </div>

//       {/* Projects Section */}
//       <h2 className="text-2xl font-semibold mb-4 text-gray-900">Projects</h2>

//       <ul className="list-disc pl-6 space-y-3 text-lg">
//         <li>
//           <span className="font-semibold">School Management System</span> — Full
//           authentication (Admin/Teacher/Student), CRUD management, and protected
//           routes. <br />
//           🔗{" "}
//           <a
//             href="https://g1-f.onrender.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             Live Project
//           </a>{" "}
//           |{" "}
//           <a
//             href="https://github.com/subbumoni/G1.git"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             GitHub
//           </a>
//         </li>

//         <li>
//           <span className="font-semibold">E-Commerce Web App</span> — Product
//           and cart system with JWT authentication, image upload using
//           Formidable, and category-based filtering. <br />
//           🔗{" "}
//           <a
//             href="https://e-commerce-new-frontend-o166.onrender.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             Live Project
//           </a>{" "}
//           |{" "}
//           <a
//             href="https://github.com/subbumoni/E-commerce-new.git"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             GitHub
//           </a>
//         </li>

//         <li>
//           <span className="font-semibold">Movie Casting App</span> — Portfolio
//           app fetching movie and actor details using APIs with responsive card
//           layouts. <br />
//           🔗{" "}
//           <a
//             href="https://movie-cast-frontend.onrender.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             Live Project
//           </a>{" "}
//           |{" "}
//           <a
//             href="https://github.com/subbumoni/movie-cast.git"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             GitHub
//           </a>
//         </li>
//       </ul>

//       {/* Call-to-action
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() =>
//             window.open("https://portfolio2-frontend1.onrender.com/", "_blank")
//           }
//           className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-md hover:bg-indigo-700 transition"
//         >
//           View My Portfolio
//         </button>
//       </div> */}
//     </div>
//   );
// }
























export default function ReadMore() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        My Profile
      </h1>

      {/* Summary Section */}
      <p className="text-lg leading-relaxed mb-4">
        I’m <span className="font-semibold">Subramanian Jayabal</span>, a MERN
        Stack Developer with hands-on experience in building responsive and
        scalable web applications using React.js, Node.js, Express.js, and
        MongoDB. I transitioned from 10+ years of non-IT experience into
        software development after completing the{" "}
        <span className="font-semibold">
          MERN Full Stack Program at GUVI (IIT-M Research Park)
        </span>
        .
      </p>

      <p className="text-lg leading-relaxed mb-4">
        I’ve successfully developed and deployed three full-stack applications:
        <span className="font-semibold"> School Management System</span>,
        <span className="font-semibold"> E-Commerce Web App</span>, and{" "}
        <span className="font-semibold">Movie Casting Portfolio</span>, all
        hosted on Render with secure REST APIs and clean UI design.
      </p>

      {/* Highlight Box */}
      <div className="p-4 bg-gray-100 border-l-4 border-indigo-500 rounded-lg mb-6">
        <p className="text-gray-700">
          💡 I specialize in React.js, Node.js, Express.js, MongoDB, REST APIs,
          JWT authentication, and responsive UI development. I focus on building
          scalable, user-friendly frontends and secure backend architectures.
        </p>
      </div>

      {/* Projects Section */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Projects</h2>

      <ul className="list-disc pl-6 space-y-6 text-lg">
        {/* School Management System */}
        <li>
          <span className="font-semibold text-xl">
            School Management System
          </span>
          <p className="mt-2 leading-relaxed">
            A complete MERN-based school ERP system featuring separate
            dashboards for <strong>Admin, Teacher, and Students</strong>.
            Includes role-based authentication, protected routes, and dynamic
            data management.
          </p>
          <p className="mt-2">
            <strong>Key Features:</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Role-based login for Admin/Teacher/Student (JWT secured)</li>
              <li>
                Admin can manage classes, subjects, teachers, and students
              </li>
              <li>
                Teacher dashboard for attendance, marks, and study materials
              </li>
              <li>
                Student dashboard to view attendance, marks, and downloads
              </li>
              <li>Protected backend APIs & secure route access</li>
              <li>MongoDB models for Marks, Attendance, Classes, Users</li>
            </ul>
          </p>
          🔗{" "}
          <a
            href="https://g1-f.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Live Project
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/subbumoni/G1.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </li>

        {/* E-Commerce Web App */}
        <li>
          <span className="font-semibold text-xl">E-Commerce Web App</span>
          <p className="mt-2 leading-relaxed">
            A full-featured e-commerce application including dynamic product
            management, image upload, cart system, and secure authentication.
          </p>
          <p className="mt-2">
            <strong>Key Features:</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>JWT authentication with hashed passwords</li>
              <li>Admin-controlled product creation, editing, and deletion</li>
              <li>Product category filtering and price sorting</li>
              <li>
                Add-to-cart and remove-from-cart functionality with persistence
              </li>
              <li>Image upload using Formidable and static serving</li>
              <li>Responsive UI with modern product cards</li>
              <li>Secure REST APIs for users, products, cart</li>
            </ul>
          </p>
          🔗{" "}
          <a
            href="https://e-commerce-new-frontend-o166.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Live Project
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/subbumoni/E-commerce-new.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </li>

        {/* Movie Casting App */}
        <li>
          <span className="font-semibold text-xl">Movie Casting Portfolio</span>
          <p className="mt-2 leading-relaxed">
            A movie and actor information platform using external APIs to fetch
            real-time film data, cast details, and actor profiles with a
            responsive layout.
          </p>
          <p className="mt-2">
            <strong>Key Features:</strong>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Dynamic movie search and actor search</li>
              <li>
                Movie details with poster, description, rating, and cast list
              </li>
              <li>Actor biography, personal details, and filmography</li>
              <li>API integration using Axios for real-time data</li>
              <li>Responsive card-based UI for movies and actors</li>
              <li>Fast rendering with React hooks and optimized API calls</li>
            </ul>
          </p>
          🔗{" "}
          <a
            href="https://movie-cast-frontend.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Live Project
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/subbumoni/movie-cast.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>

      {/* Call to Action */}
      {/* <div className="flex justify-center mt-8">
        <button
          onClick={() =>
            window.open("https://portfolio2-frontend1.onrender.com/", "_blank")
          }
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-md hover:bg-indigo-700 transition"
        >
          View My Portfolio
        </button>
      </div> */}
    </div>
  );
}
