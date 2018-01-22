import React,{ Component } from "react";
import './main-content-3.css';

import OthersContainer from '../others-container/others-container';
import Tongren from '../tongren/tongren';
import MainContent3PicNavContainer from '../main-content-3-picnav-container/main-content-3-picnav-container';
import OtherMediaNews from '../other-media-news/other-media-news';
import Banners from '../banners/banners';

export default class MainContent3 extends Component{

    render(){ 
        return (<div className='main-content main-content-3'>
                    <OthersContainer/>
                    <Tongren/>
                    <MainContent3PicNavContainer/>
                    <OtherMediaNews/>
                    <Banners/>
                </div>);
    }
}