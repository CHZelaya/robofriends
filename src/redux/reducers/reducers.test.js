import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants.js';


import * as reducers from './reducers';

describe('searchRobots,', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchRobots(initialStateSearch, {})).toEqual({ searchField: '' })
    })

    it('should handle the CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })


})

describe('request robots reducer', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }

    it('it should request the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: [],
            isPending: true,
            error: ''
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [0, 1, 2, 3, 4, 5],
            isPending: false,
            error: ''
        })).toEqual({
            robots: [0, 1, 2, 3, 4, 5],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: [],
            isPending: false,
            error: []
        })).toEqual({
            robots: [],
            isPending: false,
            error: []
        })
    })
})