function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mb-8">
          We are committed to delivering the best experience for our customers.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Home;
