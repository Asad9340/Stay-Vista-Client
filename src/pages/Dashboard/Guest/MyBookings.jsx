import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useMutation, useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import BookingDataRow from '../../../components/Dashboard/DataTable/BookingDataRow/BookingDataRow';
import { useState } from 'react';
import toast from 'react-hot-toast';

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: myBooking = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['myBooking'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/booking/${user?.email}`);
      return data;
    },
  });
  const closeModal = () => {
    setIsOpen(false);
  };

  //   delete
  const { mutateAsync } = useMutation({
    mutationFn: async id => {
      const { data } = await axiosSecure.delete(`/booking/cancel/${id}`);
      return data;
    },
    onSuccess: async (data,id) => {
      refetch();
      toast.success('Booking Canceled');
      await axiosSecure.patch(`/room/status/${id}`, {
        status: false,
      });
    },
  });

  const handleDelete = async id => {
      try {
        await mutateAsync(id);
      } catch (err) {
        toast.error(err.message);
      }
    closeModal();
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {myBooking.length > 0 ? (
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Info
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        To
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table Row Data */}
                    {myBooking.map(booking => (
                      <BookingDataRow
                        key={booking._id}
                        booking={booking}
                        refetch={refetch}
                        closeModal={closeModal}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No bookings found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
