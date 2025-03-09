import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import RoomDetails from '../pages/RoomDetails/RoomDetails';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import Statistics from '../pages/Dashboard/Common/Statistics';
import AddRoom from './../pages/Dashboard/Host/AddRoom';
import MyListings from './../pages/Dashboard/Host/MyListings';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import Profile from '../pages/Dashboard/Common/Profile';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import AdminRoute from './AdminRoute';
import HostRoute from './HostRoute';
import MyBookings from '../pages/Dashboard/Guest/MyBookings';
import ManageBookings from '../pages/Dashboard/Host/ManageBookings';
import Category from './../pages/Category/Category';
import LearnMore from './../pages/LearnMore/LearnMore';
import Blog from '../pages/Blog/Blog';
import RefundPolicy from '../pages/RefundPolicy/RefundPolicy';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService/TermsOfService';
import FAQ from '../pages/FAQ/FAQ';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/learn-more',
        element: <LearnMore />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/refund-policy',
        element: <RefundPolicy />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-of-service',
        element: <TermsOfService/>
      },
      {
        path: '/faq',
        element: <FAQ/>
      },
      {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'statistics',
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-room',
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddRoom />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-listings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-bookings',
        element: (
          <PrivateRoute>
            <HostRoute>
              <ManageBookings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
