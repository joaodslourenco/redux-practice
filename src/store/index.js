import { createStore } from 'redux'

const initialValue = {
  counter: 0
}

const counterReducer = (state = initialValue, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  return initialValue
}

const store = createStore(counterReducer)

export default store
