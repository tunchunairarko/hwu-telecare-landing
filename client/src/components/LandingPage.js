
import React, { useState, Fragment, useEffect } from 'react';
import { isMobile } from 'react-device-detect'
import '../App.css';
import { Button, Row, Col,Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player"
import Header from './Header';
import OldManPhoto from '../old-man.png'
import HelpModal from './HelpModal';

export default function LandingPage() {
  const [count, setCount] = useState(0);
  const [showHelp,setShowHelp] = useState(false)
  useEffect(() => {
    document.title = "Welcome to HWU Telecare"
  }, [])
  
  useEffect(()=>{
    console.log(count)
  },[count])

  const components = [
    <Fragment>
      <Row style={{ marginTop: "2%" }}>
        <Col sm="12" className="center-content">
          <h3>Welcome to our pilot study</h3>
        </Col>
        <Col sm="12" style={{ marginTop: "2%" }}>
          <p>Thank you for accepting our invitation to participate in this study. You will be testing a prototype of the telepresence application that we are currently designing for elder care and support. To be more precise, you will be experimenting with:
            <ul>
              <li>The web user interface for telepresence</li>
              <li>The telepresence control of the robot</li>
              <li>Two utility tools to perform remote checkup using the robot</li>
            </ul> 
          </p>
          <p>
            Things that you will need to conduct this experiment:
            <ul>
              <li>
                A laptop/desktop PC
            </li>
              <li>
                An internet connection
            </li>
              <li>
                Any web browser other than Internet Explorer
            </li>
            </ul>
          </p>
          <p>But before we move forward to the experiment details and instructions, we believe it is important for you to see what you will be testing. Below you will find a short video clip that showcases the application prototype and its current features. We advise you to watch this short video clip before moving on to the next stage. You can opt to skip the video and move to the experiment design and instruction page by clicking the next button.</p>

        </Col>
        <Col sm="12" className="center-content" style={{ marginTop: "2%" }}>
          <ReactPlayer
            url="https://youtu.be/lPs1DQs5lvk"
          />
        </Col>
      </Row>
    </Fragment>,
    <Fragment>
      <Row style={{ marginTop: "2%" }}>
        <Col sm="12">
          <h3>The experiment persona</h3>
        </Col>
        <Col sm="7" style={{ marginTop: "2%" }}>
          <p>Mauro is a teacher at a university. He is currently on leave as he is recovering from a recent knee surgery. He also needs to take pills to control his high blood pressure.</p>
          <p>Mauro is currently living alone in an apartment. He prefers routine checkups at home because of his current knee condition. He does not mind using welfare technologies for care and support. </p>
          <p>You will be having a chat with Mauro and provide some general consultation using our application</p>
        </Col>
        <Col sm="5" >
          <Image src={OldManPhoto} style={{maxWidth:'70%'}}/>
        </Col>
        
      </Row>
      <Row style={{ marginTop: "2%" }}>
      <Col sm="12">
          <h3>The tasks</h3>
        </Col>
        <Col sm="12" style={{ marginTop: "2%" }}>
          <p>Your primary task will be to teleconsult Mauro using this telepresence application. Mauro is currently at his residence accompanied by the robot which you are going to use. You will conduct a routine checkup with some utility tools available on the robot and in this applcation.</p>
          <p>You will need to go through the following steps in order to complete your task: </p>
          <h4>Stage one</h4>
          <p>Time to complete: 10 minutes</p>
          <ol>
            <li>Start the Telecare application (link at the bottom of this page)</li>
            <li>Register a new account at HWU Telecare</li>
            <li>Go through the on-screen instructions to introduce yourself with the components of the user interface</li>
            <li>Check connecting and disconnecting with the robot</li>
            <li>Test and practice using each components</li>
            <li>Practice navigation, using the keyboard</li>
          </ol>
          <h4>Stage two</h4>
          <p>Time limit: None</p>
          <ol>
            <li>Logout/disconnect from your dashboard</li>
            <li>Wait for a few minutes (3~5), then log back in</li>
            <li>Start a teleconference call by clicking "Join". You will find the remote user in front of the robot.</li>
            <li>Introduce yourself to the remote use and start a conversation with him</li>
            <li>In the middle of your conversation the remote user may ask you that he would like to have a cup of tea/coffee. Follow the user so that you can continue you chat.</li>
            <li>The remote user finishes making the cup of coffee, then moves back to the couch. Follow the user back.</li>
            <li>Use the vital measurement toolbox on the dashboard toolbox to measure the remote user's vitals. Before you start the measurement you must tell the remote user that he/she/they need to stay still. The robot will take vital measurement (pulse/temperature/blood pressure) without contact, so if he/she/they moves, then the reading may get corrupted</li>
            <li>Once you start a measurement it takes 5 - 9 seconds to complete. </li>
            <li>Next set a reminder/save notes for the robot. When you set up a reminder to the robot, the robot will find the remote user in the apartment itself and speak the reminder to him/her/them. Use the reminder toolkit on the dashboard to set up a reminder (details about how to set up a reminder can be found in the help section)</li>
            <li>If you are finished with your conversation, taking measurement and setting reminders/notes, then you can end the call and logout. After you logout, then come back to this page, and fill up a questionnaire to let us know about your experience (Link at the bottom). It will take 10-15 minutes to complete the questionnaire.</li>
          </ol>
          <h4>Stage three</h4>
          <p>Time limit: N/A</p>
          <ul>
            <li>If you are finished with your conversation, taking measurement and setting reminders/notes, then you can end the call and logout. After you logout, then come back to this page, and fill up a questionnaire to let us know about your experience (Link at the bottom). It will take 10-15 minutes to complete the questionnaire.</li>
          </ul>
          
        </Col>
        
      </Row>
      <Row style={{marginTop:'2%'}}>
      <Col sm="6" className="center-content" style={{ marginTop: "2%" }}>
          {
            isMobile ?
              <Button variant="secondary" size="lg" block  disabled>
                Please use a pc to join this experiment
              </Button>
              :
              <a href="https://robotcon.isensetune.com" className="btn btn-primary btn-block btn-lg" target="_blank" >Go to the main application</a>
              // <Button variant="primary" size="lg" block style={{margin:"0% 20%"}}>
              //   Go to the main application
              // </Button>
          }
        </Col>
        <Col sm="6" className="center-content" style={{ marginTop: "2%" }}>
            <Button variant="success" onClick={()=>setShowHelp(true)} size="lg" block >
              How to use HWU Telecare
            </Button>
        </Col>
        <Col sm="12" className="center-content" style={{ marginTop: "2%" }}>
          <a href="https://forms.office.com/r/NgiQcNNk7N" className="btn btn-primary btn-block btn-lg" target="_blank" style={{margin:"0% 20%"}}>Fill out the questionnaire</a>
        </Col>
      </Row>
    </Fragment>
  ]


  return (
    <Fragment>
      <Header />
      {
        components[count]
      }
      {/* show previous button if we are not on first element */}
      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />
      <Row style={{ marginTop: "2%" }}>
        <Col sm="12" className="center-content">
          {count > 0 && <Button variant="primary" size="lg" onClick={() => setCount(count - 1)}>Go back</Button>}

          {/* hide next button if we are at the last element */}
          {count < components.length - 1 && <Button variant="primary" size="lg" onClick={() => setCount(count + 1)}>Next</Button>}
        </Col>
      </Row>
    </Fragment>
  );
}


