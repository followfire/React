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
                            <h2>
                                游戏特色
                            </h2>
                            <p>
                                江湖那么大
                            </p>
                            <p>
                                何处不天涯
                            </p>
                        </div>
                    </a>
                    <a href=''>
                        <div className='bottom-right'>
                            <h2>
                                设定站
                            </h2>
                            <p>
                                天下盟会
                            </p>
                            <p>
                                八荒剑秀
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}