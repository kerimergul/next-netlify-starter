import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_1440_1080-min.jpg)' };

class _1440_1080 extends Component {
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

    setImgHeigth() {
        const resim = document.getElementById('img');
        const sayfaYukseklik = window.innerHeight;
        const resimYukseklik = resim.clientHeight;

        if (resimYukseklik < sayfaYukseklik * 0.85) {
            resim.style.left = '-7.5%';
            resim.style.width = '60%';
            resim.style.maxWidth = '60%';
            resim.style.bottom = '0';
        } else {
            const yeniResimYukseklik = resim.clientHeight;
            if (yeniResimYukseklik >= sayfaYukseklik) {
                resim.style.bottom = '-4%';
            }
        }
    }

    // renderImg(img) {
    //     let data = `${img?.data}`.replace('"', '').replace('"', '');
    //     return <img id='img' src={data} alt="image_480" class="i_landscape_v3" onLoad={this.setImgHeigth}></img>
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
export default _1440_1080;