import PropTypes from 'prop-types';
import { ImSpinner9 } from 'react-icons/im';
const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex
      flex-col
      justify-center
      items-center `}
    >
      <ImSpinner9 size={100} className="animate-spin text-[#1B1F3B]" />
    </div>
  );
};

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
};

export default LoadingSpinner;
