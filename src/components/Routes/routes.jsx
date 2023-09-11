import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home";
import ErrorPage from "../ErrorPage";
import SignUp from "../SignUp";
import Blogs from "../Blogs";
import Profile from "../Profile/Profile";
import Login from "../Login";
import WriteBlogs from "../WriteBlogs";
import Blog from "../Blog";
import RecentPost from "../Profile/RecentPost";
import RecentComment from "../Profile/RecentComment";
import EditProfile from "../Profile/EditProfile";
import PrivateRoutes from "./PrivateRoutes";

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
                loader: async () => fetch('https://dailyblogs-backend-server.onrender.com/catagories'),
            },
            {
                path: '/profile',
                element: <Profile />,
                children: [
                    {
                        path: '/profile/recent_post',
                        element: <RecentPost />
                    },
                    {
                        path: '/profile/recent_comment',
                        element: <RecentComment />
                    },
                    {
                        path: '/profile/edit_profile',
                        element: <EditProfile />
                    },
                ]
            },
            {
                path: '/write_a_blog',
                element : <PrivateRoutes><WriteBlogs/></PrivateRoutes>
            },
            {
                path: 'blog/:id',
                element:<PrivateRoutes><Blog/></PrivateRoutes>,
                loader: async ({params}) => fetch(`https://dailyblogs-backend-server.onrender.com/blog/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default routes;