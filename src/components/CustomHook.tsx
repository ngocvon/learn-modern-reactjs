import React, { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {useFetch} from "../hook/useFetch.tsx";

function CustomHook() {
    const {
        data: users,
        isLoading,
        error,
    } = useFetch('https://reqres.in/api/users');
    if (error) {
        return 'Something wrong !!!';
    }
    return(<><p>von-test-customHook</p>{ isLoading ? (<p>Loading...</p>) : (
       users.map((item,i) => (
            <div className="item" key={i}>
                <div className="card">
                    <p>{item.first_name}</p>
                </div>
            </div>
        ))
    )}</>)

}
export default CustomHook;