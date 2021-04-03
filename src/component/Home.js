import React, { Component } from 'react';
import AboutMe from './AboutMe.js';
import MyTown from './MyTown.js';

class Home extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      showAboutMeComponent: false,
      showMyTownComponent: false
    };

  //  this.onButtonAboutMeClick.bind(this);
  //  this.onButtonMyTownClick.bind(this);
  
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
          <button onClick={this.onButtonAboutMeClick.bind(this)}>
             About Me
           </button>
 	   <button onClick={this.onButtonMyTownClick.bind(this)}>
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