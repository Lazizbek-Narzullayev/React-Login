import './App.css'
import Registr from './components/Registr/Registr.jsx'
import Login from './components/Login/Login.jsx'
import Forgotten from './components/Forgotten/Forgotten.jsx'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
    
      {/* <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Registr' element={<Registr/>} />
            <Route path='/Forgotten' element={<Forgotten/>} />
      </Routes> */}
      <Registr/>
      <Login/>
      <Forgotten/>
      
    </>
  )
}

export default App
