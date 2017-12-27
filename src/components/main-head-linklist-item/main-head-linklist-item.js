import React,{ Component } from "react";
import './main-head-linklist-item.css';
export default class MainHeadLinklistItem extends Component{
    render(){
        return (
                <div className='main-head-linklist-item'>
                <a href={this.props.link} >
                    {this.props.text}
                </a>
                </div>
        );
    }
}