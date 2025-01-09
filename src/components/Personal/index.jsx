import Navbar from "../../assets/genericComponents/Navbar";
import AllData from "./AllData";
import Girl from "./Girl";
import Footer from "./Footer";

function index() {
  return (
    <div>
      <Navbar />
      <AllData />
      <div className="girl">
        <Girl />
      </div>
      <Footer/>
    </div>
  );
}

export default index;
