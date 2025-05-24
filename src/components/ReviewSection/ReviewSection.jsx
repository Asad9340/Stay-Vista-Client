import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import useAxiosCommon from '../../hooks/useAxiosCommon';
function ReviewSection() {
  const axiosCommon = useAxiosCommon();

  const { data: allReviews = [], isLoading } = useQuery({
    queryKey: ['allReviews'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/review');
      return data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto my-10 p-8 md:p-12 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center">
          What Our Guests Say
        </h2>
        <p className="text-gray-500 text-lg">
          Real reviews from people who’ve stayed with us
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="my-10 max-w-7xl mx-auto px-4"
      >
        {isLoading ? (
          <div className="text-center py-10">Loading reviews...</div>
        ) : allReviews.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No reviews available.
          </div>
        ) : (
          allReviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border shadow-md rounded-lg p-6 h-full flex flex-col justify-between">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={
                      review.user?.photo ||
                      'https://i.ibb.co/yqzQ9TQ/default-user.png'
                    }
                    alt={review.user?.name || 'Anonymous'}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">
                      {review.user?.name || 'Anonymous'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-yellow-500 mb-2">
                  Rating: {review.rating}{' '}
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">{review.review}</p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

export default ReviewSection;
