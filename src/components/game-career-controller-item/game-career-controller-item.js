import React,{ Component } from 'react';
import './game-career-controller-item.css';

export default class GameCareerControllerItem extends Component{
    render(){
        return (
            (<div className={'game-career-controller-item '+(this.props.active===this.props.index?'cur':'')}
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.changeItem(this.props.index);
                }}
            >
                <a href={this.props.url}>
                        <span></span>
                        <i>{this.props.iconText}</i>
                </a>
            </div>)
        );
    }
}