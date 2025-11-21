import React from "react";

const Certificate = () => {
  return (
    <div className="w-full bg-gray-800 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Certificates
      </h2>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">
          GUVI - MERN Full Stack Developer Certificate
        </h3>

        {/* Google Drive Certificate Link */}
        <p className="text-gray-700 mb-4">
          Click the button below to view my verified certificate:
        </p>

        <a
          href="https://drive.google.com/file/d/1o1Jfaul8ak_fFlfNhpS3sjffWKSZjZ4_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default Certificate;
