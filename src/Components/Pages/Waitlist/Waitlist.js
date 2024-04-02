import {React, useRef } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

import Footer from "../../Other/Footer/Footer.js";
import WaitlistButton from "./WaitlistButton";
import './waitlist.css'




const Waitlist = () => {

  const FORMFACADE_URL = "https://formfacade.com/include/116843666599781547797/form/1FAIpQLSesRLH5mJpWSn6ccz7-PHUzkqv_qcFDfq8HXehoX2TQJJbnCA/classic.js/?div=ff-compose"
  const onSubmitForm = () => {
    console.log('Form submitted');
  };

  const ref = useRef(null);
  const scrollDown = () => {
    //ref.current?.scrollIntoView({block: "start", inline: "center", behavior: "smooth", duration: 2000})
    window.scrollTo(0, window.innerHeight*1)
  };

    return (
      <div>
        <div className="waitlist">
          <div className="waitlist-landing">
              <h1 className="waitlist-header cinzel">
                Join the Waitlist
              </h1>
              <WaitlistButton scrollDown={scrollDown} />
          </div>
          <div ref={ref}>
            <FormfacadeEmbed 
              className="formFacade"
              id="formFacade"
              formFacadeURL={FORMFACADE_URL}
              onSubmitForm={onSubmitForm}
            />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
        
    );
  };
  
  export default Waitlist;