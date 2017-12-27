import React,{ Component } from 'react';
import './news-box.css';

import NewsBoxTab from '../news-box-tab/news-box-tab';
import NewsBoxContent from '../news-box-content/news-box-content';

// 构造tab 列表
const tabs = ['头条','新闻','公告','活动','直播'];



export default class NewsBox extends Component{
    constructor(props){
        super(props);
        this.state={
            activeNum:0,
            duration:'.3s'
        };
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(index){
        // console.log(index);
        this.setState({
            activeNum:index
        });
    }
    render(){
        return (<div className='news-box'>
        {/* 导航头 */}
            <NewsBoxTab tabs={tabs} 
            activeNum={this.state.activeNum}
            changeTab={this.changeTab}
            duration={this.state.duration}
            more=' '/>
           <NewsBoxContent 
           avtiveNum={this.state.activeNum}
           duration={this.state.duration}/>
        </div>);
    }
}