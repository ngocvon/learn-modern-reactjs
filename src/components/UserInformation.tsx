import React,{useContext} from 'react'
import {AppContext} from "../Context/AppContext.tsx";

export default function UserInformation() {
    const {userDataHome,test} = useContext(AppContext);
    console.log({userDataHome,test})
  return (
      <>
          <h5>User Information</h5>
          <p>{userDataHome.first_name}</p>
          <p>{userDataHome.last_name}</p>
          <p>{userDataHome.email}</p>
          <img src={userDataHome.avatar} alt="avatar"/>
      </>
  )
}
