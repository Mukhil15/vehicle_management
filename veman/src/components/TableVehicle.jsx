
import data3 from './Data3'
import styles from '../css/Bustable.module.css'

const TableVehicle = () => {

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
        
    {data3.map((item,index)=>(
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
