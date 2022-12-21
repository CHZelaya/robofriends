import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    // Dispatch pending action
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    // Fetch users
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // Dispatch success action
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        // Dispatch fail action
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}