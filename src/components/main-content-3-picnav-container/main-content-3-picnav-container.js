import React,{ Component } from 'react';

import './main-content-3-picnav-container.css';
import MainContent3PicNavItem from '../main-content-3-picnav-item/main-content-3-picnav-item';

export default class MainContent3PicNavContainer extends Component{
    render(){
        return (<div className='main-content-3-picnav-container'>
                    <div style={{overflow:'hidden'}}>
                        <MainContent3PicNavItem iconText='' url=' ' text='视频'/>
                        <MainContent3PicNavItem iconText='' url=' ' text='壁纸'/>
                    </div>
                    <div style={{marginTop:10,overflow:'hidden'}}>
                        <MainContent3PicNavItem iconText='' url=' ' text='原画'/>
                        <MainContent3PicNavItem iconText='' url=' ' text='音乐'/>
                    </div>
                
            </div>);
    }
}