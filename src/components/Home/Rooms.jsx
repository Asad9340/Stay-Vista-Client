/* eslint-disable no-unused-vars */
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';
import LoadingSpinner from '../Shared/LoadingSpinner';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Room from './Room';
import { useState } from 'react';

const Rooms = () => {
  const axiosCommon = useAxiosCommon();
  let [params, setParams] = useSearchParams();
  let searchParams = params.get('category');
  const [sortOrder, setSortOrder] = useState('asc');
  const [availability, setAvailability] = useState('all');

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ['rooms', searchParams],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${searchParams}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  // Sort rooms by price
  const sortRooms = (rooms, order) => {
    return rooms.slice().sort((a, b) => {
      return order === 'asc'
        ? parseFloat(a.price) - parseFloat(b.price)
        : parseFloat(b.price) - parseFloat(a.price);
    });
  };

  // Filter rooms based on availability
  const filterRooms = (rooms, availability) => {
    if (availability === 'available') return rooms.filter(room => !room.booked);
    if (availability === 'booked') return rooms.filter(room => room.booked);
    return rooms;
  };

  const filteredRooms = filterRooms(rooms, availability);
  const sortedRooms = sortRooms(filteredRooms, sortOrder);

  return (
    <Container>
      {/* Filters Section */}
      <div className="flex justify-between flex-row-reverse items-center my-4 px-8 gap-4">
        {/* Sort by Price */}
        <div>
          <label htmlFor="sort" className="mr-2 text-gray-600">
            Sort by Price:
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Filter by Availability */}
        <div className='px-4'>
          <label htmlFor="availability" className="mr-2 text-gray-600">
            Availability:
          </label>
          <select
            id="availability"
            value={availability}
            onChange={e => setAvailability(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="booked">Booked</option>
          </select>
        </div>
      </div>

      {/* Display Rooms */}
      {sortedRooms && sortedRooms.length > 0 ? (
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sortedRooms.map(room => (
            <Room key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
