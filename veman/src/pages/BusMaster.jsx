import { Link } from "react-router-dom"
import TableVehicle from "../components/TableVehicle"

import TopBar from "../components/Topbar"
const BusMaster = () => {
  return (
    <>
      <TopBar admin={true}/>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:'10px',marginBottom:'0px'}}>
      <Link to="/VehicleForm"><button style={{padding:'5px 10px',marginTop:'10px',color:"white",backgroundColor:'purple',}}>Add Vehicle</button></Link>
      </div>
      <TableVehicle/>
    </>
  )
}

export default BusMaster
