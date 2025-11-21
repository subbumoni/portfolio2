import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    path: "/webdesign-read-more", // 👈 points to WebDesignReadMore
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    path: "/frontend-read-more",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    path: "/backend-read-more",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    path: "/fullstack-read-more",
  },
  // {
  //   id: 5,
  //   title: "Content Writing",
  //   description: "Writing content for your business and companies.",
  //   path: "/contentwriting-read-more",
  // },
  // {
  //   id: 6,
  //   title: "Digital Marketing",
  //   description: "Promote your business with our digital marketing team.",
  //   path: "/digitalmarketing-read-more",
  // },
];

const Service = () => {
  return (
    <div className="bg-gray-800 text-white py-10" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>

              {/* ✅ Read More Button */}
              <Link
                to={service.path}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
