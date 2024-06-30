import { useState } from "react";
import Formcom from "../components/Formcom";
import TopBar from "../components/Topbar";
const Home = () => {
  const [addRequest,setAddRequest]=useState(false);
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-GB', options);
  return (
    <>
      <TopBar admin={false} />
     
      {!addRequest && (<><div>
        <h1>Welcome Back...!</h1>
        <p>Date: {formattedDate}</p>
      </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0px', flexDirection: "column" }}>
     <button onClick={()=>setAddRequest(true)}>Add Request</button>
          </div></>)
}
{addRequest && <Formcom onCancel={()=>setAddRequest(false)}/>}

    </>
  );
};

export default Home;
