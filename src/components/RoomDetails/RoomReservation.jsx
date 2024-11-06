import PropTypes from 'prop-types';
import Button from '../Shared/Button/Button';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';

const RoomReservation = ({ room }) => {
  const startDate = room?.from ? new Date(room.from) : new Date();
  const endDate = room?.to ? new Date(room.to) : new Date();

  const [state, setState] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    },
  ]);
  const totalPrice =
    parseInt(differenceInCalendarDays(new Date(room.to), new Date(room.from))) *
    room?.price;
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
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
                startDate: startDate,
                endDate: endDate,
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
        <Button label={'Reserve'} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default RoomReservation;
