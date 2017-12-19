import React,{ Component } from 'react';
import './main-head-nav-item.css';
import MainHeadTag from '../main-head-tag/main-head-tag';
export default class MainHeadNavItem extends Component{
    render(){
        return (<div className='main-head-nav-item'>
                    <MainHeadTag  bgposition={this.props.bgposition}/>
                    {this.props.children}
                </div>
            );
    }
}