import React, { Component } from 'react';
import AboutMe from './AboutMe.js';
import MyTown from './MyTown.js';

const buttonStyle = {
    backgroundColor: 'blue',
    color : "black"
};

class Home extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      showAboutMeComponent: true,
      showMyTownComponent: false
    }; 
}
  onButtonAboutMeClick() {
    this.setState({
      showAboutMeComponent: true,
      showMyTownComponent: false
    });
  };

  onButtonMyTownClick() {
     this.setState({
       showAboutMeComponent: false,
       showMyTownComponent: true
     });
   };

  render() {
    return (
     <div >
            <button style={buttonStyle} onClick={this.onButtonAboutMeClick.bind(this)}>
             About Me
           </button>
            <button style={buttonStyle} onClick={this.onButtonMyTownClick.bind(this)}>
             My Town
           </button>

{this.state.showAboutMeComponent ?
           <AboutMe /> :
           null
        }
      {this.state.showMyTownComponent ?
           <MyTown /> :
           null
            }
    </div>
    );
  }
}

export default Home;