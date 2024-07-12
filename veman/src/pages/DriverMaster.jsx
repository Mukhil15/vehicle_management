
import { useState } from "react";
import TableDriver from "../components/TableDriver"
import TopBar from "../components/Topbar";
import FormDriver from "../components/FormDriver"

const DriverMaster = () => {
  const [isCreating,setIsCreating]=useState(false);
  const[displayButton,setdisplayButton]=useState(true);
  return (
    <>
      <TopBar admin={true}/>
      {!isCreating &&(
        <>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      {displayButton && (<button onClick={()=>setIsCreating(true)} style={{padding:'5px 10px',marginTop:'10px',color:"white",backgroundColor:'purple',}}>Add Driver</button>)}
      <TableDriver onCancel={()=>setdisplayButton(false)} onAppear={()=>setdisplayButton(true)}/>
      </div>
      </>
      )}
      {isCreating && (<FormDriver onCancel={()=>setIsCreating(false)}/>)};
   
      
    </>
  )
}

export default DriverMaster
