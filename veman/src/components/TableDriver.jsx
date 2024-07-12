import { useState, useEffect } from "react";
import axios from "axios";
import styles from '../css/Table.module.css';
import { IoMdEye } from "react-icons/io";
import DriverShowParticular from "./DriverShowParticular";
const TableDriver = ({onCancel,onAppear}) => {
const formatDate=(isString)=>{
    const data=new Date(isString);
    const formatDate=data.toLocaleDateString('en-GB');
    return formatDate;
}
const [drivers, setdrivers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchField, setSearchField] = useState("driver_id"); // Default search field is vehicle_id
const[displayParticlar,setdisplayParticlar]=useState(null);
useEffect(()=>{
axios
.get("http://localhost:4000/admin/DriverMaster/")
.then((response)=>setdrivers(response.data))
.catch((error)=>console.error(error));
},[]);
if(!displayParticlar){
    onAppear();
  }
  const handleDisplayParticular = (item) => {
    setdisplayParticlar(item);
    onCancel();
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSelectChange = (e) => {
    setSearchField(e.target.value);
    
    setSearchTerm(""); // Clear search term when selecting a new field
  };
  const filteredDrivers = drivers.filter((driver) => {
    const fieldValue=String(driver[searchField]).toLowerCase();
    return fieldValue.includes(searchTerm.toLowerCase());
  })
    return (
    <>
   {!displayParticlar && (<div className={styles.whole}>
        <div className={styles.searchbar}>
          <select value={searchField} onChange={handleSelectChange}>
            <option value="driver_id">Driver Id</option>
            <option value="driver_name">Driver Name</option>
            <option value="Phone_number">Phone Number</option>
            <option value="Aadhar_number">Aadhar_number</option>
            <option value="Licence_number">Licence_number</option>
            <option value="Licence_type">Licence_number</option>
          </select>
         
            <input
              type="text"
              placeholder={`Search by ${searchField.replace('_', ' ')}`}
              value={searchTerm}
              onChange={handleSearchChange}
            />
        </div>
        <div className={styles.table}>
          {filteredDrivers.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No results found.</p>
          ) : (
            <div className={styles.tablehead} >
            <table>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Driver_Id</th>
                  <th>Driver Name</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Aadhar_number</th>
                  <th>Licence_number</th>
                  <th>Expiry_date</th>
                  <th>Licence_type</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {filteredDrivers.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.driver_id}</td>
                    <td>{item.driver_name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Phone_number}</td>
                    <td>{formatDate(item.Expiry_date)}</td>
                    <td>{item.Address}</td>
                    <td>{item.Aadhar_number}</td>
                    <td>{item.Licence_number}</td>
                    <td>{item.Licence_type}</td>
                    <td>
                      <button onClick={()=>handleDisplayParticular(item)}>
                        <IoMdEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>)}
      {displayParticlar && <DriverShowParticular item={displayParticlar}  onComplete={()=>{setdisplayParticlar(null);}}/>}
      </>
  )
}

export default TableDriver;
