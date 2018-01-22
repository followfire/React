import React,{ Component }from 'react';
import './banners.css';
import BannersItem from '../banners-item/banners-item';
const imgSrc = [{
    url: 'http://game.gtimg.cn/upload/adw/image/201603/1458771921062999162.jpg',
    href: ''
},{
    url: 'http://game.gtimg.cn/upload/adw/image/201603/1458776874552296223.jpg',
    href: ''
},{
    url: 'http://game.gtimg.cn/upload/adw/image/201603/1458776592794735747.jpg',
    href: ''
},{
    url: 'http://game.gtimg.cn/upload/adw/image/1491978337/1491978337.jpg',
    href: ''
}];
export default class Banners extends Component{
    render () {
        return (<div className='banners'>
                  {
                      imgSrc.map((item,index) => {
                        return <BannersItem url={item} key={index}/>
                      })
                  }
                 
                 
                </div>);
    }
}