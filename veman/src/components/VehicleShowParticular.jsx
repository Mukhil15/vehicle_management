import styles from "../css/Showparticular.module.css";

const VehicleShowParticular = ({item,onComplete}) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    return formattedDate;
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Vehicle Details:</h1>
        <div className={styles.displayContainer}>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Vehicle_Id</h2></div>
            <p>{item.vehicle_id}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Type_of_Vehicle</h2></div>
            <p>{item.Type_of_vehicle}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Vehicle_Number</h2></div>
            <p>{item.vehicle_number}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Default_Driver</h2></div>
            <p>{item.Default_Driver}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Registration_Date</h2></div>
            <p>{formatDate(item.Registration_Date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>FC Next_Inspection_Date</h2></div>
            <p>{formatDate(item.Fitness_Certificate_Next_Inspection_Date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>FC Expiry_Date</h2></div>
            <p>{formatDate(item.Fitness_Certificate_Expiry_Date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Road_tax</h2></div>
            <p>{item.Road_tax}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Permit</h2></div>
            <p>{item.Permit}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Green_Tax</h2></div>
            <p>{item.Green_Tax}</p>
          </div>
          
         <button  className={styles.cancelButton} onClick={onComplete}>Cancel</button>
        
        </div>
      </div>
    </>
  )
}

export default VehicleShowParticular
