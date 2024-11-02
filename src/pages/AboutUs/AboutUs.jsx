function AboutUs() {
  return (
    <div className="bg-white">
      <header className="bg-rose-500 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide comfortable, free accommodations across
          various countries for travelers seeking short stays.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-gray-700">Destinations</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-gray-700">Years of Service</p>
          </div>
        </div>
      </section>

      <section className="bg-rose-500 text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Creating a seamless platform where anyone can book free rooms and
          experience the comfort of home while traveling.
        </p>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Cozy Rooms</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Flexible Stays</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Global Access</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Easy Booking</h3>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">
          State-Of-The-Art Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">User-Friendly Interface</h3>
            <p className="text-gray-700 mt-2">
              Navigate and book with ease through our optimized platform.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Secure Reservations</h3>
            <p className="text-gray-700 mt-2">
              Your bookings are safe and protected with us.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Global Partnerships</h3>
            <p className="text-gray-700 mt-2">
              Access rooms across multiple continents through our partners.
            </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-700 mt-2">
              Assistance whenever you need it, day or night.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Committed To Your Comfort</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Book Your Stay</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Flexible Options</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Home-Like Feel</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <h3 className="text-xl font-bold">Plan Your Trip</h3>
          </div>
        </div>
      </section>

      <section className="bg-rose-500 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Traveler Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-rose-600 hover:bg-rose-500 transition-colors">
            <p>
              An amazing experience! The booking was easy, and the room was
              perfect for my short stay.
            </p>
            <h3 className="mt-4 font-bold">- Traveler A</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-600 hover:bg-rose-500 transition-colors">
            <p>
              I loved the simplicity and the fact that I could stay for free.
              Highly recommend!
            </p>
            <h3 className="mt-4 font-bold">- Traveler B</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-600 hover:bg-rose-500 transition-colors">
            <p>
              Great service and the process was straightforward. The support
              team was very helpful.
            </p>
            <h3 className="mt-4 font-bold">- Traveler C</h3>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How do I book a free room?</h3>
            <p className="mt-2 text-gray-700">
              Simply browse our listings, choose your desired location and
              dates, and complete the reservation.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">What amenities are included?</h3>
            <p className="mt-2 text-gray-700">
              Amenities vary by room but typically include basic essentials like
              bedding, Wi-Fi, and toiletries.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Are the stays really free?</h3>
            <p className="mt-2 text-gray-700">
              Yes! Our platform connects you with available rooms that do not
              require a rental fee for short stays.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-rose-500 text-white text-center py-8">
        <p>
          &copy; Copyright Stay Vista. All rights reserved. Created by Md Asadul
          Islam
        </p>
      </footer>
    </div>
  );
}

export default AboutUs;
