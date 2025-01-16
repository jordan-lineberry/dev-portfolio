import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2" style={{ color: 'white' }}>
          <Row className="">
            <Col className="order-lg-2" lg="6">
                <h5 style={{ color: 'white' }}>Where to find me</h5>

                <p>
                  JLN RADIAL LR MELATI I NO1117 24 ILIR BUKITKECIL<br />
                  KOTA PALEMBANG 30127, INDONESIA
                </p>

                <h5 style={{ color: 'white' }}>Contact</h5>

                <p>
                  <b>Email: </b>lalunah854@gmail.com <br></br>
                  <b>Phone: </b>+62 895711253335
                </p>

            </Col>
            <Col lg="6" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className="text-white mt-3">{bio}</p>
            </Col>
          </Row>
        </div>
        <div className="row contact-info">
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
