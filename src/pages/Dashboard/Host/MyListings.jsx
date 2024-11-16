import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import RoomDataRow from '../../../components/Dashboard/DataTable/RoomDataRow/RoomDataRow';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { useState } from 'react';
import toast from 'react-hot-toast';

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: listingsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['listingsData'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-listings/${user.email}`);
      return data;
    },
  });
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDelete = async id => {
    const res = await axiosSecure.delete(`/room/${id}`);
    if (res.status == 200 && res.statusText == 'OK') {
      toast.success('Successfully deleted the room.');
      refetch();
    }
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>My Listings | Dashboard</title>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          {listingsData?.length > 0 ? (
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
                        Location
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
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listingsData.map(room => (
                      <RoomDataRow
                        key={room._id}
                        room={room}
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
              <p className="text-gray-600">No data found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyListings;
