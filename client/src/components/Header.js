import React, { Fragment } from 'react'
import logo from '../hwulogo.png';
import carelogo from '../care_group.png';
import '../App.css';
import { Row, Col } from 'react-bootstrap'
export default function Header() {
    return (
        <Fragment>
            <Row>
                <Col sm="12" className="center-content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={carelogo} className="App-logo" alt="logo" />
                </Col>
                <Col sm="12" className="center-content">
                    <h1>HWU TELECARE</h1>
                </Col>
            </Row>
        </Fragment>
    )
}
