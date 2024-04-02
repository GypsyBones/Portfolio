import React from "react";
import ComingSoon from "../../Components/Other/ComingSoon/ComingSoon";
import Footer from "../Other/Footer/Footer";

const Home = () => {
    return (
      <div className="home">
        <div className="home-content">
          <ComingSoon />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Home;