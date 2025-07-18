import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Featured from '../Featured/Featured';
import SupportService from '../../components/SupportService/SupportService';
import ReviewSection from './../../components/ReviewSection/ReviewSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    Swal.fire({
      imageUrl:
        'https://i.postimg.cc/WpChNVV6/pngtree-up-to-20-off-price-tag-design-png-image-6429660.png',
      imageHeight: 300,
      imageWidth: 400,
      imageAlt: 'A Special Offer Image',
    });
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Hero />
      <Featured />
      <ReviewSection/>
      <SupportService />
      <HowItWorks />
      <WhyChooseUs />
      {/* <KnowDevelopers/> */}
    </div>
  );
};

export default Home;
