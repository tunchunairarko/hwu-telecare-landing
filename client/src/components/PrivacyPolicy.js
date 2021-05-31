import React, { Fragment,useEffect } from "react";
import { Row, Col } from 'react-bootstrap'
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
  useEffect(()=>{
    document.title="Privacy policy - HWU Telecare"
  },[])

  return (
    <Fragment>
      <Header />
      <Link class="nav-link" to="/">
        <FaArrowCircleLeft /> Back to home
      </Link>
      <Row style={{ marginTop: "2%" }}>
        <Col sm="12" className="center-content">
          <h2>Privacy Policy</h2>
        </Col>
        <Col sm="12" style={{ marginTop: "2%" }}>
          <p>
            At HWU Telecare, accessible from https://robotcon.isensetune.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HWU Telecare and how we use it.<br />
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact:<br />
          Md Rakin Sarder<br />
          Masters’ student, School of Engineering and Physical Science, Heriot-Watt University<br />
          Email: ms414@hw.ac.uk<br />
          Contact number: +447342120563<br />

          This Privacy Policy applies only to our online activities and is valid for visitors to our web application with regards to the information that they shared and/or collect in HWU Telecare. This policy is not applicable to any information collected offline or via channels other than this web application. Our Privacy Policy was created with the help of the Privacy Policy Generator.<br />
          </p>
          <h4>Consent</h4>
          <p>
            By signing the consent form with the participant information sheet sent to you earlier, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h4>Information we collect</h4>
          <p>
            This prototype web application does not collect any personal information.
            If you contact us directly requesting any additional information, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            When you register for an Account, we may ask for your contact information, including items such as name and email address.
            How we use your information
            We use the information we collect in various ways, including to:
<ul>
              <li>Improve, personalize, and expand our web and telepresence application</li>
              <li>Understand and analyze how you use our web application</li>
              <li>Develop new products, services, features, and functionality</li>
            </ul>
          </p>

          <h4>Log Files</h4>
          <p>HWU Telecare follows a standard procedure of using log files. These files log visitors when they visit web applications. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, referring/exit pages, user events and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for tracking users' movement on the web application and gathering required information to conduct the study.</p>
          <h4>Cookies and Web Beacons</h4>
          <p>Like any other web application, HWU Telecare uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the web application that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information, such as displaying on-screen instructions only for the first time use of the application.
For more general information on cookies, please read "What Are Cookies" from Cookie Consent.</p>
          <h4>Advertising Partners Privacy Policies</h4>
          <p>There are no advertising partners of HWU Telecare.</p>
          <h4>Third Party Privacy Policies</h4>
          <p>HWU Telecare's Privacy Policy does not apply to other advertisers or web applications.</p>
          <h4>GDPR Data Protection Rights</h4>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:<br />
The right to access – You have the right to request copies of your personal data. <br />
The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.<br />
The right to erasure – You have the right to request that we erase your personal data, under any conditions.<br />
The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under any conditions.<br />
The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.<br />
          </p>

          <h4>Children's Information</h4>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.<br />
HWU Telecare does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our web application, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
</p>




        </Col>

      </Row>
    </Fragment>


  );
}
