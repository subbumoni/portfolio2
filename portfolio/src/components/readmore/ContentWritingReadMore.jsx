import React from "react";

export default function ContentWritingReadMore() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Content Writing
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Crafting compelling and impactful content to strengthen brand identity
          and engage audiences.
        </p>

        {/* Content Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Content writing is not just about words — it’s about creating{" "}
            <span className="font-semibold">meaningful experiences</span> that
            connect with your audience and reflect your brand’s identity. I
            specialize in writing engaging, informative, and persuasive content
            tailored to your business needs, whether it’s websites, blogs, or
            marketing campaigns.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I focus on crafting content that is{" "}
            <span className="font-semibold">SEO-friendly</span> and designed to
            improve your online visibility. From keyword-rich blog posts to
            compelling landing page copy, I ensure that your content ranks well
            on search engines while maintaining a natural and authentic tone.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My writing process combines research, creativity, and strategy. I
            analyze your brand voice, target audience, and industry trends to
            deliver content that not only informs but also inspires readers to
            take action. Whether it’s building trust, boosting engagement, or
            driving sales, I create words that work.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Over time, I’ve worked on{" "}
            <span className="font-semibold">
              business websites, product descriptions, case studies,
              newsletters, and social media content
            </span>
            . Each piece is designed to reflect professionalism and add value to
            your business goals.
          </p>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "SEO-Friendly Blog Writing",
            "Website Copy & Landing Pages",
            "Product Descriptions",
            "Social Media Content",
            "Business Articles & Case Studies",
            "Email Newsletters & Campaigns",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        {/* <div className="text-center mt-16">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-semibold shadow-lg transition"
          >
            View My Writing Samples
          </a>
        </div> */}
      </div>
    </div>
  );
}
