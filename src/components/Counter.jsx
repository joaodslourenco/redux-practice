import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  /* forma que um componente é subscrito ao store, sendo notificado sempre que houver alteração no estado */
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', amount: 10 })
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
