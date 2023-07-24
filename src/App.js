import "./App.css";
import React, { Component } from "react";
import LandingScreen from "./screens/landingScreen";
import LandingScreen1080 from "./1080p/landingScreen1080p";
import UploadScreen from "./uploadScreen.js";

import _480_720 from "./framed_screens/480_720";
import _576_864 from "./framed_screens/576_864";
import _768_1152 from "./framed_screens/768_1152";
import _1080_1920 from "./framed_screens/1080_1920";
import _4092_960 from "./framed_screens/4092_960";

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
    } else if (window.location.href.includes("/_480_720")) {
      return <_480_720></_480_720>
    } else if (window.location.href.includes("/_576_864")) {
      return <_576_864></_576_864>
    } else if (window.location.href.includes("/_768_1152")) {
      return <_768_1152></_768_1152>
    } else if (window.location.href.includes("/_1080_1920")) {
      return <_1080_1920></_1080_1920>
    } else if (window.location.href.includes("/_4092_960")) {
      return <_4092_960></_4092_960>
    } else {
      return <LandingScreen></LandingScreen>;
    }
  }
}

export default App;
