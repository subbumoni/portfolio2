import React from "react";

export default function FullStackReadMore() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Full-Stack Development
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Combining frontend creativity with backend robustness to build
          complete, scalable applications.
        </p>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            As a <span className="font-semibold">Full-Stack Developer</span>, I
            bring together the best of both worlds — crafting engaging and
            responsive user interfaces while also building secure and efficient
            server-side applications. My expertise covers the complete
            development lifecycle, from{" "}
            <span className="font-semibold">user experience design</span> to{" "}
            <span className="font-semibold">
              database management and deployment
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed">
            On the frontend, I specialize in{" "}
            <span className="font-semibold">
              React.js, Mateial UI, and JavaScript
            </span>{" "}
            to deliver modern, dynamic, and user-friendly interfaces. On the
            backend, I work extensively with{" "}
            <span className="font-semibold">
              Node.js, Express.js, and MongoDB
            </span>{" "}
            to design RESTful APIs, handle authentication, and manage
            large-scale data efficiently.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My approach emphasizes{" "}
            <span className="font-semibold">
              collaboration between frontend and backend
            </span>
            , ensuring seamless integration, optimized performance, and
            scalability. Whether it’s an e-commerce platform, a real-time chat
            app, or a portfolio website, I ensure the application is{" "}
            <span className="font-semibold">
              reliable, secure, and user-focused
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed">
            Beyond development, I also handle deployment and cloud integration,
            working with tools like{" "}
            <span className="font-semibold">
              Docker, CI/CD pipelines, and cloud hosting platforms
            </span>{" "}
            to make sure applications are production-ready and future-proof.
          </p>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Frontend Development (React.js, Material UI)",
            "Backend Development (Node.js, Express.js)",
            "Database Management (MongoDB, Mongoose)",
            "Authentication & Authorization (JWT / OAuth)",
            "REST API Development",
            "Deployment & Cloud Integration",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold shadow-lg transition"
          >
            Explore My Full-Stack Projects
          </a>
        </div> */}
      </div>
    </div>
  );
}
