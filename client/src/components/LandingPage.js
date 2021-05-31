
import React, { useState, Fragment, useEffect } from 'react';

import '../App.css';
import { Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player"
import Header from './Header';

export default function LandingPage() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title="Home - HWU Telecare"
  },[])
  
  const components = [
    <div>
      <Row style={{ marginTop: "2%" }}>
        <Col sm="12" className="center-content">
          <h3>Welcome to our pilot study</h3>
        </Col>
        <Col sm="12" style={{ marginTop: "2%" }}>
          <p>Thank you for accepting our invitation to participate in this study. You will be testing a prototype of the telepresence application that we are currently designing for elder care and support. But before we move forward to the experiment details and instructions, we believe it is important for you to know what you will be testing. Below you will find a short video clip that showcases the application prototype and its current features.</p>
          <p>We advise you to watch this short video clip before moving on to the next stage. You can opt to skip the video and move to the experiment design and instruction page by clicking the next button.</p>
          
        </Col>
        <Col sm="12" className="center-content" style={{ marginTop: "2%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ug50zmP9I7s"
          />
        </Col>
      </Row>
    </div>,
    <div></div>
  ]


  return (
    <Fragment>
      <Header/>
      {
        components[count]
      }
      {/* show previous button if we are not on first element */}

      <Row style={{ marginTop: "2%" }}>
        <Col sm="12" className="center-content">
          {count > 0 && <Button variant="primary" size="lg" onClick={() => setCount(count - 1)}>Previous</Button>}

          {/* hide next button if we are at the last element */}
          {count < components.length - 1 && <Button variant="primary" size="lg" onClick={() => setCount(count + 1)}>Next</Button>}
        </Col>
      </Row>
    </Fragment> 
  );
}


