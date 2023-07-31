import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_1440_1080-min.jpg)' };

class _1440_1080 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: false,
            skip: 0,
            first: true,
        };
    }

    componentDidMount() {
        if (this.state.first === true) {
            this.getImg();
        }
        this.interval = setInterval(async () => {
            this.getImg();
        }, 12000)
    }

    getImg() {
        let skip = this.state.skip;
        axios.post("https://signal-server.onrender.com/api/image/getImage", { skip }).then((res) => {
            if (res?.data?.status === true) {
                this.setState({
                    img: res.data.img,
                    skip: skip + 1,
                    first: false
                })
            } else {
                alert('Resim yüklenirken hata oluştu')
            }
        }).catch((err) => {
            alert("Resim yüklenirken hata oluştu");
            console.log(err);
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.setImgHeigth();
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
        } else if (resimYukseklik == sayfaYukseklik) {
            resim.style.top = '2.5%%';
        }
    }

    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img id='img' src={data} alt="image_480" class="i_landscape_v3" onLoad={this.componentDidUpdate}></img>
    }

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