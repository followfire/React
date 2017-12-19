import React,{ Component } from "react";
import './main-content.css';
import MainContentDownload from '../main-content-download/main-content-download';
import MainContentCarousel from '../main-content-carousel/main-content-carousel';
export default class MainContent extends Component{
    render(){
        return (<div className='main-content'>
                    <MainContentDownload/>
                    <MainContentCarousel/>
                </div>);
    }
}