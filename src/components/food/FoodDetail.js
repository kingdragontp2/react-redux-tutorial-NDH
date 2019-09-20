import React, { Component } from 'react';

class FoodDetail extends Component {
    render() {
        var { food } = this.props.activeFood;

        if (!food) {
            return <h3>Please select a food</h3>;
        }

        var { imageUrl, name, description } = food;
        return (
            <div>
                <img src={imageUrl ? imageUrl : ""}
                    height={imageUrl ? 200 : 0}
                    alt="this is a img" />
                <p>Name: {name}</p>
                <p>Description: {description}</p>
            </div>
        )
    }
}

export default FoodDetail;