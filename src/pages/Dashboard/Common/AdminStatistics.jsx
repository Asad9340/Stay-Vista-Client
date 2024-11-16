import { Calendar } from 'react-date-range';
import { FaUserAlt, FaDollarSign } from 'react-icons/fa';
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import SalesLineChart from '../../../components/Charts/SalesLineChart';

const AdminStatistics = () => {
  // Fetch Admin Stat Data here
  const axiosSecure = useAxiosSecure();
  const { data: adminStatistics = [],isLoading } = useQuery({
    queryKey: ['adminStatistics'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin-stat');
      return data;
    }
  });
  if (isLoading) return <LoadingSpinner/>
    return (
      <div>
        <div className="mt-12">
          {/* small cards */}
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Sales Card */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
              >
                <FaDollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Sales
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  $ {adminStatistics?.totalPrice}
                </h4>
              </div>
            </div>
            {/* Users Card */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
              >
                <FaUserAlt className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total User
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {adminStatistics?.totalUsers}
                </h4>
              </div>
            </div>
            {/* Total Bookings */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
              >
                <BsFillCartPlusFill className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Bookings
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {adminStatistics?.totalBookings}
                </h4>
              </div>
            </div>
            {/* Total Rooms */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
              >
                <BsFillHouseDoorFill className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Total Rooms
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {adminStatistics?.totalRooms}
                </h4>
              </div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* Total Sales Graph */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
              {/* Render Chart Here */}
              <SalesLineChart data={adminStatistics?.chartData} />
            </div>
            {/* Calender */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
              <Calendar color="#1B1F3B" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminStatistics;
