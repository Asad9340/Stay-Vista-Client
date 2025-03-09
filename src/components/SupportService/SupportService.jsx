import { FaHandHoldingDollar } from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai';
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function SupportService() {
  const [text] = useTypewriter({
    words: ['Price', 'Reasonable'],
    loop: 0,
  });
  const [text2] = useTypewriter({
    words: ['Quality', 'Comfort'],
    loop: 0,
  });
  const [text3] = useTypewriter({
    words: ['Support', 'Assistance'],
    loop: 0,
  });

  return (
    <div className="my-8 md:my-12 lg:my-16 font-fontPrimary max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center">
        Support & Service
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-4 md:mt-6">
        <div className="border p-4 md:p-5 rounded-md space-y-2">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#1B1F3B]">
              <FaHandHoldingDollar className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            Affordable <span>{text}</span>
          </h2>
          <p className="text-center">
            Affordable pricing ensures that everyone can enjoy a stay at our
            beautiful motels without breaking the bank. Get great deals without
            compromising on comfort!
          </p>
          <div className="text-center">
            <Link to="/learn-more">
              <button className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] focus:outline-none focus:ring-2 focus:ring-[#1B1F3B] focus:ring-opacity-50 transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="border p-4 md:p-5 rounded-md space-y-2 flex flex-col justify-between items-center">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#1B1F3B]">
              <AiFillLike className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            Top <span>{text2}</span>
          </h2>
          <p className="text-center">
            Quality is our top priority. Each room is meticulously maintained to
            provide you with the best experience possible, making your stay
            truly memorable.
          </p>
          <div className="text-center">
            <Link to="/learn-more">
              <button className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] focus:outline-none focus:ring-2 focus:ring-[#1B1F3B] focus:ring-opacity-50 transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="border p-4 md:p-5 rounded-md space-y-2">
          <div className="text-center">
            <div className="inline-block p-4 rounded-lg bg-[#1B1F3B]">
              <BiSupport className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-center">
            24/7 <span>{text3}</span>
          </h2>
          <p className="text-center">
            Our 24/7 customer support is always available to assist you. Whether
            you need help booking or have any inquiries during your stay, we are
            here to help anytime.
          </p>
          <div className="text-center">
            <Link to="/learn-more">
              <button className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] focus:outline-none focus:ring-2 focus:ring-[#1B1F3B] focus:ring-opacity-50 transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportService;
