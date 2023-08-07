import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_384_960-min.jpg)' };

class _384_960 extends Component {
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
    componentWillUnmount() { clearInterval(this.interval) }

    setImageWidth() {
        const resim = document.getElementById('img');
        const sayfaGenislik = window.innerWidth;
        const resimGenislik = resim.clientWidth;

        if (resimGenislik < sayfaGenislik) {
            resim.style.height = '72%';
            resim.style.maxHeight = '72%';
            resim.style.top = '35%';
        }
    }

    renderImg(img) {
        // let data = `${img?.data}`.replace('"', '').replace('"', '');
        let data = img;
        return <img id='img' src={data} alt="image_480" class="i_v1"  ></img>
    }

    render() {
        return (
            <div class="bg_vertical"
                style={style}>
                {this.state.img !== false ? this.renderImg(this.state.img) : <div></div>}
            </div>
        );

    }
}
export default _384_960;