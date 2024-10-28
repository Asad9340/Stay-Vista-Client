import Container from '../Container';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';
import toast from 'react-hot-toast';
import { FaHome } from 'react-icons/fa';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';
import { IoLogIn } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
    toast.success('LogOut Successfully');
    navigate('/');
  };
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
            <div className="hidden md:block">
              <ul className="flex justify-between gap-4 text-lg">
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link>Home</Link>
                </li>
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link>About Us</Link>
                </li>
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className="hidden md:block">
                  {!user && (
                    <button
                      disabled={!user}
                      className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
                    >
                      Host your home
                    </button>
                  )}
                </div>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    {/* Avatar */}
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      to="/"
                      className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                    >
                      <FaHome />
                      Home
                    </Link>
                    <hr />
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      to="/"
                      className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                    >
                      <FaUser />
                      About Us
                    </Link>
                    <hr />
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      to="/"
                      className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                    >
                      <MdPermContactCalendar />
                      Contact Us
                    </Link>
                    <hr />
                    {user ? (
                      <>
                        <div
                          onClick={handleLogOut}
                          className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold "
                        >
                          <Link
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2"
                          >
                            <IoLogOut />
                            Logout
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                        >
                          <IoLogIn />
                          Login
                        </Link>
                        <hr />
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                        >
                          <MdAccountCircle />
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
