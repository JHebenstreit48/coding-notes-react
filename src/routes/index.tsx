import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import HTML from "../pages/HTML.tsx";
import HTMLCode from "../pages/HTMLCode.tsx";
import CSS from "../pages/CSS";
import JavaScript from "../pages/JavaScript";
import TypeScript from "../pages/TypeScript";
import Git from "../pages/Git";
import Servers from "../pages/Servers";
import React from "../pages/React";
import PostgreSQL from "../pages/PostgreSQL";
import ReactAndTypeScript from "../pages/ReactandTypeScript";
import NodeJS from "../pages/Node";
import FullStackReact from "../pages/FullStackReact";
import MongoDB from "../pages/MongoDB";
import MernAndAuth from "../pages/MernAndAuth";
import Testing from "../pages/Testing";
import Python from "../pages/Python";
import APIs from "../pages/API.tsx";
import MongoDBCode from "../pages/MongoDBCode.tsx";
import ServerCode from "../pages/ServerCode.tsx";
import DeploymentCICD from "../pages/DeploymentCI-CD.tsx";
import APICode from "../pages/APICode.tsx";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to='/html' replace />,
            },
            {
                path: '/html',
                element: <HTML />,
            },
            {
                path: '/htmlcode',
                element: <HTMLCode />,
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
                path: '/servers/servercode',
                element: <ServerCode />,
            },
            {
                path: '/apis',
                element: <APIs />,
            },
            {
                path: '/apis/apicode',
                element: <APICode />,
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
                path: '/mongodb',
                element: <MongoDB />,
            },
            {
                path: '/mongodb/mongodbcode',
                element: <MongoDBCode />,
            },
            {
                path: '/mern',
                element: <MernAndAuth />,
            },
            {
                path: '/testing',
                element: <Testing />,
            },
            {
                path: 'DeploymentCICD',
                element: <DeploymentCICD />,
            },
            {
                path: '/python',
                element: <Python />,
            }
        ],
    },
]);
