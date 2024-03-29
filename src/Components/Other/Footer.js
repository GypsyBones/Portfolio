import { React, useState, useEffect } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBInput, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


//Deployment ID = AKfycbwBIESj30EEYAp9_9MEElDV_jk05GDeuUjeJBnRQOasxn9UlyZ4u7sfizzpHKDM4FWo6A
//web app url = https://script.google.com/macros/s/AKfycbwBIESj30EEYAp9_9MEElDV_jk05GDeuUjeJBnRQOasxn9UlyZ4u7sfizzpHKDM4FWo6A/exec


const Footer = () => {
    const NEWSLETTER_URL = "https://script.google.com/macros/s/AKfycbwBIESj30EEYAp9_9MEElDV_jk05GDeuUjeJBnRQOasxn9UlyZ4u7sfizzpHKDM4FWo6A/exec"
    
    const [verified, setVerified] = useState('none');
    const [nameFill, setNameFill] = useState('none')
    const [formEmail, setFormEmail] = useState("");
    const [formName, setFormName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name
        if (inputName === "email") {
            setFormEmail(value);
            validate(value);
        } else if (inputName === "name") {
            setFormName(value);
            setNameFill(true);
        }
        console.log();
    };

    useEffect(() => {
        console.log('useEffect has been called');
        console.log('verified test:', verified);
        if (verified === true && isSubmit) {
            navigate('/');
        }
    });

    const validate = (value) => {
        console.log('validate this:', value);
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        console.log('regex test: ', regex.test(value));
        if (regex.test(value) === true) {
            setVerified(true);
            console.log('validate:', verified);
        } else {
            setVerified(false);
            console.log('validate:', verified);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (verified === true && nameFill === true) {
            setIsSubmit(true);
            console.log('isSubmit:', isSubmit);
        } else if (nameFill === 'none') {
            setNameFill(false);
            console.log('nameFill:', nameFill);
        }
        
    }

    
    return (
        <MDBFooter className='text-center text-white footer'>
          <MDBContainer className='p-4 pb-0'><hr/>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <MDBRow>
                    <MDBCol>
                        <h3>
                            <strong>Sign Up for our Newsletter!</strong>
                        </h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='d-flex justify-content-center g-4'>
                    <MDBCol md="3">
                        <MDBInput 
                        type='text' 
                        id='name' 
                        name="name"
                        placeholder='Name' 
                        value={formName}
                        onChange={handleChange}
                    />
                    { nameFill === false
                        ? 
                        <p className="text-danger">
                            Please enter your Name
                        </p> 
                        : 
                        <p></p>
                    }
                    </MDBCol>
                    <MDBCol md="3">
                        <MDBInput 
                            type='text' 
                            id='email' 
                            name="email"
                            placeholder='Email address' 
                            value={formEmail}
                            onChange={handleChange}
                        />
                        { verified === false
                            ? 
                            <p className="text-danger">
                                That is not a valid email!
                            </p> 
                            : 
                            <p></p>
                        }
                    </MDBCol>
                    <MDBCol size='auto' className='mb-4 mb-md-0'>
                        <MDBBtn type='submit'>Subscribe</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright: 
            <a className='text-white' href='https://linktr.ee/sylviabones'>
              LinkTree
            </a>
          </div>
        </MDBFooter>
    );
  };

export default Footer;