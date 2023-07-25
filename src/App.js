import "./App.css";
import React, { Component } from "react";
import LandingScreen from "./screens/landingScreen";
import LandingScreen1080 from "./1080p/landingScreen1080p";
import UploadScreen from "./uploadScreen.js";

// Dikey
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


// Yatay
import _576_336 from "./framed_screens/576_336";
import _648_384 from "./framed_screens/648_384";
import _720_480 from "./framed_screens/720_480";
import _864_432 from "./framed_screens/864_432";
import _864_576 from "./framed_screens/864_576";
import _864_720 from "./framed_screens/864_720";
import _960_640 from "./framed_screens/960_640";
import _1024_640 from "./framed_screens/1024_640";
import _1080_600 from "./framed_screens/1080_600";
import _1088_576 from "./framed_screens/1088_576";
import _1152_640 from "./framed_screens/1152_640";
import _1152_704 from "./framed_screens/1152_704";
import _1152_720 from "./framed_screens/1152_720";
import _1152_768 from "./framed_screens/1152_768";
import _1280_704 from "./framed_screens/1280_704";
import _1440_1080 from "./framed_screens/1440_1080";
import _1536_960 from "./framed_screens/1536_960";
import _1548_946 from "./framed_screens/1548_946";
import _1920_1080 from "./framed_screens/1920_1080";
import _1920_1152 from "./framed_screens/1920_1152";
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
    }
    // Dikey
    else if (window.location.href.includes("/_384_960")) {
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
    }
    // Yatay
    else if (window.location.href.includes("/_576_336")) {
      return <_576_336></_576_336>
    } else if (window.location.href.includes("/_648_384")) {
      return <_648_384></_648_384>
    } else if (window.location.href.includes("/_720_480")) {
      return <_720_480></_720_480>
    } else if (window.location.href.includes("/_864_432")) {
      return <_864_432></_864_432>
    } else if (window.location.href.includes("/_864_576")) {
      return <_864_576></_864_576>
    } else if (window.location.href.includes("/_864_720")) {
      return <_864_720></_864_720>
    } else if (window.location.href.includes("/_960_640")) {
      return <_960_640></_960_640>
    } else if (window.location.href.includes("/_1024_640")) {
      return <_1024_640></_1024_640>
    } else if (window.location.href.includes("/_1080_600")) {
      return <_1080_600></_1080_600>
    } else if (window.location.href.includes("/_1088_576")) {
      return <_1088_576></_1088_576>
    } else if (window.location.href.includes("/_1152_640")) {
      return <_1152_640></_1152_640>
    } else if (window.location.href.includes("/_1152_704")) {
      return <_1152_704></_1152_704>
    } else if (window.location.href.includes("/_1152_720")) {
      return <_1152_720></_1152_720>
    } else if (window.location.href.includes("/_1152_768")) {
      return <_1152_768></_1152_768>
    } else if (window.location.href.includes("/_1280_704")) {
      return <_1280_704></_1280_704>
    } else if (window.location.href.includes("/_1440_1080")) {
      return <_1440_1080></_1440_1080>
    } else if (window.location.href.includes("/_1536_960")) {
      return <_1536_960></_1536_960>
    } else if (window.location.href.includes("/_1548_946")) {
      return <_1548_946></_1548_946>
    } else if (window.location.href.includes("/_1920_1080")) {
      return <_1920_1080></_1920_1080>
    } else if (window.location.href.includes("/_1920_1152")) {
      return <_1920_1152></_1920_1152>
    } else if (window.location.href.includes("/_4092_960")) {
      return <_4092_960></_4092_960>
    }
    else {
      return <LandingScreen></LandingScreen>;
    }
  }
}

export default App;
