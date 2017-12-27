import React,{ Component } from 'react';

import './main-week-recommend-new-version.css';

export default class MainWeekRecommendNewVersion extends Component{
    render(){
        return(<div className='main-week-recommend-new-version'>
                <a href={this.props.url}>
                    <img src={this.props.imgSrc} alt='新版本'/>
                </a>
            </div>);
    }
}