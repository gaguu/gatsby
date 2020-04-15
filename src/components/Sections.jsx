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
// import {
//
// } from "reactstrap";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)

import Teams from '../components/Teams'
import Projects from '../components/Projects'

class Sections extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper" ref="wrapper">
          <div className="section-space" />
          <Teams />
          <Projects />
        </div>
      </>
    );
  }
}

export default Sections;
