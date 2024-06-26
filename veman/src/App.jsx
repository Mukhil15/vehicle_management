import Home from './pages/Home'
import Login from './pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home2 from './pages/Home2'

import DriverMaster from './pages/DriverMaster'
import BusMaster from './pages/BusMaster'

function App() {
 

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Home2' element={<Home2/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
