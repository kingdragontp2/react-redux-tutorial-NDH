import * as Types from './actionTypes';

export const selectFood = (food) => {
    // console.log(`You clicked a food with name = ${food.name}`);
    return {
        type: Types.SELECT_FOOD,
        food
    };
}