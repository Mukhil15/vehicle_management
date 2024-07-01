
import axios from "axios";
import styles from '../css/Bustable.module.css'
import { useState,useEffect } from 'react';
const TableVehicle = () => {
    const [Vehicle,setVehicle]=useState([]);
useEffect(()=>{
axios
.get("http://localhost:4000/admin/VehicleMaster/")
.then((response)=>setVehicle(response.data))
.catch((err)=>console.log(err))
},[]);
    return (
    <>
    <div className={styles.whole}>
   
    <div className={styles.table}>
    
    <table>
        <tr>
            <th>S.no</th>
            <th>Vehicle_Id</th>
            <th>Type_of_Vechile</th>
            <th>Vehicle_Number</th>
            <th>Default_Driver</th>
            <th>Registration_Date</th>
            <th>Fitness_Certificate_Next_Inspection_Date</th>
            <th>Fitness_Certificate_Expiry_Date</th>
            <th>Road_tax</th>
            <th>Permit</th>
            <th>Green_Tax</th>
           
        </tr>
        
    {Vehicle.map((item,index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td >{item.vehicle_id}</td>
        <td >{item.Type_of_vehicle}</td>
        <td >{item.vehicle_number}</td>
        <td >{item.Default_Driver}</td>
        <td >{item.Registration_date}</td>
        <td>{item.Fitness_Certificate_Next_Inspection_Date}</td>
        <td >{item.Fitness_Certificate_Expiry_Date}</td>
        <td >{item.Road_tax}</td>
        <td >{item.Permit}</td>
        <td >{item.Green_Tax}</td>
        
        
        </tr>
    ))}
 
    </table>
    </div>
    </div>
    </>
  )
}

export default TableVehicle
