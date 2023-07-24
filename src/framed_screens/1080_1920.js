import React, { Component } from "react";
import "./style.css";
import axios from "axios";
const screen_time_ms = 10000
const style = { backgroundImage: 'url(/backgrounds/bg_1080_1920.jpg)' };

class _1080_1920 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: false,
            nextImg: false,
            counter: 0,
            index: 0,
            wait: false,
        };
    }

    componentDidMount() {
        this.interval_next = setInterval(async () => {
            this.getNext();
        }, screen_time_ms / 2);
        this.interval_set = setInterval(async () => {
            this.changeImg();
        }, screen_time_ms)
    }

    componentWillUnmount() {
        clearInterval(this.interval_next);
        clearInterval(this.interval_set);
    }

    changeImg() {
        this.setState({
            img: this.state.nextImg,
            wait: false,
        })
    }

    getNext() {
        if (this.state.wait === false) {
            let skip = this.state.counter;
            this.getImg(skip);

            this.setState({
                counter: skip + 1,
                wait: true
            })
        }
    }

    getImg(skip) {
        axios.post("https://signal-server.onrender.com/api/image/getImage", { skip }).then((res) => {
            if (res?.data?.status === true) {
                this.setState({
                    img: res.data.img,
                })
            } else {
                alert('Resim yüklenirken hata oluştu')
            }
        }).catch((err) => {
            alert("Resim yüklenirken hata oluştu");
            console.log(err);
        })
    }


    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img src={data} alt="image_480" class="i"></img>
    }

    render() {
        return (
            <div class="_1080_1920"
                style={style}>
                {this.state.img !== false ? this.renderImg(this.state.img) : <div></div>}
            </div>
        );

    }
}
export default _1080_1920;