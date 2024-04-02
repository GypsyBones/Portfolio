import React from "react";
import ComingSoon from "../../Components/Other/ComingSoon/ComingSoon";
import Footer from "../Other/Footer/Footer";


const Recent = () => {
    return (
      <div className="recent">
        <div className="recent-content">
          <ComingSoon />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Recent;