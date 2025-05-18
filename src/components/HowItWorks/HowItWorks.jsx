const HowItWorks = () => {
  return (
    <section className="bg-white py-12 shadow-lg rounded-xl max-w-7xl mx-auto px-6 my-8 md:my-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center mb-4 md:mb-8">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            1
          </div>
          <h3 className="font-semibold text-lg mb-2">Search Homes</h3>
          <p className="text-gray-600">
            Browse thousands of verified listings by location, amenities, or
            price.
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-green-100 text-green-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            2
          </div>
          <h3 className="font-semibold text-lg mb-2">Book Instantly</h3>
          <p className="text-gray-600">
            Pick your dates, confirm your stay, and secure your spot with easy
            payment.
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-yellow-100 text-yellow-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            3
          </div>
          <h3 className="font-semibold text-lg mb-2">Enjoy Your Stay</h3>
          <p className="text-gray-600">
            Check in, relax, and enjoy your chosen accommodation like a local.
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-pink-100 text-pink-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            4
          </div>
          <h3 className="font-semibold text-lg mb-2">Leave a Review</h3>
          <p className="text-gray-600">
            Help others by sharing your experience and rating your stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
