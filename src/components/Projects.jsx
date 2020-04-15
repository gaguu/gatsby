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
import React from 'react';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

class Projects extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <div className="projects-1">
            <div className="projects-1">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto text-center mb-5" lg="8">
                    <h2
                      className="title"
                      style={{
                        fontSize: '1.4em',
                        fontStyle: 'bold',
                        fontWeight: 900,
                      }}
                    >
                      Some of Our Awesome Projects
                    </h2>
                    <h4
                      className="description"
                      style={{ fontSize: '15px', fontWeight: '40' }}
                    >
                      Projects we are currently managing
                    </h4>
                  </Col>
                </Row>
              </Container>

              <Container>
                <Row>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left" />
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.xomodigital.crf">
                          <picture>
                            <source
                              srcset={require('../assets/img/crf.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/crf.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle
                          className="mb-0"
                          tag="h4"
                          style={{ fontSize: '20px' }}
                        >
                          CRF
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2"></CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.tctmd.app">
                          <picture>
                            <source
                              srcset={require('../assets/img/tct.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/tct.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle
                          className="mb-0"
                          tag="h4"
                          style={{ fontSize: '20px' }}
                        >
                          TCT
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2"></CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.sivasdescalzo.svd_app">
                          <picture>
                            <source
                              srcset={require('../assets/img/svd.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/svd.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle
                          className="mb-0"
                          tag="h4"
                          style={{ fontSize: '20px' }}
                        >
                          SVD
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2"></CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.bclubber">
                          <picture>
                            <source
                              srcset={require('../assets/img/bclever.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/bclever.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Bclever
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2"></CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.bclever.entrancer">
                          <picture>
                            <source
                              srcset={require('../assets/img/entrancer.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/entrancer.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Entrancer
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2"></CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="https://play.google.com/store/apps/details?id=com.mediconecta.mediconecta1">
                          <picture>
                            <source
                              srcset={require('../assets/img/mediconecta.webp')}
                              type="image/webp"
                              className="img-fluid rounded-circle shadow"
                            />
                            <img
                              alt="..."
                              className="img-fluid rounded-circle shadow"
                              src={require('../assets/img/mediconecta.png')}
                              style={{ width: '100px' }}
                            />
                          </picture>
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Mediconecta
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>{' '}
      </>
    );
  }
}

export default Projects;
