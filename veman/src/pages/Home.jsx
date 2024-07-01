import { useState } from "react";
import TopBar from "../components/Topbar";
import styles from "../css/Homepage.module.css";
import Formcom from "../components/Formcom";
import UserTable from "../components/UserTable";

const Home = () => {
  const [isCreating, setIsCreating] = useState(false);
  const[displayButton,setdisplayButton]=useState(true);
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-GB', options);
  return (
    <>
      <TopBar admin={false} />
      
      {!isCreating  &&(
        <>
        {displayButton &&(<div className={styles.Welcome_content}>
        <h1>Welcome Back...!</h1>
        <p>Date: {formattedDate}</p>
      </div>)}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0px', flexDirection: "column" }}>
        {displayButton &&(<button className={styles.button} onClick={() => setIsCreating(true)}>Add Request</button>)}
         <UserTable onCancel={()=>setdisplayButton(false)} onAppear={()=>setdisplayButton(true)}/>
        </div>
        </>
      )}
      {isCreating && (
        <>
           <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center",flexDirection:"column" }}>
            <h1 style={{ margin: '10px', fontSize: '30px', fontWeight: 'bold', }}>Make Request</h1>
            
         
            <Formcom onCancel={() => setIsCreating(false)}  />
          </div>
        </>
      )}  
    </>
  );
};

export default Home;
