import { useState, useEffect } from "react";
import axios from "axios";
import styles from '../css/Table.module.css';
import { IoMdEye } from "react-icons/io";
import VehicleShowParticular from "./VehicleShowParticular";
//https://chatgpt.com/share/afb59888-9f78-4148-b79f-b83a4fab553d
const TableVehicle = ({onCancel,onAppear}) => {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    return formattedDate;
  };

  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("vehicle_id"); // Default search field is vehicle_id
  const[displayParticlar,setdisplayParticlar]=useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/VehicleMaster/")
      .then((response) => setVehicles(response.data))
      .catch((err) => console.log(err));
  }, []);

  if(!displayParticlar){
    onAppear();
  }
  const handleDisplayParticular = (item) => {
    setdisplayParticlar(item);
    onCancel();
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchField(e.target.value);
    
    setSearchTerm(""); // Clear search term when selecting a new field
  };

  // Filter vehicles based on selected search field and search term
  const filteredVehicles = vehicles.filter((vehicle) => {
    const fieldValue = String(vehicle[searchField]).toLowerCase(); // Convert field value to string and lowercase

    // Handle different types of fields for filtering
    if (typeof vehicle[searchField] === "string") {
      return fieldValue.includes(searchTerm.toLowerCase());
    } else if (typeof vehicle[searchField] === "number") {
      return fieldValue.includes(searchTerm.toLowerCase());
    } else if (searchField === "Registration_Date" || searchField === "Fitness_Certificate_Next_Inspection_Date" || searchField === "Fitness_Certificate_Expiry_Date") {
      // Date field search logic
      const dateValue = formatDate(vehicle[searchField]).toLowerCase();
      return dateValue.includes(searchTerm.toLowerCase());
    } else {
      return false; 
    }
  });

  return (
    <>
    {!displayParticlar && (<div className={styles.whole}>
        <div className={styles.searchbar}>
          <select value={searchField} onChange={handleSelectChange}>
            <option value="vehicle_id">Vehicle ID</option>
            <option value="Default_Driver">Default Driver</option>
            <option value="Type_of_vehicle">Type of Vehicle</option>
            <option value="vehicle_number">Vehicle Number</option>
            <option value="Registration_Date">Registration Date</option>
            <option value="Fitness_Certificate_Next_Inspection_Date">Fitness Certificate Next Inspection Date</option>
            <option value="Fitness_Certificate_Expiry_Date">Fitness Certificate Expiry Date</option>
          </select>
          {searchField === "Registration_Date" || searchField === "Fitness_Certificate_Next_Inspection_Date" || searchField === "Fitness_Certificate_Expiry_Date" ? (
            <input
              type="date"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          ) : (
            <input
              type="text"
              placeholder={`Search by ${searchField.replace('_', ' ')}`}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          )}
        </div>
        <div className={styles.table}>
          {filteredVehicles.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No results found.</p>
          ) : (
            <div className={styles.tablehead} >
            <table>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Vehicle_Id</th>
                  <th>Type_of_Vehicle</th>
                  <th>Vehicle_Number</th>
                  <th>Default_Driver</th>
                  <th>Registration_Date</th>
                  <th>Fitness_Certificate_Next_Inspection_Date</th>
                  <th>Fitness_Certificate_Expiry_Date</th>
                  <th>Road_tax</th>
                  <th>Permit</th>
                  <th>Green_Tax</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.vehicle_id}</td>
                    <td>{item.Type_of_vehicle}</td>
                    <td>{item.vehicle_number}</td>
                    <td>{item.Default_Driver}</td>
                    <td>{formatDate(item.Registration_Date)}</td>
                    <td>{formatDate(item.Fitness_Certificate_Next_Inspection_Date)}</td>
                    <td>{formatDate(item.Fitness_Certificate_Expiry_Date)}</td>
                    <td>{item.Road_tax}</td>
                    <td>{item.Permit}</td>
                    <td>{item.Green_Tax}</td>
                    <td>
                      <button onClick={()=>handleDisplayParticular(item)}>
                        <IoMdEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>)}
      {displayParticlar && <VehicleShowParticular item={displayParticlar}  onComplete={()=>{setdisplayParticlar(null);}}/>}
      
    </>
  );
};

export default TableVehicle;
