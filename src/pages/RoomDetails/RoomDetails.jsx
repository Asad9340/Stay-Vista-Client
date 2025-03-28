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

const RoomDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: room = {}, isLoading,refetch } = useQuery({
    queryKey: ['room', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/room/${id}`);
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
            {/* <div className="relative w-full md:h-[90vh] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                className="object-cover w-full h-full"
                src={room?.image || '/default-room.jpg'}
                alt="Room"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 rounded-lg px-4 py-2 shadow-md flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-sm font-semibold">
                  {room?.location || 'Beautiful Destination'}
                </span>
              </div>
            </div> */}
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
          </div>
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
