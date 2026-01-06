const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">

      {/* Navbar */}
      {/* <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-orange-500">RecipeApp</h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-600">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Recipes</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-16 py-16 gap-12">
        
        {/* Text */}
        <div className="flex-1 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover & Share <span className="text-orange-500">Recipes</span>
          </h2>
          <p className="text-white mb-6">
            Create, manage and explore delicious recipes with ease.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 pb-16">
        <h3 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">🍕 Easy Recipes</h4>
            <p className="text-gray-600">
              Simple steps, perfect results every time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">⏱ Quick Cooking</h4>
            <p className="text-gray-600">
              Save time with fast and tasty meals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center hover:scale-105 transition">
            <h4 className="text-xl font-semibold mb-2">❤️ Healthy Food</h4>
            <p className="text-gray-600">
              Balanced recipes for a healthy life.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © 2026 RecipeApp. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
