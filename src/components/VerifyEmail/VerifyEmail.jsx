import { useContext } from 'react';
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const VerifyEmail = () => {
  const { resendVerificationEmail } = useContext(AuthContext);

  const handleResend = async () => {
    try {
      await resendVerificationEmail();
      toast.success('Verification email sent again!');
    } catch (error) {
      toast.error('Failed to resend verification email');
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4 text-green-500">
          <AiOutlineCheckCircle size={48} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          We have sent a verification email to your address. Please check your
          inbox and click the link to verify your email.
        </p>
        <div className="flex justify-center text-blue-500 mb-6">
          <AiOutlineMail size={36} />
        </div>
        <p className="text-sm text-gray-500">
          Did not receive the email?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={handleResend}
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
