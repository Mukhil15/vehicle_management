import { useState } from "react";
import data from "./Data";
import styles from "../css/Table.module.css";
import ApproveForm from "./ApproveForm";
import RejectForm from "./RejectForm";
import { IoMdEye } from "react-icons/io";
const Dynamictable = ({ admin }) => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleApprove = (request) => {
    setSelectedRequest(request);
    setSelectedAction("approve");
  };

  const handleReject = (request) => {
    setSelectedRequest(request);
    setSelectedAction("reject");
  };

  if (selectedAction === "approve") {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ margin: "10px", fontSize: "30px", fontWeight: "bold" }}>
            Approval Details
          </h1>
        </div>

        <ApproveForm request={selectedRequest} />
      </>
    );
  }

  if (selectedAction === "reject") {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ margin: "10px", fontSize: "30px", fontWeight: "bold" }}>
            Rejection Details
          </h1>
        </div>
        <RejectForm request={selectedRequest} />
      </>
    );
  }

  const isAdmin = admin ? (
    <>
      <th>Approval</th>
      <th>Rejection</th>
    </>
  ) : (
    <th>Status</th>
  );

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
              {isAdmin}
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
                {admin ? (
                  <>
                    <td>
                      <button
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          padding: "5px 10px",
                        }}
                        onClick={() => handleApprove(item)}
                      >
                        Approve
                      </button>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          padding: "5px 10px",
                        }}
                        onClick={() => handleReject(item)}
                      >
                        Reject
                      </button>
                    </td>
                  </>
                ) : (
                  <td>{item.Status}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dynamictable;
