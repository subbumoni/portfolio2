export default function ReadMore() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        About This Project
      </h1>

      {/* Content */}
      <p className="text-lg leading-relaxed mb-4">
        This section allows you to showcase extended details about your project,
        services, or any specific content you want to highlight. The design is
        clean, professional, and mobile-friendly using Tailwind CSS.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        You can add multiple paragraphs here to explain things in depth.
        Tailwind ensures spacing, typography, and responsiveness work seamlessly
        across devices without extra CSS.
      </p>

      {/* Highlight box */}
      <div className="p-4 bg-gray-100 border-l-4 border-indigo-500 rounded-lg mb-6">
        <p className="text-gray-700">
          ✨ Use this area for{" "}
          <span className="font-semibold">important notes</span>, tips, or
          highlights you want your readers to focus on.
        </p>
      </div>

      {/* Call-to-action */}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium shadow-md hover:bg-indigo-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
