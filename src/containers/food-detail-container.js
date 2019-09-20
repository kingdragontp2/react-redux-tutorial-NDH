import { connect } from 'react-redux';
import FoodDetail from '../components/food/FoodDetail';

function mapStateToProps(state) {
    let { activeFood } = state;
    return {
        activeFood
    }
}

export default connect(mapStateToProps)(FoodDetail);