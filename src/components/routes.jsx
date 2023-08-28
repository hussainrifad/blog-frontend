import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default routes;