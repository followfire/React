/**
 * 新闻导航头
 * @argument activeNum 当前活跃的activeNum
 * @argument tabs 需要渲染的列表内容
 * @argument changeTab 触发的回掉函数，在回掉中更改activeNum
 * @argument duration 动画移动速度，字符串，如1s，100ms
 * @argument more 更多新闻的链接
 * @author XZM
 */
import React,{Component } from 'react';
import './news-box-with-title-tab.css';


export default class NewsBoxTab extends Component{
    render(){
        return (<div className='news-box-with-title-tab'>
            <ul>
                <li>
                    {this.props.title}
                </li>
                {this.props.tabs.map((item,index)=>{
                    return (<li 
                    className={this.props.activeNum===index?'cur':''}
                    key= {index}>
                        <a href='' onClick={(e)=>{
                            e.preventDefault();
                            this.props.changeTab(index);
                        }}>
                            {item}
                        </a>
                    </li>)
                })}
                <em style={{transitionDuration: this.props.duration,left:(this.props.activeNum+1)*50}}>
                </em>
                
            </ul>
            <a href={this.props.more} className='moreNews'>
                    更多+
            </a>
        </div>);
    }
}