import styles from '../css/Formcom.module.css';
import { useState } from "react";
import axios from "axios";
const FormDriver = ({onCancel}) => {
  const [Driver,setDriver]=useState([]);
  const[formData,setFormData]=useState({
    driver_id:"",
    driver_name:"",
    Age:0,
    Phone_number:0,
    Address:"",
    Aadhar_number:0,
    Licence_number:"",
    Expiry_date:"",
    Licence_type:"",
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleCreate=()=>{
    axios
    .post("http://localhost:4000/admin/DriverMaster/addDriver/",formData)
    .then((response)=>{
      setDriver([...Driver,response.data]);
      setFormData({
        driver_id:"",
    driver_name:"",
    Age:0,
    Phone_number:0,
    Address:"",
    Aadhar_number:0,
    Licence_number:"",
    Expiry_date:"",
    Licence_type:"",
      });
      onCancel();
    })
    .catch((err)=>console.log(err));
  }
  return (
   <div className={styles.formContainer}>
  <form onSubmit={(e) => {
    e.preventDefault();
    handleCreate()
  }}>
    <div className={styles.formGroup}>
      <label>Driver_id :</label>
      <input name="driver_id" value={formData.driver_id} onChange={handleChange} type="text" required />
    </div>
    
  
    <div className={styles.formGroup}>
      <label>Driver_name :</label>
      <input name="driver_name" value={formData.driver_name} onChange={handleChange} type="text" required />
    </div>
    <div className={styles.formGroup}>
      <label>Age :</label>
      <input name="Age" value={formData.Age} onChange={handleChange} type="number" required />
    </div>
    <div className={styles.formGroup}>
      <label>Phone_number :</label>
      <input name="Phone_number" value={formData.Phone_number} onChange={handleChange} type="number" required />
    </div>
    <div className={styles.formGroup}>
      <label>Address :</label>
      <input name="Address" value={formData.Address} onChange={handleChange} type="text" required />
    </div>
    <div className={styles.formGroup}>
      <label>Aadhar_number :</label>
      <input name="Aadhar_number" value={formData.Aadhar_number} onChange={handleChange} type="number" required />
    </div>
    <div className={styles.formGroup}>
      <label>Licence_number :</label>
      <input name="Licence_number" value={formData.Licence_number} onChange={handleChange} type="text" required />
    </div>
    <div className={styles.formGroup}>
      <label>Expiry_date :</label>
      <input name="Expiry_date" value={formData.Expiry_date} onChange={handleChange} type="date" required />
    </div>
    <div className={styles.formGroup}>
      <label>Licence_type :</label>
      <select name="Licence_type" value={formData.Licence_type} onChange={handleChange} required>
        <option value="">Select Type_of_Vehicle</option>
        <option value="LMV">Light Motor Vehicle(LMV)</option>
        <option value="HMV">Heavy Motor Vehicle(HMV)</option>
        <option value="HMGV">Heavy Motor Goods Vehicle(HMGV)</option>
        <option value="Two_Wheeler">Two_Wheeler</option>
      </select>
    </div>
    <div className={styles.formActions}>
      <button type="submit" className={styles.submitButton}>Submit</button>
      <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
    </div>
  </form>
</div>

  )
}

export default FormDriver
