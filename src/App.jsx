import React, { useState } from 'react';
import Welcome from "./pages/Welcome.jsx"
import{Routes, Route}from 'react-router-dom'
import Community from './pages/Community';
import EntryGame from './pages/EntryGame.jsx';
import IndieGame from './pages/IndieGame.jsx';
import Header from "./components/Header.jsx";
function App() {
    const [filter, setFilter] = useState([])

    function filterAndSet(event, method) {
        if (!filter.includes(event.dataset[method])){
            setFilter(i => [...i].concat([event.dataset[method]]))
        }
    }

    return <>
        <Header/>
        <Routes>
            <Route path='/' element={ <Welcome filterAndSet={filterAndSet} filter={filter} />}></Route>
            <Route path='/Community' element={<Community />}></Route>
            <Route path='/EntryGame' element={<EntryGame />}></Route>
            <Route path='/IndieGame' element={<IndieGame />}></Route>
        </Routes>
    </>
}

export default App;

