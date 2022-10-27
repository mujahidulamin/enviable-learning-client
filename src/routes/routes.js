import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../layout/main'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Blog from '../components/Blog/Blog'
import Courses from '../components/Courses/Courses'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import CheckOut from '../components/CheckOut/CheckOut'
import PrivateRoutes from './PrivateRoutes'
import Faq from '../components/Faq/Faq'
import Profile from '../components/Profile/Profile'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://enviable-learning-server.vercel.app/courses'),
        element: <Home></Home>
      },
      {
        path: '/home',
        loader: () => fetch('https://enviable-learning-server.vercel.app/courses'),
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: '/courses',
        loader: () => fetch('https://enviable-learning-server.vercel.app/courses'),
        element: <Courses></Courses>
      },
      {
        path: '/courses-details/:id',
        loader: ({ params }) => fetch(`https://enviable-learning-server.vercel.app/courseDetails/${params.id}`),
        element: <CourseDetails></CourseDetails>

      },
      {
        path: '/checkout/:name',
        loader: ({ params }) => fetch(`https://enviable-learning-server.vercel.app/checkout/${params.name}`),
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      }
    ],
  },
])

export default router