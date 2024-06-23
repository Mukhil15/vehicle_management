import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // You might need to install react-icons using npm or yarn
import img from '../assets/logo.png';

import img2 from '../assets/image.png'; // This should be dynamically set based on user
import styles from '../css/Topbarc.module.css';

const Topbar = ({ admin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cen = admin ? (
    <div className={`${styles.navv} ${menuOpen ? styles.navOpen : ''}`}>
      <Link to="/Home2" onClick={toggleMenu}>Home</Link>
      <Link to="/BusMaster" onClick={toggleMenu}>VehicleMaster</Link>
      <Link to="/DriverMaster" onClick={toggleMenu}>DriverMaster</Link>
    </div>
  ) : (
    <></>
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img} className={styles.img} alt="Logo" />
        {cen}
      </div>
      <div className={styles.right}>
        <div className={styles.profile}>
        <Link to='/'> <img src={img2} className={styles.img2} alt="Profile" /></Link>
          <Link to='/' className={styles.logoutButton}>MUKHIL S</Link>
        </div>
       {admin && <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>} 
      </div>
    </div>
  );
};

export default Topbar;
