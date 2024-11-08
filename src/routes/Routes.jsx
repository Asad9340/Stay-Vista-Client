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
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
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
        element: <Statistics />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'add-room',
        element: <AddRoom />,
      },
      {
        path: 'my-listings',
        element: <MyListings />,
      },
      {
        path: 'profile',
        element: <Profile/>
      },
    ],
  },
]);
