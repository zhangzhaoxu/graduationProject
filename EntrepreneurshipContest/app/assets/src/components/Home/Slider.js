import React from 'react';
import { Carousel } from 'antd';
import './Slider.scss';


export default class Slider extends React.Component {
    render() {
        return (
            <Carousel effect="fade" autoplay>
                <div className="img-con">
                    <img className="img-bg" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495033782&di=e467fd1bec38b1fe79e3890c2e8ba335&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-10%2F201210611553055932.jpg' />
                </div>
                <div className="img-con">
                    <img className="img-bg" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495033826&di=0620c3cf3258f2395ed422956b745aaa&imgtype=jpg&er=1&src=http%3A%2F%2Fbenyouhuifile.it168.com%2Fforum%2Fmacos%2Fattachments%2Fmonth_1010%2F101013230099caca0cd6895eba.jpg' />
                </div>
                <div className="img-con">
                    <img className="img-bg" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494439137050&di=e0a6020e3c501d03985987a8081234f1&imgtype=0&src=http%3A%2F%2Fwww.33lc.com%2Farticle%2FUploadPic%2F2012-9%2F2012916919052976.jpg' />
                </div>
                <div className="img-con">
                    <img className="img-bg" src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494439509133&di=e0f8108dba0a787acf2a5899591a00f4&imgtype=0&src=http%3A%2F%2Fimages.weiphone.net%2Fattachments%2Fphoto%2FDay_130131%2F235838_a4611359635762262ca1bb3183846.jpg' />
                </div>
            </Carousel>
        )
    }
}