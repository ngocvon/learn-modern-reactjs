import { useState } from 'react'
import './App.css'
import Welcome from "./pages/Welcome.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import { RouteObject }                      from 'react-router-dom';
const [filter, setFilter] = useState([])

function filterAndSet(event, method) {
    if (!filter.includes(event.dataset[method])){
        setFilter(i => [...i].concat([event.dataset[method]]))
    }
}
const appRoutes: RouteObject[] = [
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Welcome filterAndSet={filterAndSet} filter={filter}/>
            }
        ]
    }
];
const router = createBrowserRouter([
{
        element:(
            <Outlet/>
        ),
        children:appRoutes
}
])

function App() {

  return (
    <>
        <RouterProvider router={router}/>
        {/*<Header/>
        <Routes>
            <Route path='/' element={ <Welcome filterAndSet={filterAndSet} filter={filter} />}></Route>
            <Route path='/Community' element={<Community />}></Route>
            <Route path='/EntryGame' element={<EntryGame />}></Route>
            <Route path='/IndieGame' element={<IndieGame />}></Route>
        </Routes>*/}
    </>
  )
}

export default App
