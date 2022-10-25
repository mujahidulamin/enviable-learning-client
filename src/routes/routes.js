import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../layout/main'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Blog from '../components/Blog/Blog'
import Courses from '../components/Courses/Courses'
import CourseDetails from '../components/CourseDetails/CourseDetails'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
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
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/courses',
        loader: () => fetch('http://localhost:5000/courses'),
        element: <Courses></Courses>
      },
      {
        path: '/courses-details/:id',
        element: <CourseDetails></CourseDetails>
      }
    ],
  },
])

export default router