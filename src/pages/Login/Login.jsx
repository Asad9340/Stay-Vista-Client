import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { ImSpinner3, ImSpinner9 } from 'react-icons/im';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';

const Login = () => {
  const [forgetPass, setForgatePass] = useState(false);
  const navigate = useNavigate();
  const [eyeIcon, setEyeIcon] = useState(false);
  const location = useLocation();
  const from = location.state || '/';

  const { signInWithGoogle, loading, setLoading, signIn, resetPassword } =
    useAuth();
  const onGoogleClickHandle = async () => {
    try {
      await signInWithGoogle();
      navigate(from);
      toast.success('Google Sign In Successfully');
    } catch (e) {
      toast.error('Failed to sign in with Google');
      setLoading(false);
    }
  };
  const handelEyeClick = () => {
    setEyeIcon(!eyeIcon);
  };
  const handleLogIn = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      if (result?.user?.emailVerified) {
        toast.success('LogIn Successfully');
        navigate(from);
        window.location.reload();
      }
    } catch (error) {
      if (error.message !== 'Email not verified') {
        toast.error('Email or password does not match');
      }
      setLoading(false);
    }
  };

  const handleForgatePassword = () => {
    setForgatePass(!forgetPass);
  };
  const handleResetPassword = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    try {
      await resetPassword(email);
      toast.success('Reset mail sent to your Email');
      setLoading(false);
    } catch (e) {
      toast.error(e.message);
      setLoading(false);
    }
  };
  const goToLogin = () => {
    setForgatePass(!forgetPass);
  };
  return (
    <>
      {!forgetPass ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleLogIn}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1B1F3B] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div className="relative">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type={!eyeIcon ? 'password' : 'text'}
                    name="password"
                    autoComplete="current-password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1B1F3B] bg-gray-200 text-gray-900"
                  />
                  <p className="absolute right-3 bottom-3">
                    {eyeIcon ? (
                      <IoMdEye onClick={handelEyeClick} title="Hide Password" />
                    ) : (
                      <IoIosEyeOff
                        onClick={handelEyeClick}
                        title="Show Password"
                      />
                    )}
                  </p>
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="disabled:cursor-not-allowed bg-[#1B1F3B] w-full rounded-md py-3 text-white"
                >
                  {loading ? (
                    <ImSpinner3 className="animate-spin m-auto" />
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </form>
            <div className="space-y-1">
              <button
                onClick={handleForgatePassword}
                className="text-xs hover:underline hover:text-rose-500 text-gray-400"
              >
                Forgot password?
              </button>
            </div>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <button
              onClick={onGoogleClickHandle}
              disabled={loading}
              className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
            >
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </button>
            <p className="px-6 text-sm text-center text-gray-400">
              Don&apos;t have an account yet?{' '}
              <Link
                to="/signup"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Reset Password</h1>
              <p className="text-sm text-gray-400">
                Please Enter Email for reset password
              </p>
            </div>
            <form
              onSubmit={handleResetPassword}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#1B1F3B] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="bg-[#1B1F3B] w-full rounded-md py-3 text-white"
                >
                  {loading ? (
                    <ImSpinner9 className="animate-spin m-auto" />
                  ) : (
                    'Reset Password'
                  )}
                </button>
              </div>
            </form>
            <p className="px-6 text-sm text-center text-gray-400">
              Reset Successfully?
              <p
                onClick={goToLogin}
                className="hover:underline hover:text-rose-500 text-gray-600 inline"
              >
                LogIn
              </p>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
