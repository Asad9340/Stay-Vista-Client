import Container from '../Container';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
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
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import HostModal from './../../Modal/HostRequestModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useRole from './../../../hooks/useRole';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [role] = useRole();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLogOut = () => {
    logOut();
    toast.success('LogOut Successfully');
    navigate('/');
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleBecomeHost = async () => {
    let currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'Requested',
    };
    const { data } = await axiosSecure.put('/user', currentUser);
    if (data.modifiedCount > 0) {
      toast.success('Please wait for admin approval');
    } else {
      toast.success('You have already sent the request...');
    }
    closeModal();
  };
  const handleSearchChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      fetchSearchResults(value);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };
  const fetchSearchResults = async query => {
    try {
      const response = await fetch(
        `http://localhost:5050/search?query=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
      setShowDropdown(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  const handleSelectItem = () => {
       setSearchTerm('');
    setShowDropdown(false);
  };
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.postimg.cc/13rFBgXg/logo-removebg-preview-1.png"
                alt="logo"
                width="200"
                height="100"
              />
            </Link>
            <div className="hidden md:block">
              <ul className="flex justify-between gap-4 text-lg">
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link>Home</Link>
                </li>
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link to="/category">Category</Link>
                </li>
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="border-b-2 border-white hover:border-gray-400 py-1 px-3">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-gray-300">
                <div className="grid place-items-center h-full w-12 text-gray-500">
                  <AiOutlineSearch className="h-6 w-6" />{' '}
                  {/* React Search Icon */}
                </div>
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-2"
                  type="text"
                  id="search"
                  placeholder="Search something..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              {/* Dropdown List */}
              {showDropdown && searchResults.length > 0 && (
                <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.map((item, index) => (
                    <li key={index} className='shadow-lg'>
                      <Link
                        to={`/room/${item?._id}`}
                        onClick={() => handleSelectItem()}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover mr-4 rounded-md"
                        />
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.location}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                <div className="hidden md:block">
                  {user && role === 'guest' && (
                    <button
                      onClick={() => setModalOpen(true)}
                      disabled={!user}
                      className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
                    >
                      Host your home
                    </button>
                  )}
                  <HostModal
                    handleBecomeHost={handleBecomeHost}
                    closeModal={closeModal}
                    modalOpen={modalOpen}
                  />
                </div>
                <div></div>
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
                    {user && (
                      <Link
                        onClick={() => setIsOpen(!isOpen)}
                        to="/dashboard"
                        className=" px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                      >
                        <TbLayoutDashboardFilled />
                        Dashboard
                      </Link>
                    )}
                    <hr />
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
                      to="/about-us"
                      className="sm:block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold flex items-center gap-2"
                    >
                      <FaUser />
                      About Us
                    </Link>
                    <hr />
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      to="/contact-us"
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
