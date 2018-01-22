import React, { Component } from 'react'
import './partners.css';
import img1 from '../../img/mt-1.png';
import img2 from '../../img/mt-2.png';
import img4 from '../../img/mt-4.png';
import img5 from '../../img/mt-5.png';
import img6 from '../../img/mt-6.png';
import img9 from '../../img/mt-9.png';

export default class QrCodeContainer extends Component{
   
    render(){
        return( <div className='partners'>
                    <a href=''>
                        <img src={img1} alt='' title='QQ会员'/>
                    </a>
                    <a href=''>
                        <img src={img2} alt='' title='QQ蓝钻'/>
                    </a>
                    <a href=''>
                        <img src={img4} alt='' title='QQ网吧'/>
                    </a>
                    <a href=''>
                        <img src={img5} alt='' title='腾讯电脑管家'/>
                    </a>
                    <a href=''>
                        <img src={img6} alt='' title='腾讯游戏平台'/>
                    </a>
                    <a href=''>
                        <img src={img9} alt='' title='腾讯游戏帮帮'/>
                    </a>
                </div>);
    }
}