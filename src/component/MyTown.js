import React, { Component } from 'react';
import Town from '../village.jpg';

class MyTown extends React.Component {
  render() {
    return (
     <div >
         <img src={Town} />
            <h2> I live in Namakkal and it is small village in India</h2>
      
    </div>
    );
  }
}

export default MyTown;