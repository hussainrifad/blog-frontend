import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default routes;