import styles from "../css/Showparticular.module.css";

const ShowParticular = ({ item, onComplete }) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    return formattedDate;
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Request:</h1>
        <div className={styles.displayContainer}>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Purpose</h2></div>
            <p>{item.Purpose}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>No of persons</h2></div>
            <p>{item.No_of_person}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Pickup Place</h2></div>
            <p>{item.pickup_place}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Pickup Date</h2></div>
            <p>{formatDate(item.pickup_Date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Pickup Time</h2></div>
            <p>{item.pickup_time}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Destination</h2></div>
            <p>{item.destination}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Return Date</h2></div>
            <p>{formatDate(item.Return_Date)}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Return Time</h2></div>
            <p>{item.Return_Time}</p>
          </div>
          <div className={styles.eachContent}>
            <div className={styles.title}><h2>Status</h2></div>
            <p>{item.Status}</p>
          </div>
         <button  className={styles.cancelButton} onClick={onComplete}>Cancel</button>
        
        </div>
      </div>
    </>
  );
};

export default ShowParticular;
