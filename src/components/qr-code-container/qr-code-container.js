import React, { Component } from 'react'
import './qr-code-container.css';
import QrCodeController from '../qr-code-controller/qr-code-controller';
import QrCodeList from '../qr-code-list/qr-code-list';
const itemList = ['天刀助手', '官方微信'];
const imgList = ['http://game.gtimg.cn/images/wuxia/picture/wuxia-app-for-android.png', 
'http://game.gtimg.cn/images/wuxia/picture/wuxia-ewm.png'];
export default class QrCodeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:0
        };
        this.changeState = this.changeState.bind(this);
    }
    changeState(index){
        console.log('get'+index);
        this.setState({
            active:index
        })
    }
    render(){
        return( <div>
                    <QrCodeController active={this.state.active} itemList={itemList} changeState={this.changeState}/>
                    <QrCodeList imgList={imgList} active={this.state.active}/>
                </div>);
    }
}