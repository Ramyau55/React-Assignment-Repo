import React, { Component } from 'react';
import Profile from '../images.jpg';


class AboutMe extends React.Component {
  render() {
    return (
        <div >
            <img src={Profile} />
            <h2> Hi, I'm Ramya </h2>
            <h4> I am a student studing Computing and Data Analytics at SMU</h4>
            <h5> I have chosen MCDA since the cirrulam covers majority of the concepts that we use to deal this data</h5>      
            <h5> Click on "My Town" button to view my town details</h5>
        </div>
    );
  }
}

export default AboutMe;