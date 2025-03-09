import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { useEffect, useState } from 'react';
import UpdateProfileModal from '../../../components/Modal/UpdateProfileModal';
import { imgbbImageUpload } from '../../../api/utils/imageUpload';
import toast from 'react-hot-toast';
import ChangePasswordModal from '../../../components/Modal/ChangePasswordModal';
import axios from 'axios';

function Profile() {
  const { user, updateUserProfile, resetPassword } = useAuth();
  const [role, isLoading] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState(user?.phoneNumber || '');
  const [number, setNumber]=useState('')
  const closeModal = () => setIsOpen(false);
  const closeModal2 = () => setIsOpen2(false);
  const closePhoneModal = () => setIsPhoneOpen(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${user?.email}`
      );
      setNumber(response.data.phoneNumber);
    };
    fetchUserData();
  }, [user?.email]);

  const handleUpdate = async e => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    try {
      const photo = await imgbbImageUpload(image);
      await updateUserProfile(name, photo);
      toast.success('Profile Updated Successfully');
    } catch (e) {
      toast.error(`Error: ${e.message}`);
    }
    setIsOpen(false);
    setLoading(false);
  };

  const handlePasswordUpdate = async () => {
    setLoading(true);
    try {
      const email = user.email;
      await resetPassword(email);
      toast.success('Password Reset Email Sent Successfully');
    } catch (e) {
      toast.error(`Error: ${e.message}`);
    }
    setIsOpen2(false);
    setLoading(false);
  };

  const handlePhoneUpdate = async () => {
    setLoading(true);
    try {
      const updatedUser = {
        email: user?.email,
        phoneNumber: newPhoneNumber,
      };
      console.log(updatedUser);
      await axios.put(`${import.meta.env.VITE_API_URL}/user`, updatedUser);
      toast.success('Phone Number Updated Successfully');
      setIsPhoneOpen(false);
    } catch (e) {
      toast.error(`Error: ${e.message}`);
    }
    setLoading(false);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl p-8 mt-20">
        {/* Profile Header */}
        <div className="relative">
          <div className="w-full h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 rounded-t-lg shadow-lg mb-6">
            {/* Banner Image Area */}
          </div>

          <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
            <img
              alt="profile"
              src={user?.photoURL}
              className="h-36 w-36 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            {user?.displayName}
          </h2>
          <p className="text-sm text-gray-600 capitalize mt-2">{role}</p>
          <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
          <p className="text-sm text-gray-600 mt-1">User Id: {user?.uid}</p>
        </div>

        {/* Profile Details */}
        <div className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">
                Full Name
              </span>
              <span className="font-semibold text-gray-800">
                {user?.displayName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Email</span>
              <span className="font-semibold text-gray-800">{user?.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Phone</span>
              <span className="font-semibold text-gray-800">
                {number || 'N/A'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-4 mt-8">
          <button
            onClick={() => setIsOpen(true)}
            className="w-1/2 bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Update Profile
          </button>
          <button
            onClick={() => setIsOpen2(true)}
            className="w-1/2 bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Change Password
          </button>
          <button
            onClick={() => setIsPhoneOpen(true)}
            className="w-1/2 bg-gray-600 text-white py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Add Phone Number
          </button>
        </div>

        {/* Modals */}
        <UpdateProfileModal
          user={user}
          handleUpdate={handleUpdate}
          closeModal={closeModal}
          isOpen={isOpen}
          loading={loading}
        />
        <ChangePasswordModal
          isOpen={isOpen2}
          user={user}
          closeModal={closeModal2}
          handlePasswordUpdate={handlePasswordUpdate}
          loading={loading}
        />

        {/* Phone Number Update Modal */}
        {isPhoneOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96">
              <h3 className="text-xl font-semibold mb-4">
                Update Phone Number
              </h3>
              <input
                type="text"
                value={newPhoneNumber}
                onChange={e => setNewPhoneNumber(e.target.value)}
                className="w-full p-2 border rounded-lg mb-4"
                placeholder="Enter new phone number"
              />
              <div className="flex justify-between">
                <button
                  onClick={closePhoneModal}
                  className="bg-gray-300 py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePhoneUpdate}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
