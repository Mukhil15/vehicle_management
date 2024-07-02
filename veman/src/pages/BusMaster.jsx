
import { useState } from "react";
import TableVehicle from "../components/TableVehicle"
  
import TopBar from "../components/Topbar";
import FormVehicle from "../components/FormVehicle";
const BusMaster = () => {
  const [isCreating,setIsCreating]=useState(false);
  const[displayButton,setdisplayButton]=useState(true);
  return (
    <>
      <TopBar admin={true}/>
    { !isCreating  &&(<>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginTop:'10px',marginBottom:'0px'}}>
    {displayButton &&(<button onClick={()=>setIsCreating(true)} style={{padding:'5px 10px',marginTop:'10px',color:"white",backgroundColor:'purple',}}>Add Vehicle</button>)}
    <TableVehicle onCancel={()=>setdisplayButton(false)} onAppear={()=>setdisplayButton(true)} />
      </div>
      </>)}
      
      {isCreating && (<FormVehicle onCancel={()=>setIsCreating(false)}/>)}
    </>
  )
}
export default BusMaster
