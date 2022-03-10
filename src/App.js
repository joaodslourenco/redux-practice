import { useSelector } from 'react-redux'
import Auth from './components/Auth'
import Counter from './components/Counter'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import { authActions } from './store'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  )
}

export default App
