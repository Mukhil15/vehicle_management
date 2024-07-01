import Home from './pages/Home'
import BusMaster from './pages/BusMaster'
import DriverMaster from './pages/DriverMaster'
import Login from './pages/Login'
import DriverForm from './pages/DriverForm'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home2 from './pages/Home2'

import VehicleForm from './pages/VehicleForm'
import Approve from './pages/Approve'
import Reject from './pages/Reject'
function App() {
 

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/BusMaster' element={<BusMaster/>} />
        

        <Route path='/Home2' element={<Home2/>}/>
        <Route path='/DriverMaster' element={<DriverMaster/>}/>
        <Route path='/DriverForm' element={<DriverForm/>}/>
        <Route path='/VehicleForm' element={<VehicleForm/>}/>
        <Route path='/Approve' element={<Approve/>}/>
        <Route path='/Reject' element={<Reject/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
