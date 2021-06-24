import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Row>
                <Col sm="12">
                    <Link className="footer-links" to="/privacy-policy">
                        Privacy Policy
                    </Link>
                    <a target="_blank" rel="noreferrer" className="footer-links" href="http://care.hw.ac.uk/">
                        CARE Group
                    </a>
                    <a target="_blank" rel="noreferrer" className="footer-links" href="https://ralt.hw.ac.uk/">
                        RALT
                    </a>
                    {/* <a href="" className="footer-links">Privacy policy</a>
                    <a href="#" className="footer-links">About CARE group</a>
                    <a href="#" className="footer-links">RALT Website</a> */}
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;