import styles from "../css/Formcom.module.css";
import { useState } from "react";
import axios from "axios";
const Formcom = ({ onCancel }) => {
  const [Request,setRequest]=useState([]);
  const [formData,setFormData]=useState({
    Purpose:"",
    No_of_person:0,
    initiator_id:"",
    pickup_place:"",
    pickup_time:"",
    pickup_Date:"",
    destination:"",
    Return_Time:"",
    Return_Date:"",
    Status:"Initialed",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreate=()=>{
    axios
    .post("http://localhost:4000/user/Home/addRequest/",formData)
    .then((response)=>{
      setRequest([...Request,response.data]);
      setFormData({
        Purpose:"",
    No_of_person:0,
    initiator_id:"",
    pickup_place:"",
    pickup_time:"",
    pickup_Date:"",
    destination:"",
    Return_Time:"",
    Return_Date:"",
    Status:"Initialed",
      });
      onCancel();
    })
    .catch((err) => console.log(err));
  }
  return (
    <div className={styles.formContainer}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div className={styles.formGroup}>
        <label>initiator_id</label>
        <input
          type="text"
          name="initiator_id"
          value={formData.initiator_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Purpose</label>
        <input
          type="text"
          name="Purpose"
          value={formData.Purpose}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>No of persons</label>
        <input
          type="number"
          name="No_of_person"
          value={formData.No_of_person}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Place</label>
        <input
          type="text"
          name="pickup_place"
          value={formData.pickup_place}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Date</label>
        <input
          type="date"
          name="pickup_Date"
          value={formData.pickup_Date}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Time</label>
        <input
          type="time"
          name="pickup_time"
          value={formData.pickup_time}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Destination</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Return Date</label>
        <input
          type="date"
          name="Return_Date"
          value={formData.Return_Date}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Return Time</label>
        <input
          type="time"
          name="Return_Time"
          value={formData.Return_Time}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Status</label>
        <input
          type="text"
          name="Status"
          onChange={handleChange}
          defaultValue="initialed"
          disabled
        />
      </div>
      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  </div>
  );
};

export default Formcom;
