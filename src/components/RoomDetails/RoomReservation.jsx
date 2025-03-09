import PropTypes from 'prop-types';
import Button from '../Shared/Button/Button';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import BookingModal from '../Modal/BookingModal';
import useAuth from './../../hooks/useAuth';
import useRole from './../../hooks/useRole';
import { TbCoinTakaFilled } from 'react-icons/tb';
const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth();
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: 'selection',
    },
  ]);

  // total days * price
  const totalPrice =
    parseInt(differenceInCalendarDays(new Date(room.to), new Date(room.from))) *
    room?.price;

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold flex items-center">
          <TbCoinTakaFilled />
          {room?.price}
        </div>
        <div className="font-light text-neutral-600">Taka/night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <DateRange
          showDateDisplay={false}
          rangeColors={['#1B1F3B']}
          editableDateInputs={true}
          onChange={item => {
            console.log(item);
            setState([
              {
                startDate: new Date(room.from),
                endDate: new Date(room.to),
                key: 'selection',
              },
            ]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={room?.booked || role === 'admin'}
          label={room?.booked ? 'Booked' : 'Reserve'}
        />
        <BookingModal
          isOpen={isOpen}
          closeModal={closeModal}
          bookingInfo={{
            ...room,
            price: totalPrice,
            guest: {
              name: user?.displayName,
              email: user?.email,
              image: user?.photoURL,
            },
          }}
          refetch={refetch}
        />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div className="flex items-center gap-1 text-2xl">
          <TbCoinTakaFilled width={40} />
          <span className='font-bold'>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default RoomReservation;
