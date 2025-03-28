import { DateRange } from 'react-date-range';
import { categories } from './../../Categories/CategoriesData'; // Import your categories data
import { ImSpinner10 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const AddRoomForm = ({
  state,
  setState,
  handleAddRoom,
  handleChange,
  files,
  loading,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleAddRoom}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md"
                name="category"
                id="category"
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-600">Date Range</label>
              <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex justify-between items-center w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                      multiple
                      onChange={handleChange}
                    />
                    <div className="bg-[#1B1F3B] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#1B1F3B]">
                      Upload Images
                    </div>
                  </label>
                  <div>
                    {files.length > 0 && (
                      <div className="pl-10 flex gap-2">
                        {Array.from(files).map((file, index) => (
                          <img
                            key={index}
                            className="w-12 h-12 object-contain object-center"
                            src={URL.createObjectURL(file)}
                            alt={`uploaded-thumbnail-${index}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="price"
                id="price"
                type="number"
                placeholder="Price"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="total_guest" className="block text-gray-600">
                Total Guests
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="total_guest"
                id="total_guest"
                type="number"
                placeholder="Total Guests"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Bedrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="Bedrooms"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-600">
                Bathrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="Bathrooms"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                name="description"
                id="description"
                placeholder="Description"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#1B1F3B]"
        >
          {loading ? (
            <ImSpinner10 className="animate-spin m-auto" />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
