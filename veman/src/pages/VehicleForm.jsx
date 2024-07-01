
import FormVehicle from "../components/FormVehicle"
import Topbar from "../components/Topbar"
const VehicleForm = () => {
  return (
    <>
      <Topbar admin={true}/>
      <div style={{display:'flex',justifyContent:"center"}}>
      <h1 style={{margin:'10px',fontSize:'30px',fontWeight:'bold'}}>Add Driver</h1>
      </div>
      
      <FormVehicle/>
     
    </>
  )
}

export default VehicleForm
