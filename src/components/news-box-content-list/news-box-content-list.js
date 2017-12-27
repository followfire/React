import React,{ Component } from 'react';
import './news-box-content-list.css';
import MainHeadLinklistItem from '../main-head-linklist-item/main-head-linklist-item';
export default class NewsBoxContentList extends Component{
    render(){
        return (
            <ul className='news-box-content-list'>
                {this.props.newsList.map((item,index)=>{
                    return (
                        <li key={index}>
                        
                                <a href={item.belong.url}>
                                    [{item.belong.text}]
                                </a>
                        
                            <MainHeadLinklistItem text={item.self.text}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}