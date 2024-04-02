import { React, useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import { MDBFooter, MDBContainer, MDBRow, MDBInput, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './footer.css'

//Deployment ID = AKfycbwBIESj30EEYAp9_9MEElDV_jk05GDeuUjeJBnRQOasxn9UlyZ4u7sfizzpHKDM4FWo6A
//web app url = https://script.google.com/macros/s/AKfycbwBIESj30EEYAp9_9MEElDV_jk05GDeuUjeJBnRQOasxn9UlyZ4u7sfizzpHKDM4FWo6A/exec


const Footer = () => {
    const NEWSLETTER_URL = "https://script.google.com/macros/s/AKfycbxoMD9_7fjS_P8YZdh6SRsnTHugXXdKQcouno9ycB_NPFEUFzt6z0D_yy7-oyvJ5vyTWQ/exec"
    
    const [validation, setValidation] = useState('none');
    const [nameFill, setNameFill] = useState('none')
    const [formEmail, setFormEmail] = useState("");
    const [formName, setFormName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        let value = e.target.value;
        let inputName = e.target.name
    //inputName targets the 'name' key:value in the event's info
        if (inputName === "email") {
            setFormEmail(value);
            validate(value);
    //validate email through regex string
        } else if (inputName === "name") {
            setFormName(value);
            setNameFill(true);
    //'true' trigger make sure that the input field has something in it before submission is allowed
        }};
    

    useEffect(() => {
        console.log('useEffect has been called');
        console.log('validation test:', validation);
        if (validation === true && isSubmit === true) {
            setFormName("");
            setFormEmail("");
            setValidation('none');
            setNameFill('none');
            setIsSubmit(false);
            toast.success('Your Form has been Submitted!');
        }
    }, [validation, isSubmit]);
//TODO - toast doesn't work
// useEffect here is used to continually check to see if validation and submit is 
//true in order to reset everything 

    const validate = (value) => {
//validates email with regex string
        console.log('validate this:', value);
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        console.log('regex test: ', regex.test(value));
        if (regex.test(value) === true) {
            setValidation(true);
//validation is true, allows submission to occur
            console.log('validate:', validation);
        } else {
            setValidation(false);
            console.log('validate:', validation);
        }
    }

    const handleSubmit = (e) => {
        console.log("name, email:", formName, formEmail)
        e.preventDefault();
        if (validation === true && nameFill === true) {
            fetch(NEWSLETTER_URL, {
                method: 'POST',
                body: JSON.stringify({
                    Email: formEmail,
                    Name: formName
                })
            })
            .then(res => res.json())
            .then(console.log)
            .catch(console.error)

            setIsSubmit(true);
            console.log('isSubmit:', isSubmit);
        } else if (nameFill === 'none' && validation === true) {
            setNameFill(false);
            console.log('nameFill:', nameFill);
        } else {
            setNameFill(false);
            setValidation(false);
        }
        
    }

//TODO - attach footer to bottom of page
    return (
        <MDBFooter className='footer'>
            <ToastContainer />
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
                        <MDBCol sm="3">
                            <MDBInput 
                            type='text' 
                            className="greyInput"
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
                        <MDBCol sm="3">
                            <MDBInput 
                                type='text' 
                                className="greyInput"
                                id='email' 
                                name="email"
                                placeholder='Email address' 
                                value={formEmail}
                                onChange={handleChange}
                            />
                            { validation === false
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
            <MDBContainer>
                <Row className="footer-text">
                    <Col md="3" />
                    <Col md="3">
                        <p className='footer-text'>
                            © 2024 Copyright
                        </p>
                    </Col>
                    <Col md="1" >
                        <a className='footer-text' href='https://linktr.ee/sylviabones'>
                          LinkTree   
                        </a>
                    </Col>
                    <Col md="5" />
                </Row>
            </MDBContainer>
        </MDBFooter>
    );
  };

export default Footer;