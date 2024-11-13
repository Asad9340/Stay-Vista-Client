import { BsFingerprint } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import MenuItem from './/MenuItem';
import useRole from '../../../../hooks/useRole';
import HostModal from '../../../Modal/HostRequestModal';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const GuestMenu = () => {
  const [role] = useRole();
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleBecomeHost = async () => {
    let currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'Requested',
    };
    const { data } = await axiosSecure.put('/user', currentUser);
    if (data.modifiedCount > 0) {
      toast.success('Please wait for admin approval');
    } else {
      toast.success('You have already sent the request...');
    }
    closeModal();
  };
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role === 'guest' && (
        <div>
          <div
            onClick={() => setModalOpen(true)}
            className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
          >
            <GrUserAdmin className="w-5 h-5" />

            <span className="mx-4 font-medium">Become A Host</span>
          </div>
          <HostModal
            handleBecomeHost={handleBecomeHost}
            closeModal={closeModal}
            modalOpen={modalOpen}
          />
        </div>
      )}
    </>
  );
};

export default GuestMenu;
