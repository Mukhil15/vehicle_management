import { Link } from 'react-router-dom';
import img from '../assets/logo2.png'
import styles from '../css/Loginc.module.css'
const Login = () => {
  return (
    <div className={styles.full}>
      <div className={styles.container}>
      <h1>Vehicle Management</h1>
      <div>Welcome To Veman!</div>
      <img src={img} className={styles.img}/>
        
        
        <Link to="/Home">
          <button>
            Sign in with Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
