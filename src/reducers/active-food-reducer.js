import * as Types from '../actions/actionTypes';
var initialState = { food: null, dink: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SELECT_FOOD:
            state.food = action.food;
            return { ...state };
        default:
            return { ...state };
    }
}