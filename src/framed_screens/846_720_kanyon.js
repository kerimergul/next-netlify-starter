import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_864_720-min.jpg)' };

class _864_720_Kanyon extends Component {
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
        axios.post("https://www.tesvik-sgk.com/signal/api/image/getImageKanyon", { skip }).then((res) => {
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

    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img id='img' src={data} alt="image_480" class="i_landscape_v3" onLoad={this.setImgHeigth}></img>
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
export default _864_720_Kanyon;