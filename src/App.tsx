import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header.tsx";
import Community from "./pages/Community.tsx"
import EntryGame from "./pages/EntryGame.tsx";
import IndieGame from "./pages/IndieGame.tsx";
import Welcome from "./pages/Welcome.tsx";
import Home from "./pages/Home.tsx";
import { Outlet, RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Usereducer from "./components/usereducer.tsx";
import CustomHook from "./components/CustomHook.tsx";
import LearnRedux from "./todoRedux/LearnRedux.tsx";


function App() {
    const [filter, setFilter] = useState([]);

    function filterAndSet(event, method) {
        if (!filter.includes(event.dataset[method])) {
            setFilter(i => [...i].concat([event.dataset[method]]))
        }
    }
    const appRoutes: RouteObject[] = [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/create-people',
                    element: <Welcome filterAndSet={filterAndSet} filter={filter} />
                },
                {
                    path: '/create-people/:name',
                    element: <IndieGame />
                },
                {
                    path: '/usereducer/:name',
                    element: <Usereducer />
                },
                {
                    path: '/customhook/:name',
                    element: <CustomHook />
                },
                {
                    path: '/todoRedux/:name',
                    element: <LearnRedux />
                }
            ]
        }
    ];
    const router = createBrowserRouter([
        {
            element: (
                <Outlet />
            ),
            children: appRoutes
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App;
