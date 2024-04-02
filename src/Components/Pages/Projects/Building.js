import React from "react";
import ComingSoon from "../../Other/ComingSoon/ComingSoon";
import Footer from "../../Other/Footer/Footer";


const Building = () => {
    return (
      <div className="building">
        <div className="building-content">
          <ComingSoon />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Building;