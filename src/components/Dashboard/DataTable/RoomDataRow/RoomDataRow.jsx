import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DeleteModal from '../../../Modal/DeleteModal';
import UpdateRoomModal from '../../../Modal/UpdateRoomModal';
import { useState } from 'react';

const RoomDataRow = ({
  room,
  closeModal,
  isOpen,
  setIsOpen,
  handleDelete,
  refetch,
}) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={room?.image[0]}
                className="mx-auto object-cover rounded h-14 w-20 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{room?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{room?.location}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${room?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(room?.from), 'P')}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(room?.to), 'P')}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleDelete={handleDelete}
          id={room?._id}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsUpdateOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </button>
        {/* Update Modal */}
        <UpdateRoomModal
          room={room}
          isOpen={isUpdateOpen}
          refetch={refetch}
          setIsEditModalOpen={setIsUpdateOpen}
        />
      </td>
    </tr>
  );
};

RoomDataRow.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func,
};

export default RoomDataRow;
