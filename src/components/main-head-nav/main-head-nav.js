import React,{ Component } from 'react';
import './main-head-nav.css';
import MainHeadNavItem from '../main-head-nav-item/main-head-nav-item';
import MainHeadLinklistItem from '../main-head-linklist-item/main-head-linklist-item';

const news=[{
    link:'',
    text:'公告'
},{
    link:'',
    text:'新闻'
},{
    link:'',
    text:'活动'
},
{
    link:'',
    text:'媒体'
},{
    link:'',
    text:'攻略'
},{
    link:'',
    text:'直播'
},{
    link:'',
    text:'客栈'
}];

const intro = [{
    link:'',
    text:'新手指南'
},{
    link:'',
    text:'游戏特色'
},{
    link:'',
    text:'世界背景'
},{
    link:'',
    text:'门派介绍'
},{
    link:'',
    text:'身份介绍'
},{
    link:'',
    text:'设定站'
},{
    link:'', 
    text:'公子羽主题站'
}];

const download=[{
    link:'',
    text:'游戏下载'
},{
    link:'',
    text:'硬件配置'
},{
    link:'',
    text:'门派介绍'
},{
    link:'',
    text:'服务器状态'
},{
    link:'',
    text:'精英服招募'
}];

const interactive=[{
    link:'',
    text:'活动中心'
},{
    link:'',
    text:'版本中心'
},{
    link:'',
    text:'天积系统'
},{
    link:'',
    text:'微博微信'
},{
    link:'',
    text:'官方论坛'
},{
    link:'',
    text:'官方同人站'
}];

const vision=[{
    link:'',
    text:'视频'
},{
    link:'',
    text:'音乐'
},{
    link:'',
    text:'壁纸'
},{
    link:'',
    text:'原画'
}];

const userCenter=[{
    link:'',
    text:'账号充值'
},{
    link:'',
    text:'角色查询'
},{
    link:'',
    text:'封停查询'
},{
    link:'',
    text:'礼包兑换'
},{
    link:'',
    text:'账号安全'
}];


const service=[{
    link:'',
    text:'在线客服'
},{
    link:'',
    text:'客服专区'
},{
    link:'',
    text:'用户协议'
},{
    link:'',
    text:'玩家条例'
}];
export default class MainHeadNav extends Component{
    render(){
        return (<div className='main-head-nav'>
                    <a href=''>
                        <MainHeadNavItem bgposition={{backgroundPosition:'0 100%'}}/>
                    </a>
                    <MainHeadNavItem  bgposition={{backgroundPosition:'-115px 100%'}}>
                        {news.map((item,index)=>{
                            return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                        })}
                    </MainHeadNavItem>
                    {/* 介绍 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-230px 100%'}}>
                        {intro.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                    {/* 下载 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-460px 100%'}}>
                        {download.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                    {/* 互动 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-575px 100%'}}>
                        {interactive.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                    {/* 视听 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-805px 100%'}}>
                        {vision.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                    {/* 用户中心 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-690px 100%'}}>
                        {userCenter.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                    {/* 客服 */}
                    <MainHeadNavItem bgposition={{backgroundPosition:'-920px 100%'}}>
                        {service.map((item,index)=>{
                                return <MainHeadLinklistItem key={index} link={item.link} text={item.text}/>
                            })}
                    </MainHeadNavItem>
                </div>
            );
    }
}