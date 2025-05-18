import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet-async';
import RoomReservation from '../../components/RoomDetails/RoomReservation';
import Heading from '../../components/Shared/Heading';
import { useParams } from 'react-router-dom';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from './../../components/Shared/LoadingSpinner';
import {
  FaUserFriends,
  FaBed,
  FaBath,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaCoffee,
  FaUtensils,
  FaParking,
  FaSwimmingPool,
  FaConciergeBell,
} from 'react-icons/fa';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import { useState } from 'react';

const RoomDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const [showMap, setShowMap] = useState(true);

  const {
    data: room = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['room', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/room/${id}`);
      return data;
    },
  });

  const { data: reviews = [], isLoading: reviewsLoading } = useQuery({
    queryKey: ['reviews', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/review/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <Helmet>
        <title>{room?.title || 'Room Details'}</title>
      </Helmet>
      {room && (
        <div className="max-w-7xl mx-auto p-2 md:p-4">
          {/* Header Section */}
          <div className="flex flex-col gap-8">
            {/* Room Title and Location */}
            <div>
              <Heading
                title={room?.title || 'Luxury Suite'}
                subtitle={room?.location || 'Beautiful Destination'}
              />
            </div>

            <ImageCarousel imgCollection={room.image} title={room.title} />
          </div>

          {/* Room Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-8 md:gap-12 mt-10">
            <div className="col-span-5 flex flex-col gap-6">
              {/* Host Details */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full border w-12 h-12"
                  src={room?.host?.image || '/default-host.jpg'}
                  alt="Host Avatar"
                />
                <div className="text-lg font-semibold">
                  Hosted by {room?.host?.name || 'Anonymous Host'}
                </div>
              </div>

              {/* Room Details */}
              <div className="flex items-center gap-6 text-neutral-600 mt-4">
                <div className="flex items-center gap-2">
                  <FaUserFriends className="text-lg text-blue-500" />
                  <span>{room?.guests || 2} guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-lg text-green-500" />
                  <span>{room?.bedrooms || 1} bedroom</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-lg text-purple-500" />
                  <span>{room?.bathrooms || 1} bathroom</span>
                </div>
              </div>

              <hr className="my-6" />

              {/* About the Room Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">About the Room</h2>
                <p className="text-lg font-light text-neutral-600 leading-relaxed">
                  {room?.description ||
                    'This luxurious room offers a relaxing atmosphere with modern amenities to ensure a comfortable stay. Whether you are here for business or leisure, our spacious room provides everything you need.'}
                </p>
              </div>

              <hr className="my-6" />

              {/* Features & Amenities Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Features & Amenities
                </h2>
                <div className="flex flex-wrap gap-4 text-neutral-700">
                  <div className="flex items-center gap-2">
                    <FaWifi className="text-yellow-600" /> Free Wi-Fi
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTv className="text-red-600" /> Flat Screen TV
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSnowflake className="text-blue-600" /> Air Conditioning
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCoffee className="text-brown-500" /> Complimentary Coffee
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUtensils className="text-green-700" /> Room Service
                  </div>
                  <div className="flex items-center gap-2">
                    <FaParking className="text-gray-600" /> Free Parking
                  </div>
                  <div className="flex items-center gap-2">
                    <FaSwimmingPool className="text-blue-500" /> Swimming Pool
                  </div>
                  <div className="flex items-center gap-2">
                    <FaConciergeBell className="text-purple-600" /> 24/7
                    Concierge
                  </div>
                </div>
              </div>
            </div>

            {/* Room Reservation Section */}
            <div className="md:col-span-3 order-first md:order-last mb-10">
              <div className="bg-white p-2 md:p-4 rounded-lg shadow-md">
                <RoomReservation room={room} refetch={refetch} />
              </div>
            </div>
          </div>

          {/* Location & Nearby Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Location & Nearby</h2>
            <p className="text-lg text-neutral-600">
              Located in the heart of the city, this property is close to
              popular attractions, shopping centers, and restaurants. Perfect
              for exploring the local culture and nightlife.
            </p>

            {/* Map Toggle Button */}
            <button
              onClick={() => setShowMap(prev => !prev)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              {showMap ? 'Hide Map' : 'Show Map'}
            </button>

            {/* Map Display */}
            {showMap && room?.location && (
              <div className="mt-6 w-full h-[400px]">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="rounded-lg border shadow"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    room.location
                  )}&output=embed`}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

      {reviewsLoading ? (
        <LoadingSpinner />
      ) : reviews.length === 0 ? (
        <div className="max-w-7xl mx-auto py-10 text-center text-gray-500">
          <p className="text-lg font-medium">No reviews yet.</p>
          <p className="text-sm mt-2">
            Be the first to leave a review for this room.
          </p>
        </div>
      ) : (
        <div className="space-y-4 grid grid-cols-3 max-w-7xl mx-auto my-4 md:my-8 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 border-2 rounded shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={review.user?.photo}
                  alt={review.user?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-2xl">{review.user?.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-sm text-yellow-500">
                Rating: {review.rating} ⭐
              </p>
              <p className="mt-1">Description: {review.review}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
