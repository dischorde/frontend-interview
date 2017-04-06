import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../assets/App.css';
var RTM = require("satori-sdk-js");

class App extends Component {
  componentDidMount() {
    const endpoint = "wss://open-data.api.satori.com";
    const appKey = "6DfAFA11EBdd319d8D4FAecBaE3e8B1D";
    const channel = "transportation";


    const rtm = new RTM(endpoint, appKey);
    rtm.on("enter-connected", () => {
      console.log("Connected to RTM!");
    });

    const subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
    subscription.on('rtm/subscription/data', (pdu) => {
      pdu.body.messages.forEach( msg => {
        this.props.receiveMessage(msg);
      });
    });

    rtm.start();
  }

  render() {
    const messageIds = Object.keys(this.props.messages);
    console.log(messageIds);
    let messageIdLis = messageIds.map((id) => <li key={id}>{id}</li>);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Frontend Coding Exercise</h2>
        </div>
          <ul>
            { messageIdLis }
          </ul>
      </div>
    );
  }
}

export default App;
