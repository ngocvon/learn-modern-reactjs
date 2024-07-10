
import {useReducer} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
const reducer =(state: number, action: any)=>{
    switch(action){
        case 'tang':
            return state + 1;
        case 'giam':
            return state - 1;
        case 'xoa_tat_ca':
            return 0;
        default:
            return  state;
    }
}
const initState = {
    loading:false,
    data:[],
    error:null
}
const usereducer = (state: any, action: { type: any; data: any; })=> {
    switch (action.type){
        case 'GET_USER_REQUEST':
            return {
                ...state,
                loading:true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading:false,
                data:action.data
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                data:[],
                error:action.data
            }
        default: return state;
    }
}
const reducer2 = (state: any, action: { type: any; data: any; })=>{
    switch (action.type){
        case'GAN_GIA_TRI':
            return action.data;
        default: return state;
    }
}
const Appusereducer = ()=>{
    const [count, dispatch]= useReducer(reducer,0);
    const [count2, dispatch2]= useReducer(reducer2,0);
    const [user, userDispatch] = useReducer(usereducer, initState);
    const getUsers = () =>{
        userDispatch({
            type:'GET_USER_REQUEST'
        });
        setTimeout(()=>{
            fetch('https://reqres.in/api/users')
                .then((res)=>res.json())
                .then((res) => {
                    userDispatch({
                        type:'GET_USER_SUCCESS',
                        data: res,
                    });
                })
                .catch((err)=>{
                    userDispatch({
                        type:'GET_USER_ERROR',
                        data:err,
                    });
                })
        },2000);

    }
    return <>
        <button onClick={getUsers}>get users</button>
        {user.loading ? <p>Loading...</p> : <p>{JSON.stringify((user))}</p>}
        <p>count{count}</p>
        <button onClick={() => dispatch('tang')}>Tăng</button>
        <button onClick={() => dispatch('giam')}>giam</button>
        <button onClick={() => dispatch('xoa_tat_ca')}>xoa tat ca</button>
        <p>count{count2}</p>
        <button onClick={()=>dispatch2({
            type:'GAN_GIA_TRI',
            data:10
            })
        }>gan gia tri</button>
    </>

}
export default Appusereducer;
