import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/Error.tsx";

import APIs from "../pages/API.tsx";
import APICode from "../pages/APICode.tsx";
import CSS from "../pages/CSS.tsx";
import CSSCode from "../pages/CSSCode.tsx";
import Git from "../pages/Git.tsx";
import GitCode from "../pages/GitCode.tsx";
import HTML from "../pages/HTML.tsx";
import HTMLCode from "../pages/HTMLCode.tsx";
import JavaScript from "../pages/JavaScript.tsx";
import JavascriptCode from "../pages/JavaScriptCode.tsx";
import MernAndAuth from "../pages/MernAndAuth.tsx";
import MernAndAuthCode from "../pages/MernAndAuthCode.tsx";
import MongoDB from "../pages/MongoDB.tsx";
import MongoDBCode from "../pages/MongoDBCode.tsx";
import Node from "../pages/Node.tsx";
import NodeCode from "../pages/NodeCode.tsx";
import PostgreSQL from "../pages/PostgreSQL.tsx";
import PostgreSQLCode from "../pages/PostgreSQLCode.tsx";
import Python from "../pages/Python.tsx";
import PythonCode from "../pages/PythonCode.tsx";
import React from "../pages/React.tsx";
import ReactCode from "../pages/ReactCode.tsx";
import ReactAndTypeScript from "../pages/ReactandTypeScript.tsx";
import ReactAndTypeScriptCode from "../pages/ReactAndTypeScriptCode.tsx";
import ReactFullStack from "../pages/ReactFullStack.tsx";
import ReactFullStackCode from "../pages/ReactFullStackCode.tsx";
import Servers from "../pages/Servers.tsx";
import ServerCode from "../pages/ServerCode.tsx";
import Testing from "../pages/Testing.tsx";
import TestingCode from "../pages/TestingCode.tsx";
import TypeScript from "../pages/TypeScript.tsx";
import TypeScriptCode from "../pages/TypeScriptCode.tsx";
import Home from "../pages/Home.tsx";
import CICDOpsCode from "../pages/CICDOpsCode.tsx";
import CICDOps from "../pages/CICDOps.tsx";
import ReactNative from "../pages/ReactNative.tsx";
import ReactNativeCode from "../pages/ReactNativeCode.tsx";
import Vitest from "../pages/VitestTesting.tsx";
import VitestCode from "../pages/VitestTestingCode.tsx";
import Cypress from "../pages/CypressTesting.tsx";
import CypressCode from "../pages/CypressTestingCode.tsx";
import Angular from "../pages/Angular.tsx";
import AngularCode from "../pages/AngularCode.tsx";
import Redux from "../pages/Redux.tsx";
import ReduxCode from "../pages/ReduxCode.tsx";
import Vue from "../pages/Vue.tsx";
import VueCode from "../pages/VueCode.tsx";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
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
                path: '/css/csscode',
                element: <CSSCode />,
            },
            {
                path: '/git',
                element: <Git />,
            },
            {
                path: '/git/gitcode',
                element: <GitCode />,
            },
            {
                path: '/javascript',
                element: <JavaScript />,
            },
            {
                path: '/javascript/javascriptcode',
                element: <JavascriptCode />,
            },
            {
                path: '/node',
                element: <Node />
            },
            {
                path: '/node/nodecode',
                element: <NodeCode />,
            },
            {
                path: '/typescript',
                element: <TypeScript />,
            },
            {
                path: '/typescript/typescriptcode',
                element: <TypeScriptCode />,
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
                path: '/postgresql/postgresqlcode',
                element: <PostgreSQLCode />,
            },
            {
                path: '/react',
                element: <React />,
            },
            {
                path: '/react/reactcode',
                element: <ReactCode />,
            },
            {
                path: '/react/reactandtypescript',
                element: <ReactAndTypeScript />,
            },
            {
                path: '/react/reactandtypescriptcode',
                element: <ReactAndTypeScriptCode />,
            },
            {
                path: '/react/reactfullstack',
                element: <ReactFullStack />,
            },
            {
                path: '/react/reactfullstackcode',
                element: <ReactFullStackCode />,
            },
            {
                path: '/react/reactnative',
                element: <ReactNative />,
            },
            {
                path: '/react/reactnativecode',
                element: <ReactNativeCode />,
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
                path: '/mern/merncode',
                element: <MernAndAuthCode />,
            },
            {
                path: '/testing',
                element: <Testing />,
            },
            {
                path: '/testing/testingcode',
                element: <TestingCode />,
            },
            {
                path: '/testing/vitesttesting',
                element: <Vitest />,
            },
            {
                path: '/testing/vitesttestingcode',
                element: <VitestCode />,
            },
            {
                path: '/testing/cypresstesting',
                element: <Cypress />,
            },
            {
                path: '/testing/cypresstestingcode',
                element: <CypressCode />,
            },
            {
                path: '/cicdops',
                element: <CICDOps />,
            },
            {
                path: '/cicdops/cicdopscode',
                element: <CICDOpsCode />,
            },
            {
                path: '/python',
                element: <Python />,
            },
            {
                path: '/python/pythoncode',
                element: <PythonCode />,
            },
            {
                path: '/angular',
                element: <Angular />,
            },
            {
                path: '/angular/angularcode',
                element: <AngularCode />,
            },
            {
                path: '/redux',
                element: <Redux />,
            },
            {
                path: '/redux/reduxcode',
                element: <ReduxCode />,
            },
            {
                path: '/vue',
                element: <Vue />,
            },
            {
                path: '/vue/vuecode',
                element: <VueCode />,
            }, 
        ],
    },
]);
