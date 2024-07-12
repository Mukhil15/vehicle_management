import styles from "../css/Showparticular.module.css";

const DriverShowParticular = ({item,onComplete}) => {
  const formatDate = (isString) => {
    const date = new Date(isString);
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    return formattedDate;
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Driver Details:</h1>
        <div className={styles.displayContainer}>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Driver_id</h2></div>
            <p>{item.driver_id}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>driver_name</h2></div>
            <p>{item.driver_name}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Age</h2></div>
            <p>{item.Age}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Phone_number</h2></div>
            <p>{item.Phone_number}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Address</h2></div>
            <p>{item.Address}</p>
          </div>
          
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Aadhar_number</h2></div>
            <p>{formatDate(item.Aadhar_number)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Licence_number</h2></div>
            <p>{item.Licence_number}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Expiry_date</h2></div>
            <p>{formatDate(item.Expiry_date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Licence_type</h2></div>
            <p>{item.Licence_type}</p>
          </div>

          
         <button  className={styles.cancelButton} onClick={onComplete}>Cancel</button>
        
        </div>
      </div>
    </>
  )
}

export default DriverShowParticular
