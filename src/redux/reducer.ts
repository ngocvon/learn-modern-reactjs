import { combineReducers } from "redux";
import filtersReducer from "../todoRedux/Filters/filtersSlice";
import todoListReducer from "../todoRedux/TodoList/todosSlice";


// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1,
//             name: 'Learn Yoga',
//             completed: false,
//             priority: 'Medium'
//         },
//         {
//             id: 2,
//             name: 'Learn Redux',
//             completed: true,
//             priority: 'Hight'
//         },
//         {
//             id: 3,
//             name: 'Learn Javascript',
//             completed: false,
//             priority: 'Medium'
//         }
//     ]
// }
// const rootReducer = (state = initState, action) => {
//     // console.log(state,action)
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return {
//                 ...state,
//                 todoList: [
//                     ...state.todoList,
//                     action.payload
//                 ],

//             }
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     search: action.payload
//                 }
//             }
//         default:
//             return state;
//     }

// }

// export default rootReducer;

//
/** */
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// }
// export default rootReducer;
/** */

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
})
export default rootReducer;