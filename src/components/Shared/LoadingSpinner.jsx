import PropTypes from 'prop-types';
// import { ImSpinner9 } from 'react-icons/im';
const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex
      flex-col
      justify-center
      items-center `}
    >
      {/* <ImSpinner9 size={100} className="animate-spin text-[#1B1F3B]" /> */}
      <div className="flex justify-center items-center ">
        <img
          className="animate-spin rounded-full w-48 h-48 object-cover"
          src="/src/assets/20250227_095616.jpg"
        />
      </div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
};

export default LoadingSpinner;
