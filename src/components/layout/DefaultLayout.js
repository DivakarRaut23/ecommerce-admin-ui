import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import {Container,Row, Col} from 'react-bootstrap'

import './defaultlayout.style.css'


const DefaultLayout = ({children}) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                <div className="left-bar">
                    I am from left Menu
                </div>
                </Col>
                <Col xs={8}>
                <div className="main">
                <Header/>
                {children}
                <Footer/>
                </div>
                </Col>
            </Row>
           
        </Container>
    )
}

export default DefaultLayout
