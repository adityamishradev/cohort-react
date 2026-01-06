const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 px-6 md:px-20 py-16">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Us
        </h1>
        <p className="text-gray-400 text-lg">
          Learn more about our mission and what makes us special.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Who We Are 🍽️
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            RecipeApp is a modern platform where users can create, store,
            and explore delicious recipes. Our goal is to make cooking
            simple, enjoyable, and accessible for everyone.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you are a beginner or a professional chef, our app
            helps you manage recipes efficiently and discover new flavors.
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">
            Why RecipeApp?
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Easy to use interface</li>
            <li>✅ Fast & secure</li>
            <li>✅ Fully responsive design</li>
            <li>✅ Built with React & Tailwind</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default About;
