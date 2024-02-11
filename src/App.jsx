import { Outlet} from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'

function App() {

  return (
    <div className=' overflow-hidden'>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default App
