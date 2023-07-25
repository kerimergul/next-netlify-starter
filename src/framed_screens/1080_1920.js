import React, { Component } from "react";
import "./style.css";
import axios from "axios";

const style = { backgroundImage: 'url(/backgrounds/bg_1080_1920.jpg)' };

class _1080_1920 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: false,
            counter: 0,
            index: 0
        };
    }

    componentDidMount() {
        this.getImg();
    }

    getImg() {
        let skip = 0;
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

    componentWillUnmount() { }


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