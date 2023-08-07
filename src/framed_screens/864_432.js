import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_864_432-min.jpg)' };

class _864_432 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: `../images/0-min.png`,
            skip: Math.floor(Math.random() * 74),
            first: true,
        };
    }
    componentDidMount() {
        // if (this.state.first === true) {
        //     this.getImg();
        // }
        this.interval = setInterval(async () => {
            this.getImg();
        }, 8000)
    }

    getImg() {
        let skip = this.state.skip;
        if (skip > 74) {
            skip = 0;
        }
        // axios.post("https://www.tesvik-sgk.com/signal/api/image/getImage", { skip }).then((res) => {
        //     if (res?.data?.status === true) {
        let path = `../images/${this.state.skip}.png`;
        this.setState({
            img: path,
            skip: skip + 1,
            first: false
        })
        // } else {
        //     alert('Resim yüklenirken hata oluştu')
        // }
        // }).catch((err) => {
        //     alert("Resim yüklenirken hata oluştu");
        //     console.log(err);
        // })
    }

    renderImg(img) {
        // let data = `${img?.data}`.replace('"', '').replace('"', '');
        let data = img;
        return <img id='img' src={data} alt="image_480" class="i_v1"  ></img>
    }
    componentWillUnmount() { clearInterval(this.interval) }



    // renderImg(img) {
    //     let data = `${img?.data}`.replace('"', '').replace('"', '');
    //     return <img src={data} alt="image_480" class="i_landscape_v1"></img>
    // }

    render() {
        return (
            <div class="bg_landscape"
                style={style}>
                {this.state.img !== false ? this.renderImg(this.state.img) : <div></div>}
            </div>
        );

    }
}
export default _864_432;