import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className="text-white mt-3">{bio}</p>
            </Col>
          </Row>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <p>JLN RADIAL LR MELATI I NO1117 24 ILIR BUKITKECIL</p>
          <p>KOTA PALEMBANG 30127</p>
          <p>INDONESIA</p>
          <b></b>
          <p>+62 895711253335</p>
          <p>lalunah854@gmail.com</p>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
