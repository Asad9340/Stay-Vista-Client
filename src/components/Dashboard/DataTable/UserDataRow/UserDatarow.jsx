import PropTypes from 'prop-types';
import UpdateUserRoleModal from '../../../Modal/UpdateUserRoleModal';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';
const UserDataRow = ({ user, refetch }) => {
  const { user: currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async userRole => {
      const { data } = await axiosSecure.patch(
        `/user/update-role/${user.email}`,
        userRole
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success('Role Updated Successfully');
      setIsOpen(false);
    },
  });

  const modalHandler = async selected => {
    if (currentUser.email === user.email) {
      toast.error('You can not change your own role');
      setIsOpen(false);
      return;
    }
    const userRole = {
      role: selected,
      status: 'Verified',
    };
    try {
      await mutateAsync(userRole);
    } catch (e) {
      toast.error('Failed to update role', e.message);
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <button onClick={() => setIsOpen(true)} className="relative">
            Update Role
          </button>
        </span>
        {/* Update User Modal */}
        <UpdateUserRoleModal
          user={user}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
        />
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;
