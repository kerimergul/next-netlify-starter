import React, { Component } from "react";
import "./style.css";
const style = { backgroundImage: 'url(/backgrounds/bg_480_720.jpg)' };
const skipSecond = 10;
class _480_720 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [],
            counter: 0,
            index: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            this.changeViewLoop(this.state.imgList, this.state.counter);
            this.setState({
                counter: this.state.counter + 1,
            })
        }, skipSecond);
    }

    componentWillUnmount() { }


    changeViewLoop(list, counter) {
       if(list.length > 0){
        
       }
    }

    render() {
        return (
            <div class="_480_720"
                style={style}>
                {this.state.imgList.length > 0 ? this.renderImgList(this.state.imgList) : <div></div>}
            </div>
        );

    }
}
export default _480_720;