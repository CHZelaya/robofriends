import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants/constants.js';

import { apiCall } from '../../api/api.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    // Dispatch pending action
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    // Fetch users
    apiCall('https://jsonplaceholder.typicode.com/users')
        // Dispatch success action
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        // Dispatch fail action
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}