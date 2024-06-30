import styles from "../css/Formcom.module.css";
const Formcom = ({ onCancel }) => {
  
  return (
    <div className={styles.formContainer}>
    <form
      action="/Home"
    >
      <div className={styles.formGroup}>
        <label>initiator_id</label>
        <input
          type="text"
          name="initiator_id"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Purpose</label>
        <input
          type="text"
          name="Purpose"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>No of persons</label>
        <input
          type="number"
          name="No_of_person"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Place</label>
        <input
          type="text"
          name="pickup_place"
  
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Date</label>
        <input
          type="date"
          name="pickup_Date"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Pickup Time</label>
        <input
          type="time"
          name="pickup_time"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Destination</label>
        <input
          type="text"
          name="destination"
 
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Return Date</label>
        <input
          type="date"
          name="Return_Date"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Return Time</label>
        <input
          type="time"
          name="Return_Time"

          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Status</label>
        <input
          type="text"
          name="Status"
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
