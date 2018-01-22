import React,{ Component }from 'react';
import './banners-item.css';

export default class BannersItem extends Component{
    render () {
        return (<div className='banners-item'>
                    <a href={this.props.url.href}>
                        <img src={this.props.url.url} alt='加载错误'/>
                    </a>
                </div>);
    }
}