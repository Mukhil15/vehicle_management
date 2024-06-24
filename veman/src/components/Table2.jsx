
import data2 from './Data2'
import styles from '../css/Table.module.css'
const Table2 = () => {

    return (
    <>
    <div className={styles.whole}>
   
    <div className={styles.table}>
    
    <table>
        <tr>
            <th>S.no</th>
            <th>Staff_Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Licence Number</th>
            <th>Expiry_Date</th>
            <th>Licence_Type</th>
           
        </tr>
        
    {data2.map((item,index)=>(
        <tr key={index}>
        <td key={index}>{item.Sno}</td>
        <td key={index}>{item.Staff_Id}</td>
        <td key={index}>{item.Name}</td>
        <td key={index}>{item.Age}</td>
        <td key={index}>{item.Licence_Number}</td>
        <td key={index}>{item.Expiry_Date}</td>
        <td key={index}>{item.Licence_Type}</td>
        </tr>
    ))}
 
    </table>
    </div>
    </div>
    </>
  )
}

export default Table2
