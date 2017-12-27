import React,{ Component } from 'react';
import './event-center.css';

export default class Template extends Component{
    render(){
        return (
            <div className='event-center'>
                <div style={{height:145,
                width:'100%'
                }}>
                <a href=''>
                    <img style={{width:'100%',height:'100%'}} src='http://game.gtimg.cn/images/wuxia/web201603/home-event.jpg' alt='加载失败'/>
                </a>
                </div>
                <div className='bottom'>
                    <a href=''>
                        <div className='bottom-left'>
                        </div>
                    </a>
                    <a href=''>
                        <div className='bottom-right'>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}