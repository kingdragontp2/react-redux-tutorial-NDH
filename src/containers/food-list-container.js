import { connect } from 'react-redux';
import FoodList from '../components/food/FoodList';

function mapStateToProps(state) {
    let { foods } = state;
    return {
        foods
    }
}

export default connect(mapStateToProps)(FoodList);