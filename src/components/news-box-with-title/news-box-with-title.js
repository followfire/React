import React,{ Component } from 'react';
import './news-box-with-title.css';

import NewsBoxWithTitleTab from '../news-box-with-title-tab/news-box-with-title-tab';
import NewsBoxWithTitleContent from '../news-box-with-title-content/news-box-with-title-content';

export default class NewsBoxWithTitle extends Component{
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
        return (<div className='news-box-with-title'>
        {/* 导航头 */}
            <NewsBoxWithTitleTab tabs={this.props.data.tabName} 
            activeNum={this.state.activeNum}
            changeTab={this.changeTab}
            duration={this.state.duration}
            title={this.props.data.title}
            more=' '/>
           <NewsBoxWithTitleContent 
           avtiveNum={this.state.activeNum}
           duration={this.state.duration}/>
        </div>);
    }
}