import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { useState } from 'react';
import UpdateProfileModal from '../../../components/Modal/UpdateProfileModal';
import { imgbbImageUpload } from '../../../api/utils/imageUpload';
import toast from 'react-hot-toast';
import ChangePasswordModal from '../../../components/Modal/ChangePasswordModal';

function Profile() {
  const { user, updateUserProfile, resetPassword } = useAuth();
  const [role, isLoading] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModal2 = () => {
    setIsOpen2(false);
  };
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
      toast.error(`Error:${e.message}`);
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
      toast.error(`Error:${e.message}`);
    }
    setIsOpen2(false);
    setLoading(false);
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-full mt-10 md:mt-0 md:w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>

          <p className="p-2 px-4 text-xs text-white rounded-full capitalize bg-[#1B1F3B]">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black">{user?.email}</span>
              </p>

              <div>
                <div>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#1B1F3B] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-opacity-80 block mb-1"
                  >
                    Update Profile
                  </button>
                  <UpdateProfileModal
                    user={user}
                    handleUpdate={handleUpdate}
                    closeModal={closeModal}
                    isOpen={isOpen}
                    loading={loading}
                  />
                </div>
                <div>
                  <button
                    onClick={() => setIsOpen2(true)}
                    className="bg-[#1B1F3B] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-opacity-80"
                  >
                    Change Password
                  </button>
                  <ChangePasswordModal
                    isOpen={isOpen2}
                    user={user}
                    closeModal={closeModal2}
                    handlePasswordUpdate={handlePasswordUpdate}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
