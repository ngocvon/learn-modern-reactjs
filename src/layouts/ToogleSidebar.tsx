import {useContext} from "react";
import {AppContext} from "../Context/AppContext.tsx";

const ToogleSidebar=()=>{
    const {userDataHome,isOpen, setIsOpen,themeStyle,setIsDay,isDay} = useContext(AppContext);
    const toggleSidebar = (e) => {
        setIsOpen(!isOpen);
        e.target.classList.toggle('toogle-class');
        e.currentTarget.getAttribute('className');
        console.log(e.currentTarget.getAttribute('nap'),'dssdfsd');
    }
    const toggleTheme=()=>{
        setIsDay(!isDay)
    }
    return(
        <>
            <div className="box-toogleSidebar"
                 style={{...themeStyle,
                     display:"flex",
                     justifyContent:'right',
                     padding:'10px',
                     gridColumn:isOpen? '2/4':'1/4',
                     gridRow:'1/2',
                     alignItems:'center'
            }}>
                <p style={{cursor: 'pointer'}} onClick={toggleSidebar} nap="von-nguyen">My profile</p>
                <p className="name-profile">Hello<span style={{marginLeft: 5}}>{userDataHome.first_name}</span></p>
                <label className='switch'>
                    <input type='checkbox' checked={isDay} onChange={toggleTheme}/>
                    <span className='slider round'></span>
                </label>
            </div>

        </>

    )
}
export default ToogleSidebar;