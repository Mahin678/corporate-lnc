import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer py-5 mt-5">
            <Container>
                <Row>
                    <Col>
                    <div className="footer__contact">
                        <h4>
                            Contact
                        </h4>
                        <p>
                            E-mail : corporatelnc@gmail.com
                        </p>
                        <p>
                        <img src="https://i.imgur.com/C4552Yh.png" alt="call-icon"  className="img-fluid"/>
                        0123876434
                        </p>
                       <p>
                           <img src="https://i.imgur.com/TmpUR9V.png" alt="time-icon" />
                           Time: Tus-Mon : 9:00am-6:00pm
                       </p>
                       <p>
                           <img src="https://i.imgur.com/ux5Y3qv.png" alt="location icon" />
                           Map: Sheram 113
                       </p>
                    </div>
                    </Col>
                    <Col>
                    <div className="footer__social">
                        <h4>
                            Social Media
                        </h4>
                    </div>
                    </Col>
                    <Col>
                        <div  className="footer__map">
                            <h4>
                                Social Media
                            </h4>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156389.09519701786!2d20.92111290416586!3d52.23285504398239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sbd!4v1633719422484!5m2!1sen!2sbd"
                             ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;