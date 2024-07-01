// import data from './Data';
import { useEffect, useState } from 'react';
import styles from '../css/Table.module.css';
import { IoMdEye } from "react-icons/io";
import axios from 'axios';
import ShowParticular from './ShowParticular';
const UserTable = ({onCancel,onAppear}) => {
    const [RequestData,setRequestData]=useState([]);
   const[displayParticlar,setdisplayParticlar]=useState(null);
    useEffect(()=>{
    axios
    .get("http://localhost:4000/user/Home/")
    .then((response)=>{
        setRequestData(response.data)
    })
    .catch((err)=>console.log(err));
  },[]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    return formattedDate;
  };
  if(!displayParticlar){
    onAppear();
  }
  const handleDisplayParticluar=(item)=>{
    setdisplayParticlar(item);
    onCancel();
  }
  return (
<>
    {!displayParticlar && (<div className={styles.whole}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Purpose</th>
              <th>No of persons</th>
              <th>pickup_place</th>
              <th>pickup_Date</th>
              <th>pickup_time</th>
              <th>destination</th>
              <th>return_Date</th>
              <th>return time</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {RequestData.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.Purpose}</td>
                <td>{item.No_of_person}</td>
                <td>{item.pickup_place}</td>
                <td>{formatDate(item.pickup_Date)}</td>
                <td>{item.pickup_time}</td>
                <td>{item.destination}</td>
                <td>{formatDate(item.Return_Date)}</td>
                <td>{item.Return_Time}</td>
                <td>{item.Status}</td>
                <td><button onClick={()=>handleDisplayParticluar(item)}><center><IoMdEye/></center></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)}
    {displayParticlar && <ShowParticular item={displayParticlar}  onComplete={()=>{setdisplayParticlar(null);}}/>}
    </>
  );
};

export default UserTable;
