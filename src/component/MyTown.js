import React, { Component } from 'react';
import Town from '../village.jpg';
import axios from "axios";


class MyTown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperatureinC: "",
            temperatureinF: "",
            showTemperatureinF: false
        };
    }

    componentDidMount() {        
        axios({
            method: "GET",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=60de82b08bbf6e007f5ece65c25cb7b4'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                temperatureinC: (response.data.main.temp - 237.15),
                temperatureinF: ((response.data.main.temp - 237.15) * 9/5) + 32   
            });
        }).catch((response) => {
            console.log(response.error)
        })
    }

    fahrenheitShow() {
        this.setState({
            showTemperatureinF: !(this.state.showTemperatureinF)
        });
    };

  render() {
    return (
     <div >
         <img src={Town} />
            <h2> I live in Namakkal and it is small village in India</h2>

            <span> Current Temperature in Celsius:  {this.state.temperatureinC} </span> 
           
            <div>
            <button onClick={this.fahrenheitShow.bind(this)}>
                    {this.state.showTemperatureinF ? "hide fahrenheit" : "show fahrenheit"}
            </button>
                {this.state.showTemperatureinF ? < span > Current Temperature in Fahrenheit:  {this.state.temperatureinF}  </span> : null}
                </div>
    </div>
    );
  }
}

export default MyTown;