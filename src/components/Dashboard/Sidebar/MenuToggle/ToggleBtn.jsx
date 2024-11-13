import PropTypes from 'prop-types';
const ToggleBtn = ({ toggleHandler }) => {
  return (
    <>
      <label
        htmlFor="Toggle3"
        className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
      >
        <input
          onChange={toggleHandler}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
        />
        <span className="px-4 py-1 rounded-l-md bg-gray-300 peer-checked:bg-[#2A325A] peer-checked:text-white text-lg peer-checked:font-medium font-normal">
          Guest
        </span>
        <span className="px-4 py-1 rounded-r-md bg-[#2A325A] text-white peer-checked:text-[#2A325A] peer-checked:bg-gray-300 text-lg peer-checked:font-normal font-medium">
          Host
        </span>
      </label>
    </>
  );
};

ToggleBtn.propTypes = {
  toggleHandler: PropTypes.func,
};
export default ToggleBtn;
