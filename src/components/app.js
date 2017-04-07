import React, { Component } from 'react';
import logo from '../assets/logo.png';
import '../assets/App.css';
var RTM = require("satori-sdk-js");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rtm: this.setUpSatori()
    };
    this.setUpSatori = this.setUpSatori.bind(this);
  }

  setUpSatori() {
    const endpoint = "wss://open-data.api.satori.com";
    const appKey = "6DfAFA11EBdd319d8D4FAecBaE3e8B1D";

    const rtm = new RTM(endpoint, appKey);
    return rtm;
  }

  componentDidMount() {
    const channel = "transportation";
    this.state.rtm.on("enter-connected", () => {
      console.log("Connected to RTM!");
    });

    const subscription = this.state.rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
    subscription.on('rtm/subscription/data', (pdu) => {
      pdu.body.messages.forEach( msg => {
        this.props.receiveMessage(msg);
      });
    });

    this.state.rtm.start();
  }

  render() {
    const { messages } = this.props;
    let entityIds = Object.keys(messages).map((id, idx) => {
      return <li key={idx}>{id}</li>;
    });

    if (entityIds.length > 1000 ) {
      this.state.rtm.stop();
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Frontend Coding Exercise</h2>
        </div>
        <ul>
          { entityIds }
        </ul>
      </div>
    );
  }
}

export default App;
