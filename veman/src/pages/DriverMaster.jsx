
import Table2 from "../components/Table2"
import TopBar from "../components/Topbar"
import { Link} from "react-router-dom"
const DriverMaster = () => {
  return (
    <>
      <TopBar admin={true}/>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <Link to="/DriverForm"><button style={{padding:'5px 10px',marginTop:'10px',color:"white",backgroundColor:'purple',}}>Add Driver</button></Link>
      </div>
      <Table2/>
   
      
    </>
  )
}

export default DriverMaster
