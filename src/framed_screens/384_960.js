import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_384_960-min.jpg)' };

class _384_960 extends Component {
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
        axios.post("https://www.tesvik-sgk.com/signal/api/image/getImage", { skip }).then((res) => {
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

    setImageWidth() {
        const resim = document.getElementById('img');
        const sayfaGenislik = window.innerWidth;
        const resimGenislik = resim.clientWidth;

        if (resimGenislik < sayfaGenislik) {
            resim.style.height = '72%';
            resim.style.maxHeight = '72%';
            resim.style.top = '35%';
        } else if (resimGenislik >= sayfaGenislik) {
            resim.style.height = '67%';
            resim.style.maxHeight = '67%';
            resim.style.top = '33%';
        }
    }

    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img id='img' src={data} alt="image_480" class="i_v1" onLoad={this.setImageWidth()} ></img>
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