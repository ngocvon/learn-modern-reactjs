import {createContext, useEffect, useState} from "react";
import {useFetch} from "../hook/useFetch.tsx";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

export const AppContext = createContext({});
export const AppProvider = ({children})=>{
    const [userDataHome, setUserDataHome]=useState({});
    const [isOpen,setIsOpen]= useState(false);
    const [isDay,setIsDay]= useState(true);
    const themeStyle = {
        day:{
            backgroundColor:'rgb(228,228,228)',
            color:'black'
        },
        night:{
            backgroundColor: 'black',
            color: 'white'
        }
    }
    useEffect(()=>{
        fetch('https://reqres.in/api/users/2')
            .then(res=>res.json())
            .then(res=>{setUserDataHome(res.data);
            })
    })

    return <AppContext.Provider
        value={{
            userDataHome,
            isOpen,
            setIsOpen,
            isDay,
            setIsDay,
            themeStyle: themeStyle[isDay ? 'day' : 'night'],
        }}>
        {children}
    </AppContext.Provider>
}