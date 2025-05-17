import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero/Hero';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Featured from '../Featured/Featured';
import SupportService from '../../components/SupportService/SupportService';
import ReviewSection from './../../components/ReviewSection/ReviewSection';
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
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Hero />
      <Featured />
      <ReviewSection/>
      <SupportService />
    </div>
  );
};

export default Home;
