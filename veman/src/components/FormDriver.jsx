import styles from '../css/Formcom.module.css'
const FormDriver = () => {
  return (
    <>
    <div className={styles.container}>
      <form className={styles.form} action='/DriverMaster'>
        <div className={styles.row}>
          <div className={styles.col25}>
        <label>Name :</label>
        </div>
        <div className={styles.col75}>
        <input id="name" type="text"/>
        </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col25}>
        <label>Age :</label>
        </div>
        <div className={styles.col75}>
        <input id="Age" type="number"/>
        </div>
        </div> 
        <div className={styles.row}>
          <div className={styles.col25}>
  
        <label>Licence_Number :</label>
        </div>
        <div className={styles.col75}>
        <input id="Licence_Number" type="number"/>
        </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col25}>
        <label>Expiry_Date :</label>
        </div>
        <div className={styles.col75}>
        <input id="Expiry_Date" style={{padding:'10px'}} type="date"/>
        </div>
        </div>
        
        
        <div className={styles.row}>
          <div className={styles.col25}>
        <label>Licence_Type :</label>
        </div>
        <div className={styles.col75}>
          <select id="Licence_Type"  style={{padding:'10px'}}>
          <option value="">Select Licence Type</option>
        <option value="Two_Wheeler">Two Wheeler</option>
        <option value="LMV">Light motor vehicles(LMV)</option>
        <option value="HMV">Heavy Motor Vehicles(HMV)</option>
        <option value="HGMV">Heavy Goods Motor Vehicle(HGMV)</option>
        </select>
        </div>
        </div>
        
        <div className={styles.row}>
        <input type="submit" style={{marginTop:'50px'}} value="Submit"/>
     </div>
      </form>
      </div>
    </>
  )
}

export default FormDriver
