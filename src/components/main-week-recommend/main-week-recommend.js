import React,{Component} from 'react';
import './main-week-recommend.css';

import MainWeekRecommendNewServer from '../main-week-recommend-newserver/main-week-recommend-newserver';
import MainWeekRecommendNewVersion from '../main-week-recommend-new-version/main-week-recommend-new-version';
import MainWeekRecommendNews from '../main-week-recommend-news/main-week-recommend-news'; 

export default class MainWeekRecommend extends Component{
    render(){
        return (<div className='main-week-recommend'>
                    <MainWeekRecommendNewServer/>
                    <MainWeekRecommendNewVersion url=' ' imgSrc='http://game.gtimg.cn/upload/adw/image/1512489452/1512489452.jpg?_r=1512489452' desc='新版本'/>
                    <MainWeekRecommendNews/>
                </div>
            );
    }
}