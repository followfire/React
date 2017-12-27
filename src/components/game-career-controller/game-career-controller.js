import React,{ Component } from 'react';
import './game-career-controller.css';
import GameCareerControllerItem from '../game-career-controller-item/game-career-controller-item';

export default class GameCareerController extends Component{
    render(){
        return (
            <div className='game-career-controller'>
                {
                    this.props.controllerList.map((item,index)=>{
                        return <GameCareerControllerItem index={index} {...this.props} key={index} iconText={item} url=''/>
                    })
                }
                
            </div>
        );
    }
}