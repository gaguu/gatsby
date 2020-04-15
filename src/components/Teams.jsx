/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components


class Teams extends React.Component {

  render() {
    return (
      <>
        <div className="cd-section" id="teams">

          {/* ********* TEAM 2 ********* */}
          <div className="team-2">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{'fontSize' : '1.4em', 'fontStyle': 'bold', 'fontWeight' : 900}}>The Team</h2>
                  <h4 className="description" style={{'fontSize' : '15px','fontWeight' : '50'}}>
                    Our People
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Manuel Ibáñez</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/manuelWebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{display : 'block'}}>CEO - Backend Developer</h3>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Daniel Sierra</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/danielWebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{display : 'block'}}> CTO - Frontend Developer</h3>
                     
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image" style={{}}>
                      <h4 className="title">Vicente Quesada</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/vicenteWebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{ marginBottom: 38, display : 'block'}}>React Developer</h3>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Daniel Febres</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/daniel2WebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{display : 'block'}}>React Developer</h3>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Luisana Alcazar</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/luisianaWebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{display : 'block'}}>UX / Designer</h3>
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Sergio Blanco</h4>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("../assets/img/team/troncoWebLow.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title" style={{display : 'block'}}>Mobile Developer</h3>
                      
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END TEAM 2 ********* */}
             </div>{" "}
      </>
    );
  }
}

export default Teams;
