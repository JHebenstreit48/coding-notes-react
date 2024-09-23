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
import React from "../pages/React";
import PostgreSQL from "../pages/PostgreSQL";
import WebAPI from "../pages/WebAPI";
import ReactAndTypeScript from "../pages/ReactandTypeScript";
import NodeJS from "../pages/Node";
import FullStackReact from "../pages/FullStackReact";
import MongoDB from "../pages/MongoDB";

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
                path: '/webapis',
                element: <WebAPI />
            },
            {
                path: '/node',
                element: <NodeJS />
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
            {
                path: '/postgresql',
                element: <PostgreSQL />,
            },
            {
                path: '/react',
                element: <React />,
            },
            {
                path: '/reactandtypescript',
                element: <ReactAndTypeScript />,
            },
            {
                path: '/fullstackreact',
                element: <FullStackReact />,
            },
            {
                path: '/nosql',
                element: <MongoDB />,
            }
        ],
    },
]);
