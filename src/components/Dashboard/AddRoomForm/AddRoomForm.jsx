import { DateRange } from 'react-date-range';
import { categories } from './../../Categories/CategoriesData';
import { ImSpinner10 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const AddRoomForm = ({
  state,
  setState,
  handleAddRoom,
  handleChange,
  file,
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
                required
                className="w-full px-4 py-3 border-[#2A325A] focus:outline-[#1B1F3B] rounded-md"
                name="category"
              >
                {categories?.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                rangeColors={['#1B1F3B']}
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
                      onChange={handleChange}
                    />
                    <div className="bg-[#1B1F3B] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#1B1F3B]">
                      Upload Image
                    </div>
                  </label>
                  <div>
                    {file && (
                      <div className="pl-10">
                        <img
                          className="w-12 h-12 object-contain object-center"
                          src={file}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
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
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-[#2A325A] focus:outline-[#1B1F3B] rounded-md "
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
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
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-[#2A325A] focus:outline-[#1B1F3B] "
                name="description"
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
