import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actions';

const initialState = {
    users: [],
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            //console.log('Fetch User Successfull', action?.users)
            return { ...state, users: action.users, error: null };
        case FETCH_USERS_FAILURE:
            return { ...state, users: [], error: action.error };
        default:
            return state;
    }
};

export default usersReducer;
