import React from "react";

import FormfacadeEmbed from "@formfacade/embed-react";
 
const FORMFACADE_URL = "https://formfacade.com/include/116843666599781547797/form/1FAIpQLSesRLH5mJpWSn6ccz7-PHUzkqv_qcFDfq8HXehoX2TQJJbnCA/classic.js/?div=ff-compose"



const Contact = () => {
  const onSubmitForm =() => {
    console.log('Form submitted');
  }

    return (
      <div className="contact">
        <h3>Contact</h3>
        <FormfacadeEmbed
          formFacadeURL={FORMFACADE_URL}
          onSubmitForm={onSubmitForm}
        />
      </div>
    );
  };
  
  export default Contact;