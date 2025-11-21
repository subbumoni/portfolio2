import React from "react";

export default function BackendReadMore() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Backend Development
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Developing robust server-side logic, scalable APIs, and efficient
          database management.
        </p>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Backend development focuses on powering web applications behind the
            scenes by handling business logic, databases, and server-side
            processes. With expertise in{" "}
            <span className="font-semibold">
              Node.js, Express.js, and MongoDB
            </span>
            , I build reliable and scalable server architectures that seamlessly
            connect the frontend with databases and APIs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My backend development approach ensures{" "}
            <span className="font-semibold">
              security, performance, and scalability
            </span>
            . I design RESTful APIs that allow smooth communication between
            client and server, while implementing best practices for error
            handling, data validation, and authentication (JWT, OAuth).
          </p>

          <p className="text-gray-700 leading-relaxed">
            I specialize in working with{" "}
            <span className="font-semibold">MongoDB and Mongoose ORM</span> for
            efficient database modeling and querying. Whether it's building
            e-commerce systems, chat applications, or dashboards, I ensure data
            integrity, optimized queries, and a robust schema design that grows
            with business needs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Beyond coding, I focus on deployment and DevOps practices. Using
            <span className="font-semibold">
              {" "}
              cloud platforms, Docker, and CI/CD pipelines
            </span>
            , I streamline application deployment for seamless scaling in
            production environments.
          </p>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Node.js & Express.js APIs",
            "MongoDB & Mongoose Database Modeling",
            "Authentication & Authorization (JWT / OAuth)",
            "Error Handling & Middleware",
            "REST API Development",
            "Scalable Architecture & Deployment",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold shadow-lg transition"
          >
            View My Backend Projects
          </a>
        </div> */}
      </div>
    </div>
  );
}
