import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { useState } from 'react';
const MainLayout = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="wrapper">
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout;