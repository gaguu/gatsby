import React from "react";
import pic1 from '../assets/images/pic01.jpg';


class What extends React.Component {

      render() {
        return (
          <>
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
        <h2 style={{'fontSize' : '1.4em', 'fontStyle': 'bold', 'fontWeight' : 900}}>
            What do we offer?
          </h2>
          <p style={{'fontSize': '1.2em', 'fontWeight': 30}}>
            We offer programming services to technological companies looking either for programming support or to develop new innovative ideas.
            <br /><br />
            We are specialized in mobile and web technologies. Our strong technologies are React Native, React JS, GraphQL and Ruby on Rails. We use agile methodologies, increasing dramatically productivity and quality in a short delivery period.
          </p>
        </div>
          </>
        );
      }
    }

export default What;