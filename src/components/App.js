import React, { Component } from "react";
import './App.css'
import FoodListContainer from '../containers/food-list-container';
import FoodDetailContainer from '../containers/food-detail-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React with Redux project</h2>
        </div>
        <div className="App-intro">
          <p>This is a tutorial React app with Redux</p>
          <h2>List of foods:</h2>
          <FoodListContainer />
          <hr />
          <h2>Food details:</h2>
          <FoodDetailContainer />
        </div>

      </div>
    );
  }
}

export default App;
