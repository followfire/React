import React,{ Component } from "react";
import './main-head-linklist-item.css';
export default class MainHeadLinklistItem extends Component{
    render(){
        return (
                <div>
                <a href={this.props.link} className='main-head-linklist-item'>
                    {this.props.text}
                </a>
                </div>
        );
    }
}