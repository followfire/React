import React,{ Component } from "react";

import ADR from "../addiction-revention-system/addiction-revention-system";
import GameChart from '../game-chart/game-chart';
import './common-head-right.css';
export default class CommonHeadRight extends Component{
    render(){
        return (
                <div className='common-head-right'>
                    <ADR/>
                    <GameChart/>
                </div>
             );
    }
} 