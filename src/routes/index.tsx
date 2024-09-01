import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import HTML from "../pages/HTML";
import CSS from "../pages/CSS";
import JavaScript from "../pages/JavaScript";
import TypeScript from "../pages/TypeScript";
import Git from "../pages/Git";
import Servers from "../pages/ExpressServers";
import API from "../pages/API";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HTML />,
            },
            {
                path: '/css',
                element: <CSS />,
            },
            {
                path: '/git',
                element: <Git />,
            },
            {
                path: '/javascript',
                element: <JavaScript />,
            },
            {
                path: '/typescript',
                element: <TypeScript />,
            },
            {
                path: '/servers',
                element: <Servers />,
            },
            {
                path: '/apis',
                element: <API />,
            },
            
        ],
    },
]);
