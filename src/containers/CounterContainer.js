import { connect } from 'react-redux'
import CounterComponent from '../components/CounterComponent'

//Actions
import { increaseAction, descreaseAction, decreaseAction } from '../actions'

const mapStateToProps = state => {
  return {
    times: state.counterReducers ? state.counterReducers : 0
  }
}

const mapDispacthToProps = dispatch => {
  return {
    onDecrement: step => {
      dispatch(decreaseAction(step))
    },
    onIncrement: step => {
      dispatch(increaseAction(step))
    }
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(CounterComponent)