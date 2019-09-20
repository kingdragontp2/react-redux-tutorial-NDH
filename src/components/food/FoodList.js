import React, { Component } from 'react';
import FoodItemContainer from '../../containers/food-item-container';

class FoodList extends Component {
    
    render() {
        var { foods } = this.props;
        return (
            <ul>
                {this.showFoodList(foods)}
            </ul>
        )
    }

    showFoodList(foods) {
        if (foods.length < 1) return null;
        return foods.map((eachFood, index) => {
            return (
                <FoodItemContainer
                    key={index}
                    eachFood={eachFood}
                    index={index}
                />
            )
        })
    }
}

export default FoodList;