import styles from '../css/Formcom.module.css';
import { useState } from "react";
import axios from "axios";
const FormVehicle = ({onCancel}) => {
  const[Vehicle,setVehicle]=useState([]);
  const[formData,setFormData]=useState({
    vehicle_id:"",
    Type_of_vehicle:"",
    vehicle_number:0,
    Default_Driver:"",
    Registration_Date:"",
    Fitness_Certificate_Next_Inspection_Date:"",
    Fitness_Certificate_Expiry_Date:"",
    Road_tax:"",
    Permit:"",
    Green_Tax:""
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleCreate=()=>{
    axios
    .post("http://localhost:4000/admin/VehicleMaster/addVehicle/",formData)
    .then((response)=>{
      setVehicle([...Vehicle,response.data]);
      setFormData({
        vehicle_id:"",
        Type_of_vehicle:"",
        vehicle_number:0,
        Default_Driver:"",
        Registration_Date:"",
        Fitness_Certificate_Next_Inspection_Date:"",
        Fitness_Certificate_Expiry_Date:"",
        Road_tax:"",
        Permit:"",
        Green_Tax:""
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
      <label>Vehicle_Id :</label>
      <input name="vehicle_id" value={formData.vehicle_id} onChange={handleChange} type="text" required />
    </div>
    <div className={styles.formGroup}>
      <label>Type_of_Vehicle :</label>
      <select name="Type_of_vehicle" value={formData.Type_of_vehicle} onChange={handleChange} required>
        <option value="">Select Type_of_Vehicle</option>
        <option value="Two_Wheeler">Two Wheeler</option>
        <option value="Car">Car</option>
        <option value="Bus">Bus</option>
        <option value="Goods_Vehicle">Goods Vehicle</option>
      </select>
    </div>
    <div className={styles.formGroup}>
      <label>Vehicle_Number :</label>
      <input name="vehicle_number" value={formData.vehicle_number} onChange={handleChange} type="number" required />
    </div>
    <div className={styles.formGroup}>
      <label>Default_Driver :</label>
      <input name="Default_Driver" value={formData.Default_Driver} onChange={handleChange} type="text" required />
    </div>
    <div className={styles.formGroup}>
      <label>Registration_Date :</label>
      <input name="Registration_Date" value={formData.Registration_Date} onChange={handleChange} type="date" required />
    </div>
    <div className={styles.formGroup}>
      <label>FC_Next_Inspection_Date :</label>
      <input name="Fitness_Certificate_Next_Inspection_Date" value={formData.Fitness_Certificate_Next_Inspection_Date} onChange={handleChange} type="date" required />
    </div>
    <div className={styles.formGroup}>
      <label>FC_Expiry_Date :</label>
      <input name="Fitness_Certificate_Expiry_Date" value={formData.Fitness_Certificate_Expiry_Date} onChange={handleChange} type="date" required />
    </div>
    <div className={styles.formGroup}>
      <label>Road_tax :</label>
      <div className={styles.radioGroup}>
        <label>
          <input name="Road_tax" value="Paid" onChange={handleChange} type="radio" checked={formData.Road_tax === "Paid"} required /> Paid
        </label>
        <label>
          <input name="Road_tax" value="Unpaid" onChange={handleChange} type="radio" checked={formData.Road_tax === "Unpaid"} required /> Unpaid
        </label>
      </div>
    </div>
    <div className={styles.formGroup}>
      <label>Permit :</label>
      <div className={styles.radioGroup}>
        <label>
          <input name="Permit" value="Paid" onChange={handleChange} type="radio" checked={formData.Permit === "Paid"} required /> Paid
        </label>
        <label>
          <input name="Permit" value="Unpaid" onChange={handleChange} type="radio" checked={formData.Permit === "Unpaid"} required /> Unpaid
        </label>
      </div>
    </div>
    <div className={styles.formGroup}>
      <label>Green_Tax :</label>
      <div className={styles.radioGroup}>
        <label>
          <input name="Green_Tax" value="Paid" onChange={handleChange} type="radio" checked={formData.Green_Tax === "Paid"} required /> Paid
        </label>
        <label>
          <input name="Green_Tax" value="Unpaid" onChange={handleChange} type="radio" checked={formData.Green_Tax === "Unpaid"} required /> Unpaid
        </label>
      </div>
    </div>
    <div className={styles.formActions}>
      <button type="submit" className={styles.submitButton}>Submit</button>
      <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
    </div>
  </form>
</div>

  );
}

export default FormVehicle;
