import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import evn1 from "../images/evn1.jpg";
import evn2 from "../images/evn2.jpg";
import evn3 from "../images/evn3.jpg";
import evn4 from "../images/evn4.jpg";
import evn5 from "../images/evn5.jpg";
import evn6 from "../images/evn6.jpg";
import evn7 from "../images/evn7.jpg";
import evn8 from "../images/evn8.jpg";
import evn9 from "../images/evn9.jpg";

function Eventone() {
    return(
        <div>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={evn1} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn2} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn3} className="gallery-img" fluid />
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={evn4} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn5} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn6} className="gallery-img" fluid />
                </Col>
            </Row>
            <Row>
                <Col lg={4} className="my-2">
                    <Image src={evn7} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn8} className="gallery-img" fluid />
                </Col>
                <Col lg={4} className="my-2">
                    <Image src={evn9} className="gallery-img" fluid />
                </Col>
            </Row>
            <style>
                {`
                    .gallery-img {
                        border-radius: 10px;
                        -webkit-transition: all 0.5s linear;
                        -o-transition: all 0.5s linear;
                        transition: all 0.5s linear;
                    }

                    .gallery-img:hover {
                        -webkit-filter: drop-shadow(0px 0px 20px rgba(158, 210, 3, 0.8));
                    }
                `}
            </style>
        </div>
    );
};

export default Eventone;