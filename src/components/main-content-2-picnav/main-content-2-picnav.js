import React,{ Component } from 'react';

import './main-content-2-picnav.css';
import MainContent2PicNavItem from '../main-content-2-picnav-item/main-content-2-picnav-item';

export default class MainContent2PicNav extends Component{
    render(){
        return (<div className='main-content-2-picnav'>
                <MainContent2PicNavItem iconText='' url=' ' text='资料站'/>
                <MainContent2PicNavItem iconText='' url=' ' text='攻略中心'/>
                <MainContent2PicNavItem iconText='' url=' ' text='活动中心'/>
                <MainContent2PicNavItem iconText='' url=' ' text='版本中心'/>
                <MainContent2PicNavItem iconText='' url=' ' text='官方论坛'/>
                <MainContent2PicNavItem iconText='' url=' ' text='官方微博'/>
            </div>);
    }
}