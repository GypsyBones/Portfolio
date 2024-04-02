import React from "react";
import './comingSoon.css'
import Footer from "../Footer/Footer";
import { Row, Col } from 'react-bootstrap';


const ComingSoon = () => {
  const directory = window.location.pathname

    return (
      <div className="comingSoon">
        <div className="comingSoon-content cinzel">
          <Row>
            <Col>
              <Row>
                <p className="comingSoon-directory">{directory}</p>
              </Row>
              <Row>
                <p className="comingSoon-pre">This Page Is</p>
              </Row>
              <Row>
                <h3 className="comingSoon-header">Coming Soon</h3>
              </Row>
              <Row>
                <p className="comingSoon-text">
                  This page isn't available right now, but we are working hard to get it ready for you!
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
  
  export default ComingSoon;