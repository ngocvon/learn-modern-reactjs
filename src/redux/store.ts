// import { createStore } from 'redux';
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composedEnhancers);
// console.log({ store }, 'store')
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from "../todoRedux/Filters/filtersSlice";
import todoListReducer from '../todoRedux/TodoList/todosSlice';


const store = configureStore({
    reducer: {
        filters: filtersReducer.reducer,
        todoList: todoListReducer.reducer
    },
});

export default store;