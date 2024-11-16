import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import UpdateRoomForm from '../Dashboard/UpdateRoomForm/UpdateRoomForm';
import { imgbbImageUpload } from '../../api/utils/imageUpload';
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { axiosSecure } from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const UpdateRoomModal = ({ setIsEditModalOpen, isOpen, room, refetch }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async roomData => {
      const { data } = await axiosSecure.put(
        `/room/update/${room?._id}`,
        roomData
      );
      return data;
    },
    onSuccess: () => {
      console.log('Data Saved Successfully');
      toast.success('Room Update Successfully!');
      refetch();
      setLoading(false);
    },
  });
  const handleUpdateRoomData = async e => {
    e.preventDefault();
    setLoading(true);
    console.log(room._id);
    const form = e.target;
    const new_location = form.location.value;
    const new_category = form.category.value;
    const new_title = form.title.value;
    const new_image = form.image.files[0];
    const new_price = form.price.value;
    const new_guests = form.total_guest.value;
    const new_bedrooms = form.bedrooms.value;
    const new_bathrooms = form.bathrooms.value;
    const new_description = form.description.value;
    var new_imageURL = '';
    if (new_image) {
      new_imageURL = await imgbbImageUpload(new_image);
    }
    const new_imageUrl = room.image;

    try {
      const roomData = {
        location: new_location ? new_location : room.location,
        category: new_category ? new_category : room.category,
        title: new_title ? new_title : room.title,
        from: room.from,
        to: room.to,
        image: new_imageURL ? new_imageURL : new_imageUrl,
        price: new_price ? new_price : room.price,
        guests: new_guests ? new_guests : room.guests,
        bedrooms: new_bedrooms ? new_bedrooms : room.bedrooms,
        bathrooms: new_bathrooms ? new_bathrooms : room.bathrooms,
        description: new_description ? new_description : room.description,
        host: {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        },
      };
      await mutateAsync(roomData);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
    setIsEditModalOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Room Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update room form */}
                  <UpdateRoomForm
                    room={room}
                    loading={loading}
                    handleUpdateRoomData={handleUpdateRoomData}
                  />
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateRoomModal.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default UpdateRoomModal;
