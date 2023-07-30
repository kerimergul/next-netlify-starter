import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_640_1140-min.jpg)' };

class _640_1140 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: false,
            skip: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            this.getImg();
        }, 12000)
    }

    getImg() {
        let skip = this.state.skip;
        axios.post(`https://signal-server.onrender.com/api/image/getImage`, { skip }).then((res) => {
            if (res?.data?.status === true) {
                this.setState({
                    img: res.data.img,
                    skip: skip + 1,
                })
            } else {
                alert('Resim yüklenirken hata oluştu')
            }
        }).catch((err) => {
            alert("Resim yüklenirken hata oluştu");
            console.log(err);
        })
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }





    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img src={data} alt="image_480"class="i_v1"></img>
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
export default _640_1140;