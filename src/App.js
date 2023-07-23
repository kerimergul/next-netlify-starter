import "./App.css";
import React, { Component } from "react";
import LandingScreen from "./screens/landingScreen";
import LandingScreen1080 from "./1080p/landingScreen1080p";
import UploadScreen from "./uploadScreen.js";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(window.location.href);
    if (window.location.href.includes("/1080p")) {
      return <LandingScreen1080></LandingScreen1080>
    } else if (window.location.href.includes("/upload")) {
      return <UploadScreen></UploadScreen>
    } else {
      return <LandingScreen></LandingScreen>;
    }
  }
}

export default App;
