// reducers
// la mot function
// state la bat bien nen gia tri state la ko thay doi 
const initValue = { value: 0 }
const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        default: return state;
    }
}

//action
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10
}
//action creator 
//giup cho chung ta ko viet cac object 
// lap di lap lai
const incrementCreator = (data) => {
    return {
        type: 'todoList/increment',
        payload: data
    };
}
incrementCreator(10);
//dispatch la mot function
dispatch(INCREMENT);
dispatch(incrementCreator(15));