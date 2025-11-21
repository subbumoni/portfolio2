import React from "react";

export default function DigitalMarketingReadMore() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Digital Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Promoting businesses with smart strategies to boost brand presence and
          drive growth.
        </p>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Digital marketing is at the heart of modern business success. I
            specialize in creating{" "}
            <span className="font-semibold">data-driven strategies</span> that
            help businesses grow their online presence, reach their target
            audience, and achieve measurable results.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From{" "}
            <span className="font-semibold">
              SEO (Search Engine Optimization)
            </span>
            to{" "}
            <span className="font-semibold">
              social media marketing, paid advertising, and email campaigns
            </span>
            , I use a blend of creative and analytical approaches to maximize
            visibility and conversions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My work goes beyond simple promotions — I focus on building{" "}
            <span className="font-semibold">
              brand trust and long-term customer engagement
            </span>
            . Every campaign is tailored to match your business goals, industry
            trends, and audience preferences.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With experience in tools like{" "}
            <span className="font-semibold">
              Google Analytics, Meta Ads, Google Ads, and SEO tools
            </span>
            , I ensure that marketing efforts are trackable, optimized, and
            result-oriented. Whether it's organic growth or paid strategies, my
            aim is to deliver{" "}
            <span className="font-semibold">high ROI campaigns</span>.
          </p>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "SEO & Keyword Optimization",
            "Social Media Marketing (Facebook, Instagram, LinkedIn)",
            "Google Ads & Meta Ads Campaigns",
            "Email Marketing & Automation",
            "Content Marketing Strategies",
            "Analytics & Performance Tracking",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold shadow-lg transition"
          >
            Explore My Marketing Projects
          </a>
        </div> */}
      </div>
    </div>
  );
}
