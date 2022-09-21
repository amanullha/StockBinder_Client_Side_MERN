import ForgotPassword from "../Authentication/ForgotPassword";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Dashboard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";
import Profile from "../Pages/Profile";



export const publicRoutes = [

    {
        name: 'Home',
        Component: HomePage,
        path: '/'
    },
    {
        name: 'Home',
        Component: HomePage,
        path: '/home'
    },
    {
        name: 'About',
        Component: AboutPage,
        path: '/about'
    },
    {
        name: 'Contact',
        Component: ContactPage,
        path: '/contact'
    },
    {
        name: 'Profile',
        Component: Profile,
        path: '/profile'
    },

    {
        name: 'Login',
        Component: Login,
        path: '/login'
    },
    {
        name: 'SignUp',
        Component: SignUp,
        path: '/signup'
    },
    {
        name: 'Forgot Password',
        Component: ForgotPassword,
        path: '/forgot-Password'
    },
  


]

// {
//     name: 'Dashboard',
//         Component: Dashboard,
//             path: '/dashboard'
// },