const WhyChooseUs = () => {
  return (
    <section className="bg-gray-200 py-12 shadow-xl rounded-xl max-w-7xl mx-auto px-6 my-8 md:my-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center mb-4 md:mb-8">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-indigo-100 text-indigo-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            🛡️
          </div>
          <h3 className="font-semibold text-lg mb-2">Secure Booking</h3>
          <p className="text-gray-600">
            All transactions are encrypted and your data is safe with us.
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-teal-100 text-teal-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            🏡
          </div>
          <h3 className="font-semibold text-lg mb-2">Verified Listings</h3>
          <p className="text-gray-600">
            Only genuine, host-verified homes are listed on our platform.
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-orange-100 text-orange-600 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
            💬
          </div>
          <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            We’re always here to help — day or night, rain or shine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
