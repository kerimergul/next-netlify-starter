import "./App.css";
import React, { Component } from "react";
import LandingScreen from "./screens/landingScreen";
import LandingScreen1080 from "./1080p/landingScreen1080p";
import UploadScreen from "./uploadScreen.js";

import _384_960 from "./framed_screens/384_960";
import _512_786 from "./framed_screens/512_786";
import _624_1040 from "./framed_screens/624_1040";
import _640_1120 from "./framed_screens/640_1120";
import _640_1140 from "./framed_screens/640_1140";
import _768_1344 from "./framed_screens/768_1344";
import _864_1440 from "./framed_screens/864_1440";
import _960_2016 from "./framed_screens/960_2016";
import _2160_3840 from "./framed_screens/2160_3840";

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
    } else if (window.location.href.includes("/_384_960")) {
      return <_384_960></_384_960>
    } else if (window.location.href.includes("/_480_720")) {
      return <_480_720></_480_720>
    } else if (window.location.href.includes("/_512_786")) {
      return <_512_786></_512_786>
    } else if (window.location.href.includes("/_576_864")) {
      return <_576_864></_576_864>
    } else if (window.location.href.includes("/_624_1040")) {
      return <_624_1040></_624_1040>
    } else if (window.location.href.includes("/_640_1120")) {
      return <_640_1120></_640_1120>
    } else if (window.location.href.includes("/_640_1140")) {
      return <_640_1140></_640_1140>
    } else if (window.location.href.includes("/_768_1152")) {
      return <_768_1152></_768_1152>
    } else if (window.location.href.includes("/_768_1344")) {
      return <_768_1344></_768_1344>
    } else if (window.location.href.includes("/_864_1440")) {
      return <_864_1440></_864_1440>
    } else if (window.location.href.includes("/_960_2016")) {
      return <_960_2016></_960_2016>
    } else if (window.location.href.includes("/_1080_1920")) {
      return <_1080_1920></_1080_1920>
    } else if (window.location.href.includes("/_2160_3840")) {
      return <_2160_3840></_2160_3840>
    } else if (window.location.href.includes("/_4092_960")) {
      return <_4092_960></_4092_960>
    } else {
      return <LandingScreen></LandingScreen>;
    }
  }
}

export default App;
