import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
const ChangePasswordModal = ({
  closeModal,
  isOpen,
  handlePasswordUpdate,
  user,
  loading,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 opacity-15" />
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
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-sm transition-all">
                <div className="flex justify-between">
                  <DialogTitle
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Update Your Password
                  </DialogTitle>
                  <p>
                    <MdCancel size={34} onClick={closeModal} />
                  </p>
                </div>

                <div>
                  <div className="mt-2">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        defaultValue={user?.email}
                        disabled
                        placeholder="Enter Your Email Here"
                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1B1F3B] bg-gray-200 text-gray-900"
                        data-temp-mail-org="0"
                      />
                    </div>
                  </div>
                  <hr className="mt-8 " />
                  <div className="flex mt-2 justify-around">
                    <button
                      disabled={loading}
                      onClick={handlePasswordUpdate}
                      type="submit"
                      className="disabled:cursor-not-allowed bg-[#1B1F3B] w-full rounded-md py-3 text-white"
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin m-auto" />
                      ) : (
                        'Update Password'
                      )}
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChangePasswordModal;
