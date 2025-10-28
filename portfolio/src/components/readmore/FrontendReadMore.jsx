import React from "react";

export default function FrontendReadMore() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Frontend Development
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Building responsive, interactive, and user-friendly web interfaces
          with modern technologies.
        </p>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Frontend development is all about creating the visual and
            interactive elements of a website or application that users directly
            engage with. As a frontend developer, I specialize in translating
            design concepts into clean, efficient, and dynamic user interfaces
            using modern technologies like{" "}
            <span className="font-semibold">
              HTML, CSS, JavaScript, and React.js
            </span>
            .
          </p>

          <p className="text-gray-700 leading-relaxed">
            My focus lies in building{" "}
            <span className="font-semibold">responsive layouts</span>
            that adapt seamlessly across devices, ensuring accessibility and
            performance. I also implement best practices such as code
            reusability, modular design, and SEO-friendly markup to deliver
            high-quality digital experiences.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With expertise in frameworks and tools like{" "}
            <span className="font-semibold">
              Tailwind CSS, Bootstrap, Redux, and REST APIs
            </span>
            , I create highly interactive applications that enhance usability.
            My passion is blending creativity with functionality, ensuring every
            project I build not only looks stunning but also provides an
            intuitive user journey.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether it’s developing scalable dashboards, dynamic e-commerce
            platforms, or personal portfolio websites, I approach every project
            with attention to detail and a user-first mindset. I strive to
            deliver products that balance{" "}
            <span className="font-semibold">
              performance, aesthetics, and usability
            </span>
            .
          </p>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Responsive Web Design",
            "React.js & Component Architecture",
            "State Management (Redux / Context API)",
            "Material UI & Bootstrap Styling",
            "REST API Integration",
            "Performance Optimization",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold shadow-lg transition"
          >
            View My Projects
          </a>
        </div> */}
      </div>
    </div>
  );
}
