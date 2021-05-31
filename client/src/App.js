
import React from "react";
import { Link,BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Container} from 'react-bootstrap'
import CookieConsent from "react-cookie-consent";

export default function App() {
  return (
    <div className="HWUApp">
      <Container style={{ marginTop: "5%" }}>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <LandingPage />} />
            <Route path="/privacy-policy" exact component={() => <PrivacyPolicy />} />
          </Switch>
          <CookieConsent>
            By consenting to participate and visiting this application you agree with our <Link to="/privacy-policy">Privacy Policy</Link>.</CookieConsent>
          <Footer />
        </Router>
      </Container>
    </div>
  );
}