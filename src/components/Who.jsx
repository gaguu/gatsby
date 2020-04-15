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

class Who extends React.Component {

  render() {
    return (
      <>
        <div className="cd-section" id="who">
            <div className="inner">
            <header className="major">
                <h2 style={{'fontSize' : '1.4em', 'fontStyle': 'bold', 'fontWeight' : 900}}>
                WHO ARE WE?
                </h2>
                <p style={{'fontSize': '1.2em', 'fontWeight': 30}}>
                We are an experienced group of developers that came together a few years ago in order to
                <br />
                develop amazing and innovative stuff. We are passionate about what we do, we love new challenges, and we like to work with the latest techonlogies.
                </p>
            </header>
            </div>
        </div>{" "}
      </>
    );
  }
}

export default Who;
