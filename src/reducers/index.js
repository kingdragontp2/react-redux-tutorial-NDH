import { combineReducers } from 'redux';
import foods from './foods-reducer';
import users from './users-reducer';
import activeFood from './active-food-reducer';

const allReducers = combineReducers({
    foods, users, activeFood
})

export default allReducers;