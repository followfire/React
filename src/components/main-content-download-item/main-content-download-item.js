import React,{ Component } from "react";
import './main-content-download-item.css';

export default class MainContentDownloadItem extends Component{
    render(){
        return (
            <div className='main-content-download-item'>
                <a href={this.props.url}>
                    <div>
                        <i>{this.props.icon}</i>
                        {this.props.text}
                    </div>
                </a>
            </div>);
    }
}