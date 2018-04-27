import { INCREMENT, DECREMENT } from './actionTypes'

//ACtion increse counter
export const increaseAction = step => {
  return {
    type: INCREMENT,
    step: step
  }
}
// Action decrease counter
export const decreaseAction = step => {
  return {
    type: DECREMENT,
    step: step
  }
}