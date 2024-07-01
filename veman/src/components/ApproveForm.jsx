
import styles from '../css/Formcom.module.css';
import { useState } from 'react';

const ApproveForm = () => {
  const [user, setUser] = useState({
    number: '',
    Driver_Name: '',
    Type_of_Vehicle: '',
    PhoneNumber: ''
  });

  const [vehicleSelected, setVehicleSelected] = useState(false);

  const changeHandler = (e) => {
    let ty = "";
    let fname = "";
    let fPhoneNumber = "";
    const value = e.target.value;
    if (value === '1') {
      ty = "Bus";
      fname = "Thangavel";
      fPhoneNumber = "7896541230";
    } else if (value === '2') {
      ty = "Bus";
      fname = "Ravi";
      fPhoneNumber = "9863251470";
    } else if (value === '3') {
      ty = "Car";
      fname = "Guru";
      fPhoneNumber = "1234567890";
    } else if (value === '4') {
      ty = "Goods_Vehicle";
      fname = "RamaSaamy";
      fPhoneNumber = "4563217890";
    }
    setUser(prevState => ({
      ...prevState,
      Type_of_Vehicle: ty,
      PhoneNumber: fPhoneNumber,
      Driver_Name: fname
    }));
    setVehicleSelected(true); // Set vehicle selected to true after selecting a vehicle
  }

  const changeHandler2 = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} action='/Home2'>
          <div className={styles.formGroup}>
            <label htmlFor="Vehicle_Number">Vehicle Number :</label>
            <select id="Vehicle_Number" name="Vehicle_Number" onChange={changeHandler} className={styles.formSelect}>
              <option value="">Select Vehicle Number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Type_of_Vehicle">Type of Vehicle :</label>
            <select id="Type_of_Vehicle" name="Type_of_Vehicle" value={user.Type_of_Vehicle} onChange={changeHandler2} className={styles.formSelect} disabled={!vehicleSelected}>
              <option value="">Select Type of Vehicle</option>
              <option value="Two_Wheeler">Two Wheeler</option>
              <option value="Car">Car</option>
              <option value="Bus">Bus</option>
              <option value="Goods_Vehicle">Goods Vehicle</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="Driver_Name">Driver Name :</label>
            <select id="Driver_Name" name="Driver_Name" value={user.Driver_Name} onChange={changeHandler2} className={styles.formSelect} disabled={!vehicleSelected}>
              <option value="">Select Driver</option>
              <option value="Thangavel">Thangavel</option>
              <option value="Ravi">Ravi</option>
              <option value="RamaSaamy">Ramasaamy</option>
              <option value="Guru">Guru</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="PhoneNumber">Driver Phone Number :</label>
            <input id="PhoneNumber" name="PhoneNumber" type="number" value={user.PhoneNumber} onChange={changeHandler2} className={styles.formInput} disabled={!vehicleSelected} />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>Submit</button>
            <button type="button" className={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ApproveForm;
