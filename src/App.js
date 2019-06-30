import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from "./components/Navigation/Navigation.js";
import SlidePanel from "./components/SlidePanel/SlidePanel.js";
import MainPanel from "./components/MainPanel/MainPanel.js";
import FooterPanel from "./components/FooterPanel/FooterPanel.js";
import ContactPanel from "./components/contactPanel/contact.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particle"
            params={{
                "particles": {
                    "number": {
                        "value": 250
                    },
                    "size": {
                        "value": 1
                    },
                    "color": {
                      "value": "#0F073D"
                    },
                    "line_linked": {
                       "shadow": {
                          "enable": true,
                          "color": "#0F073D",
                          "blur": 1
                      }
                    }
                }
              }} />
        <Navigation />
        <SlidePanel />
        <MainPanel />
        <ContactPanel />
        <FooterPanel />
        
      </div>
    );
  }
}



export default App;
