import { useState } from 'react';

function AddMobileNumberModal({ isOpen, closeModal, handleAddMobileNumber }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleAddMobileNumber(phoneNumber);
    closeModal();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96">
          <h2 className="text-2xl font-semibold mb-4">Add Mobile Number</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                className="mt-2 w-full p-2 border rounded-lg"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default AddMobileNumberModal;
