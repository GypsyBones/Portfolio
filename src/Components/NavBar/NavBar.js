import { React, useState } from "react";
import { Nav, Navbar, Dropdown, Container, Row, Col, Button } from 'react-bootstrap';
import './nav.css';

import DropdownMenu from './Dropdown.js';

import Bars from '../Icons/icons8-menu-squared-50.png';
import Close from '../Icons/icons8-close-50.png';
import Down from '../Icons/icons8-chevron-down-50.png';
import Up from '../Icons/icons8-chevron-up-50.png';


function NavBar () {
    

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const enterMenu = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }; 

    return (
        <Container>
            <Row>
                <Navbar className='navbar fixed-top'>
                    <Col sm="auto" >
                        <Nav.Link href='/' className='navbar-logo'>
                            Sylvia Bones' Portfolio
                        </Nav.Link>
                    </Col>
                    <Col>
                        <div className='menu-icon' onClick={handleClick}>
                            <i> {click 
                                    ? <img src={Close}
                                        className="bare-image"  
                                        alt="close" /> 
                                    : <img src={Bars}  
                                        className="bare-image"
                                        alt="open menu"/>
                                } </i>
                        </div> 
                    </Col>
                    <Col md="9">
                        <Row className={click ? 'nav-menu active' : 'nav-menu'}>
                            <Col md="1"></Col>
                            <Col md="3" className="nav-item">
                                <Nav.Link href='/about' className="nav-links nav-i" onClick={closeMobileMenu}>About</Nav.Link>
                            </Col>
                            <Col md="3"  className="nav-item">
                                <Nav.Link href='/recent' className="nav-links nav-i" onClick={closeMobileMenu}>Recent</Nav.Link>
                            </Col>
                            <Col md="3" className="nav-item">
                                <Dropdown className="nav-links">
                                    <Dropdown.Toggle
                                    className="nav-item-dropdown" 
                                    id="collapsible-nav-dropdown"
                                    onMouseOver={()=>{enterMenu()}}>
                                        <span className="nav-username">
                                            <Nav.Link href='/projects' className="dropdown-text nav-i">
                                                Projects
                                            </Nav.Link>
                                            <i>{click 
                                                ? <img src={Up}
                                                    className="bare-image2 nav-i"  
                                                    alt="close" /> 
                                                : <img src={Down}  
                                                    className="bare-image2 nav-i"
                                                    alt="open menu" />
                                                }</i>
                                        </span>
                                    </Dropdown.Toggle>
                                    {dropdown && <DropdownMenu />}
                                </Dropdown>
                            </Col>
                            <Col md="2">
                                <Button href="/contact">
                                    Join the Waitlist!
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Navbar>
            </Row>
        </Container>
    );
};
  
  export default NavBar;