import React,{ Component } from 'react';
import './game-career.css';

import GameCareerItem from '../game-career-item/game-career-item';
export default class GameCareer extends Component{
    render(){
        return (
            <div className='game-career'>
                {
                    <GameCareerItem {...this.props}/>
                }
            </div>
        );
    }
}