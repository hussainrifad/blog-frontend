import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";
import Blogs from "./Blogs";
import Profile from "./Profile";
import Login from "./Login";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/blogs',
                element: <Blogs/>,
                loader: async () => fetch('http://localhost:3000/catagories'),
            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default routes;