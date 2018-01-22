import React,{Component} from 'react';
import './other-media-news.css';

import NewsBoxWithTitle from '../news-box-with-title/news-box-with-title';

// 构造tab 列表
const list = [{
    title: '媒体',
    tabName: ['全部', '多玩','17173', '178']
},{
    title: '攻略',
    tabName: ['话本', '论剑','属性', '玩法']
}]

export default class OtherMediaNews extends Component{
    
    render(){
        return (<div className='other-media-container'>
                    {
                        list.map((item,index) => {
                            return (
                            <div className='newsbox-with-title-container' key={index}>
                                <NewsBoxWithTitle data={item}/>
                            </div>
                            );
                        })
                    }
                    <div className='ads'>
                        <a href='http://wuxia.qq.com/cp/a20170803tdbank/index.shtml' 
                        target='_blank'
                        rel='noopener noreferrer'>
                        </a>
                    </div>
                    
                </div>);
    }
}
         
 