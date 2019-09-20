import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoodItem from '../components/food/item/FoodItem';
import { selectFood } from '../actions';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectFood }, dispatch);
}

export default connect(null, mapDispatchToProps)(FoodItem);