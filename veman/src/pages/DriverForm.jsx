import FormDriver from "../components/FormDriver"
import Topbar from "../components/Topbar"
const DriverForm = () => {
  return (
    <>
      <Topbar admin={true}/>
      <div style={{display:'flex',justifyContent:"center"}}>
      <h1 style={{margin:'10px',fontSize:'30px',fontWeight:'bold'}}>Add Driver</h1>
      </div>
      
      <FormDriver/>
     
    </>
  )
}

export default DriverForm
