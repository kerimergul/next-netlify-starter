import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_1080_1920-min.jpg)' };
const url = ['signal-server-1', 'signal-server-2', 'signal-server-3', 'signal-server-4', 'signal-server-5', 'signal-server-6', 'signal-server-7', 'signal-server-8', 'signal-server-9', 'signal-server-10'];
class _1080_1920 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: false,
            counter: 0,
            index: 0,
            url: url[Math.floor(Math.random() * 10)]
        };
    }

    componentDidMount() {
        this.getImg();
    }

    getImg() {
        let skip = 0;
        axios.post(`https://signal-server.onrender.com/api/image/getImage`, { skip }).then((res) => {
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

    componentWillUnmount() { }


    renderImg(img) {
        let data = `${img?.data}`.replace('"', '').replace('"', '');
        return <img src={data} alt="image_480" class="i_v1"></img>
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
export default _1080_1920;



// import React, { Component } from "react";
// import "./style.css";
// import axios from "axios";

// const style = { backgroundImage: 'url(/backgrounds/bg_1080_1920.jpg)' };

// class _1080_1920 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             img: false,
//             counter: 0,
//             index: 0
//         };
//     }

//     componentDidMount() {
//         this.getImg();
//     }

//     getImg() {
//         let skip = 0;
//         axios.post("https://signal-server.onrender.com/api/image/getImage", { skip }).then((res) => {
//             if (res?.data?.status === true) {
//                 this.setState({
//                     img: res.data.img,
//                 })
//             } else {
//                 alert('Resim yüklenirken hata oluştu')
//             }
//         }).catch((err) => {
//             alert("Resim yüklenirken hata oluştu");
//             console.log(err);
//         })
//     }

//     componentWillUnmount() { }


//     renderImg(img) {
//         let data = `${img?.data}`.replace('"', '').replace('"', '');
//         return <img src={data} alt="image_480" class="i"></img>
//     }

//     render() {
//         return (
//             <div class="_1080_1920"
//                 style={style}>
//                 {this.state.img !== false ? this.renderImg(this.state.img) : <div></div>}
//             </div>
//         );

//     }
// }
// export default _1080_1920;