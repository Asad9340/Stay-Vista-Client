import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 my-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1B1F3B]">
        Learn More About Our Services
      </h1>

      <div className="mt-8">
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            Affordable Pricing
          </h2>
          <p className="text-lg text-gray-700">
            We offer a variety of pricing options to suit your budget. Whether
            you’re looking for an economy room or a luxury suite, we have
            something for everyone. Our goal is to make your stay comfortable
            and affordable, without sacrificing quality. With our transparent
            pricing model, you’ll know exactly what you’re paying for and won’t
            face any hidden fees.
          </p>
          <div className="flex justify-center items-center">
            <img
              src="/assets/Affordable Pricing.jpg"
              alt="Affordable Pricing"
              className="rounded-lg shadow-lg w-60"
            />
          </div>
        </section>

        <section className="space-y-8 mt-16">
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            Top Quality Services
          </h2>
          <p className="text-lg text-gray-700">
            Our rooms are equipped with top-quality amenities and maintained to
            the highest standards. From plush bedding and cozy décor to modern
            technology such as smart TVs and free Wi-Fi, we ensure every detail
            is carefully considered. We take pride in offering services that
            exceed expectations, whether it’s room cleanliness, premium
            toiletries, or our dedicated staff who are always ready to assist
            you.
          </p>
          <div className="flex justify-center">
            <img
              src="/assets/top quality.png"
              alt="Top Quality"
              className="rounded-lg shadow-lg w-60"
            />
          </div>
        </section>

        <section className="space-y-8 mt-16">
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            24/7 Support & Assistance
          </h2>
          <p className="text-lg text-gray-700">
            Our dedicated support team is available around the clock. Whether
            you need help booking a room or assistance during your stay, we’re
            always here to help. From answering your questions to offering local
            travel advice, we ensure that your experience is seamless. We also
            offer emergency assistance for any unexpected situations that may
            arise during your stay, ensuring you have peace of mind at all
            times.
          </p>
          <div className="flex justify-center">
            <img
              src="/assets/24 hour sercice.jpg"
              alt="Support Assistance"
              className="rounded-lg shadow-lg w-60"
            />
          </div>
        </section>

        <section className="space-y-8 mt-16">
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            Modern Amenities for Your Comfort
          </h2>
          <p className="text-lg text-gray-700">
            We believe in offering a blend of comfort and convenience, which is
            why our rooms are designed with modern amenities. Enjoy spacious
            rooms, air conditioning, mini-fridges, in-room safes, and much more.
            Whether you’re here for a business trip or a relaxing getaway, we
            provide everything you need to make your stay enjoyable and
            stress-free.
          </p>
        </section>

        <section className="space-y-8 mt-16">
          <h2 className="text-2xl font-semibold text-[#1B1F3B]">
            Local Experiences & Attractions
          </h2>
          <p className="text-lg text-gray-700">
            In addition to our excellent facilities, we offer exclusive access
            to local attractions and experiences. Whether you are interested in
            sightseeing, adventure, or relaxation, we can help you plan the
            perfect itinerary. From guided city tours to adventure sports and
            relaxing spa treatments, we ensure that your stay is filled with
            memorable moments.
          </p>
        </section>

        <div className="text-center mt-16">
          <Link
            to="/"
            className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] transition duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
