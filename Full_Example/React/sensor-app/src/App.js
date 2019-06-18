import React, { Component } from 'react';
import './App.css';
//import { MyFirstComponent } from './MyFirstComponent';
//import { SecondComponent } from './SecondComponent';
import socketIOClient from "socket.io-client";
import "../node_modules/react-vis/dist/style.css"
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from "react-vis";

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      currentValue: null,
      values: [],
      //counter: 0
    }
  }

  componentDidMount() {
    const socket = socketIOClient("http://localhost:4000");

    socket.on("connect", () => {
      this.setState({ isConnected: true });
    });

    socket.on("data", (data) => {
      console.log(data);
      this.setState((prevState) => {
        const values = prevState.values;
        if (values.length > 100) {
          values.shift();
        }
        values.push({ x: data.timestamp, y: data.value });
        return {
          currentValue: data,
          values: values
        };
      });
    });
  }

  /*countUp = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1})
    );
  };*/

  /*resetCounter = () => {
    this.setState(({ counter: 0})
    );
  };*/
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <XYPlot width={1000} height={300}>
            <HorizontalGridLines />
            <LineSeries data={this.state.values} />
            <XAxis />
            <YAxis />
        </XYPlot>
        <p>App is connected: {this.state.isConnected + ""}</p>
        <p>Value is: {this.state.currentValue && this.state.currentValue.value}</p>




        {/*<p>Counter Value is: {this.state.counter}</p>}
        {<button onClick={this.countUp}>Count Up</button>
        <button onClick={this.resetCounter}>Reset Counter</button>}
        <MyFirstComponent name={"Marcel"} nice={true}/>
        <MyFirstComponent name={"Sarah"} nice={false}/>
        <MyFirstComponent name={"Christian"} nice={false}/>
        <SecondComponent  otherProp={"Hello other Component"}/>*/}
      </header>
    </div>
    );
  }
}

export default App;
