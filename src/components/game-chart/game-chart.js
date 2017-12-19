import React,{ Component } from 'react';
import './game-chart.css';
export default class GameChart extends Component{
    render(){
        return (<div className='game-chart'>
                    <span className=''>腾讯游戏排行榜</span>
                    <i className='game-chart-bg'></i>
                </div>);
    }
}