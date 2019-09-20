import React, { Component } from 'react';

class FoodItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var { eachFood, selectFood } = this.props;
        selectFood(eachFood);
    }

    render() {
        var { index, eachFood } = this.props;
        var { name } = eachFood;
        return (
            <li key={index} onClick={this.handleClick}>Food's name: {name}</li>
        );
    }
}

export default FoodItem;