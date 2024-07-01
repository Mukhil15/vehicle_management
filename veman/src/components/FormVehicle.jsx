import styles from '../css/Formcom.module.css';

const FormVehicle = () => {
  return (
    <div className={styles.formContainer}>
      <form  action='/BusMaster'>
        <div className={styles.formGroup}>
          <label htmlFor="Vehicle_Id">Vehicle_Id :</label>
          <input id="Vehicle_Id" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Type_of_Vechile">Type_of_Vechile :</label>
          <select id="Type_of_Vechile" required>
            <option value="">Select Type_of_Vechile</option>
            <option value="Two_Wheeler">Two Wheeler</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Goods_Vehicle">Goods Vehicle</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Vehicle_Number">Vehicle_Number :</label>
          <input id="Vehicle_Number" type="number" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Default_Driver">Default_Driver :</label>
          <input id="Default_Driver" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Registration_Date">Registration_Date :</label>
          <input id="Registration_Date" type="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="FC_Next_Inspection_Date">FC_Next_Inspection_Date :</label>
          <input id="Fitness_Certificate_Next_Inspection_Date" type="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="FC_Expiry_Date">FC_Expiry_Date :</label>
          <input id="Fitness_Certificate_Expiry_Date" type="date" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Road_tax">Road_tax :</label>
          <input id="Road_tax" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Permit">Permit :</label>
          <input id="Permit" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Green_Tax">Green_Tax :</label>
          <input id="Green_Tax" type="text" required />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormVehicle;
