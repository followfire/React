import React,{ Component } from 'react';

import   './main-content-3-picnav-item.css';

export default class MainContent3PicNavItem extends Component{
    render(){
        return (<div className='main-content-3-picnav-item'>
                <a href={this.props.url}>
                    <div>
                        <i>{this.props.iconText}</i>
                    </div>
                    <p>{this.props.text}</p>
                </a>
            </div>);
    }
}