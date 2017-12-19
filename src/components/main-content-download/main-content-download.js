import React,{ Component } from "react";
import './main-content-download.css';
import MainContentDownloadDownload from '../main-content-download-download/main-content-download-download';
import MainContentDownloadItem from "../main-content-download-item/main-content-download-item";
export default class MainContentDownload extends Component{
    render(){
        return (<div className='main-content-download'>
                    <MainContentDownloadDownload/>
                    <MainContentDownloadItem text='礼包兑换' icon='' url=''/>
                    <MainContentDownloadItem text='充值中心' icon='' url=''/>
                    <MainContentDownloadItem text='新手指南' icon='' url=''/>
                </div>);
    }
}