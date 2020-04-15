import React from 'react'
import pic3 from '../assets/images/pic03.jpg';


class Work extends React.Component{

    render (){

        return(
            <>
            <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
        <h2 style={{'fontSize' : '1.4em', 'fontStyle': 'bold', 'fontWeight' : 900}}>
            Our work
          </h2>
          <p style={{'fontSize': '1.2em', 'fontWeight': 30}}>
            We have worked on several apps in different technologies like iOS, Android and React Native, as well as ReactJS for web. We will show you some our previous work, contact with us!
          </p>
        </div>
        </>
        );
    }
}



export default Work;