import { INCREMENT, DECREMENT } from '../actions/actionTypes'

function* sayHello() {
  console.log('WOyo world');
   
}

//saga effects
import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

function* increment() {
  console.log('Tis is increment saga');
  alert('Tis is increment saga')
}
function* decrement() {
  console.log('Tis is decrement saga');
  alert('Tis is decrement saga')
  
}
export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment)
}
export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement)
}