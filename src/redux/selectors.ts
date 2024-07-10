import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;



// export const searchTextSelector = (state) => state.filters.search;
// export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {

//     const searchText = searchTextSelector(state);

//     const todoRemaining = state.todoList.filter((todo) => {
//         console.log(state.filters.search, 'key-search');
//         return todo.name.includes(state.filters.search);
//     });
//     return todoRemaining;

// };

// export const searchTextSelector = (state) => state.filters.search;

// export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
//     return todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     });
// })

export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        console.log('status-selector', status);
        //  console.log('todoList-length', searchText);
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
        });
        console.log('status-selector-todoList', todoList);
    });
// status => 'All', 'Completed', 'Todo'
// trong du lieu chung thi phải nhớ kiểu của là chữ thường completed
console.log(todoRemainingSelector, 'todoRemainingSelector');