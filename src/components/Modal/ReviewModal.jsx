import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const ReviewModal = ({
  closeReviewModal,
  isReviewOpen,
  id,
  handleAddReview,
}) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    if (!reviewText.trim()) return;
    handleAddReview(id, { review: reviewText, rating });
    setReviewText('');
    setRating(1);
    closeReviewModal();
  };

  return (
    <Transition appear show={isReviewOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeReviewModal}>
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
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Your Review
                </DialogTitle>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                  </label>
                  <input
                    type="text"
                    value={rating}
                    onChange={e => {
                      const value = e.target.value;
                      if (/^[1-5]?$/.test(value)) {
                        setRating(value);
                      }
                    }}
                    placeholder="Rating (1–5)"
                    className="border px-2 py-1 w-full rounded"
                    maxLength={1}
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    rows="4"
                    placeholder="Write your review here..."
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                  />
                </div>

                <hr className="mt-6" />
                <div className="flex mt-4 justify-around">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeReviewModal}
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

ReviewModal.propTypes = {
  closeReviewModal: PropTypes.func,
  isReviewOpen: PropTypes.bool,
  id: PropTypes.any,
  handleAddReview: PropTypes.func,
};

export default ReviewModal;
