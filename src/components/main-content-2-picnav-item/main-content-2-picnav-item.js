import React,{ Component } from 'react';

import './main-content-2-picnav-item.css';

export default class MainContent2PicNavItem extends Component{
    render(){
        return (<div className='main-content-2-picnav-item'>
                <a href={this.props.url}>
                    <div>
                        <span></span>
                        <i>{this.props.iconText}</i>
                    </div>
                    <p>{this.props.text}</p>
                </a>
            </div>);
    }
}