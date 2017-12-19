import React,{ Component } from "react";
import './main-content-download.css';
import MainContentDownloadDownload from '../main-content-download-download/main-content-download-download';
export default class MainContentDownload extends Component{
    render(){
        return (<div className='main-content-download'>
                    <MainContentDownloadDownload/>
                </div>);
    }
}