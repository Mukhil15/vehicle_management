
import TopBar from "../components/Topbar";



const Home = () => {

  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-GB', options);
  return (
    <>
      <TopBar admin={false} />
     
      <div>
        <h1>Welcome Back...!</h1>
        <p>Date: {formattedDate}</p>
      </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0px', flexDirection: "column" }}>
     <button >Add Request</button>
          </div>
       

    </>
  );
};

export default Home;
