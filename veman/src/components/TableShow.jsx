
import data from './Data';
import styles from '../css/Table.module.css';

const Tableshow = ({ admin }) => {
 
  return (
    <div className={styles.whole}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Purpose</th>
              <th>No of persons</th>
              <th>pickup_place</th>
              <th>pickup_time</th>
              <th>destination</th>
              <th>return time</th>
              <th>Approval</th>
              <th>Rejection</th> 
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Sno}</td>
                <td>{item.Purpose}</td>
                <td>{item.No_of_persons}</td>
                <td>{item.Destinstion}</td>
                <td>{item.start_time}</td>
                <td>{item.destination_reach_time}</td>
                <td>{item.return_time}</td>
                    <td>
                      <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px' }} onClick={() => handleApprove(item)}>Approve</button>
                    </td>
                    <td>
                      <button style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }} onClick={() => handleReject(item)}>Reject</button>
                    </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableshow;
