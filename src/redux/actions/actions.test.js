import * as actions from './actions'
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

//* Setting up our Mock Redux Store
const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField:', () => {

    test('setSearchField should return an object containing type & payload', () => {
        //*Setting text for the payload
        const text = 'wooo';
        //* Mocking expected action
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text,
        }
        //* Telling the test to expect setSearchField to equal our mocked action above.
        expect(actions.setSearchField(text)).toEqual(expectedAction)
        //* Pass.

    })
})

describe('requestRobots:', () => {

    test('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        }
        expect(action[0]).toEqual(expectedAction)
    })

    test('handles REQUEST_ROBOTS_SUCCESS case', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots(REQUEST_ROBOTS_SUCCESS))
        const action = store.getActions()
        const expectedAction = {
            type: REQUEST_ROBOTS_SUCCESS,
            isPending: false,
        }

        expect(action[0]).toEqual(expectedAction);
    })
})