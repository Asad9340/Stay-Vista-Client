import { Link } from 'react-router-dom';
import Button from '../Shared/Button/Button';
import { AiFillDollarCircle } from 'react-icons/ai';

const Room = ({ room }) => {
  return (
    <div className="flex flex-col justify-between gap-2 md:gap-3  shadow-lg rounded-md px-3 py-3 font-fontPrimary">
      <div className="hover:scale-105 transition">
        <div className="relative">
          <img
            src={room?.image}
            alt="Room"
            className="h-[300px] md:h-[300px] w-full md:w-[400px] rounded-t-md"
          />
          <p className="absolute top-8 px-3 py-1 left-0 rounded-full -rotate-45 bg-gray-700 text-white font-fontPrimary">
            {room?.booked ? 'Booked' : 'Available'}
          </p>
        </div>
        <p className="bg-gray-800 text-white text-center rounded-b-md">
          {room?.booked ? 'Booked' : 'Available'}
        </p>
      </div>
      <div>
        <div className="p-3 flex flex-col  space-y-2">
          <h2 className="text-lg font-semibold">
            Category Name: {room.category}
          </h2>{' '}
          <hr className="border border-black" />
          <p>
            <span className="font-semibold">Product Name:</span> {room?.title}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{' '}
            {room.description.length > 55
              ? room.description.substring(0, 55) + '...'
              : room.description}
          </p>
          <p className="flex gap-1 items-center text-2xl font-bold">
            <span className="font-semibold text-lg"> Price:</span>
            <AiFillDollarCircle /> {room?.price}
            <span className="text-lg font-semibold ml-1"> / night</span>
          </p>
          <div className="w-full">
            <Link className="w-full" to={`/room/${room?._id}`}>
              <Button label="View Details" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
