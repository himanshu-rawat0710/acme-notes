const HeroSection2 = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-background-100 to-background-200">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Take Beautiful Notes. Effortlessly.
          </h1>
          <p className="text-xl text-gray-200 mb-10">
            Organize your thoughts, collaborate seamlessly, and access notes
            from anywhere.
          </p>
          <button className="bg-white hover:bg-opacity-75 text-sky-500 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
            Get Started for Free
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection2;
  