import { Link, useSearchParams } from 'react-router-dom';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import Room from '../../components/Home/Room';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import { useState, useEffect } from 'react';

const Featured = () => {
  const axiosCommon = useAxiosCommon();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching category from the search params
  const [params] = useSearchParams();
  const searchParams = params.get('category');

  // Fetch data using useEffect
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosCommon.get(
          `/rooms?category=${searchParams}`
        );
        const shuffledRooms = data.sort(() => Math.random() - 0.5).slice(0, 6);
        setRooms(shuffledRooms);
      } catch (err) {
        setError('Error fetching rooms');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, [searchParams, axiosCommon]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center">
          Featured Rooms
        </h2>
        <p className="textarea-md md:text-lg text-center max-w-4xl mx-auto text-gray-700">
          Discover our featured rooms: where comfort meets style in every
          detail. Experience luxury and relaxation like never before with Stay
          Vista curated selection of premium accommodations.
        </p>
      </div>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {rooms && rooms.length > 0 ? (
          rooms.map((room, index) => (
            <Room
              key={room._id}
              room={room}
              aosEffect={index % 2 === 0 ? 'fade-up' : 'fade-down'}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No rooms available</p>
        )}
      </div>
      <div className="flex justify-center items-center mt-6 mb-10">
        <Link to="/category">
          <button className="bg-[#1B1F3B] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#1B1F6B] focus:outline-none focus:ring-2 focus:ring-[#1B1F3B] focus:ring-opacity-50 transition duration-300 ease-in-out">
            View All Rooms
          </button>
        </Link>
      </div>
    </>
  );
};

export default Featured;
