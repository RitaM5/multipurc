import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className=' overflow-hidden'>
      <Outlet></Outlet>
    </div>
  )
}

export default App
