import Tableshow from "../components/Tableshow";
import Topbar from "../components/Topbar";

const Home2 = () => {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-GB', options);
  return (
    <>
      <Topbar admin={true} />
      <div className="Welcome.content">
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Tableshow admin={true} />
      </div>
    </>
  );
};

export default Home2;
