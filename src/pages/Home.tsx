import Content from "../components/Content.tsx";
import Sidebar from "../components/Sidebar.tsx";
import {useEffect, useState} from 'react';
import ToogleSidebar from "../layouts/ToogleSidebar.tsx";
import {AppProvider} from "../Context/AppContext.tsx";
const Home = () => {
    return(
        <>
            <div className="wrapper-home">
                <AppProvider>
                    <ToogleSidebar/>
                    <Content/>
                    <Sidebar/>
                </AppProvider>

            </div>
        </>
    )
}
export default Home;