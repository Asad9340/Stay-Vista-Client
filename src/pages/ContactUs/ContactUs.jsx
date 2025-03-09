function ContactUs() {
  return (
    <div className="bg-white">
      <header className="bg-[#1B1F3B] text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">Contact Us</h1>
      </header>
      <section className="text-center py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following
          methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <a href="tel:+8801710101984">
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="text-gray-700 mt-2">+8801710101984</p>
              <p className="text-gray-700 mt-2">+8801790779953</p>
            </a>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <a href="mailto:asadulimran1999@gmail.com">
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="text-gray-700 mt-2">asadulimran1999@gmail.com</p>
              <p className="text-gray-700 mt-2">nmshakib5@gmail.com</p>
            </a>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-rose-100 hover:bg-rose-200 transition-colors">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/AYAAN+FASHION+CLOTHING/@24.2330591,89.8959461,19.35z/data=!4m6!3m5!1s0x39fdfdfc7abfa179:0xc9f14f7302bfa40f!8m2!3d24.2330289!4d89.8964978!16s%2Fg%2F11k78d5l24?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
            >
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="text-gray-700 mt-2">
                Arif Nagar , Los Santash, Tangail
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1B1F3B] text-white py-3 rounded-lg shadow-lg hover:bg-rose-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
      <section className="text-center py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">
              What are your operating hours?
            </h3>
            <p className="mt-2 text-gray-700">
              We operate from 9 AM to 5 PM, Monday to Friday.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              How can I book an appointment?
            </h3>
            <p className="mt-2 text-gray-700">
              You can book an appointment through our website or by calling our
              office.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
            <h3 className="text-xl font-bold">
              Do you offer telemedicine services?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes, we offer telemedicine consultations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
