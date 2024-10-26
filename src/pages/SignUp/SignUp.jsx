import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { ImSpinner3 } from 'react-icons/im';
import { useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';
const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    loading,
    setLoading,
    signInWithGoogle,
  } = useAuth();
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [imageError, setImageError] = useState('');
  const [eyeIcon, setEyeIcon] = useState(false);
  const navigate = useNavigate();
  const handelSignUpRegister = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    if (name.length <= 0) {
      setErrorName('Name is required');
      return;
    }
    if (name.length < 2) {
      console.log(typeof name);
      setErrorName('Name must be at least 3 characters');
      return;
    } else {
      setErrorName('');
    }
    if (!image) {
      setImageError('');
      setImageError('Image must be specified');
      return;
    } else {
      setImageError('')
    }
    if (email.length <= 0) {
      setErrorEmail('');
      setErrorEmail('Email is Required');
      return;
    } else {
      setErrorEmail('');
    }
    if (password.length <= 0) {
      setErrorPass('Password is required');
      return;
    }
    if (password.length < 6) {
      setErrorPass('Password must be at least 6 characters.');
      return;
    }
    if (password.length > 12) {
      setErrorPass('Password must be less than 12 characters.');
      return;
    } else {
      setErrorPass('');
    }

    const formData = new FormData();
    formData.append('image', image);
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      const imageUrl = data.data.display_url;
      if (imageUrl) {
        await createUser(email, password);
        await updateUserProfile(name, imageUrl);
        navigate('/');
        toast.success('User Created and LogIn Successfully');
      } else {
        toast.error('Failed to upload image');
      }
    } catch (e) {
      toast.error(e.message);
    }
  };
  const handelEyeClick = () => {
    setEyeIcon(!eyeIcon);
  };
  const onGoogleClickHandle =async () => {
    await signInWithGoogle();
    navigate('/');
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to StayVista</p>
        </div>
        <form
          onSubmit={handelSignUpRegister}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              <br />
              <p className="text-red-500">{errorName ? errorName : ''}</p>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full text-gray-500 font-medium text-sm file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white px-3 py-1 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200"
              />
              <br />
              <p className="text-red-500">{imageError ? imageError : ''}</p>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              <br />
              <p className="text-red-500">{errorEmail ? errorEmail : ''}</p>
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
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              <p className="absolute right-3 bottom-3">
                {eyeIcon ? (
                  <IoMdEye onClick={handelEyeClick} />
                ) : (
                  <IoIosEyeOff onClick={handelEyeClick} />
                )}
              </p>
              <br />
              <p className="text-red-500">{errorPass ? errorPass : ''}</p>
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner3 className="animate-spin m-auto" />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          onClick={onGoogleClickHandle}
          disabled={loading}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
