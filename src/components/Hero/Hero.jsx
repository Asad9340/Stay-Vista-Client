import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/src/assets/carousel/Misty Hills Tea Resort.webp',
    title: 'Welcome to Stay Vista',
    description:
      'Your gateway to effortless motel booking! Whether it’s a quick stopover or a weekend retreat, Stay Vista helps you find the perfect stay with ease.',
    buttonText: 'Explore Now',
    buttonLink: '/category',
    bgColor: 'bg-[#1B1F3B] hover:bg-[#1B1F6B]',
  },
  {
    image: '/src/assets/carousel/Riverside Serenity Lodge.jpg',
    title: 'Find the Best Motels',
    description:
      'Discover budget-friendly motels, cozy roadside inns, and scenic retreats. Stay Vista ensures comfort and convenience at every stop.',
    buttonText: 'Find Motels',
    buttonLink: '/category',
    bgColor: 'bg-[#1B1F3B] hover:bg-[#1B1F6B]',
  },
  {
    image: '/src/assets/carousel/Sajek Valley Retreat.jpg',
    title: 'Book in Minutes!',
    description:
      'No hassle, no hidden fees—just quick and easy motel reservations with Stay Vista. Get exclusive deals and instant confirmation!',
    buttonText: 'Start Booking',
    buttonLink: '/category',
    bgColor: 'bg-[#1B1F3B] hover:bg-[#1B1F6B]',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-100px)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt={slide.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end mb-10 text-center text-white px-4 max-w-xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6">{slide.description}</p>
              <Link
                to={slide.buttonLink}
                className={`${slide.bgColor} text-white px-6 py-2 rounded-lg text-xl font-medium transition duration-300`}
              >
                {slide.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
