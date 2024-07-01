import styles from '../css/Formcom.module.css';
const RejectForm = () => {
    return (
        <>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className={styles.container3}>
            <form className={styles.form} action='/Home2'>
              
              <div className={styles.row}>
                <div className={styles.col25}>
                  <label>Reason For Rejection :</label>
                </div>
                <div className={styles.col75}>
                  <textarea rows="4" cols="50">

                  </textarea>
                </div>
              </div>
              <div className={styles.row} style={{marginRight:'20px'}}>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          </div>
        </>
      );
}

export default RejectForm
