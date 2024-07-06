
import { useState } from "react";
import Table2 from "../components/Table2"
import TopBar from "../components/Topbar"
import FormDriver from "../components/FormDriver"
const DriverMaster = () => {
  const [isCreating,setIsCreating]=useState(false);
  return (
    <>
      <TopBar admin={true}/>
      {!isCreating && <>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <button onClick ={()=>setIsCreating(true)} style={{padding:'5px 10px',marginTop:'10px',color:"white",backgroundColor:'purple',}}>Add Driver</button>
      </div>
      <Table2/>
      </>}
      {isCreating && (<FormDriver onCancel={()=>setIsCreating(false)}/>)};
   
      
    </>
  )
}

export default DriverMaster
