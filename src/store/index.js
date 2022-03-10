import { createStore } from 'redux'

const initialValue = {
  counter: 0
}

/* sempre deve receber o estado anterior e a ação como parâmetros. usar IFs para retornar objetos de acordo com o tipo da ação */
const counterReducer = (state = initialValue, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    }
  }
  if (action.type === 'INCREASE') {
    return {
      counter: state.counter + action.amount
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1
    }
  }
  return initialValue
}

/* criação de um store, que deve receber uma função reducer */
const store = createStore(counterReducer)

export default store
