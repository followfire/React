import React,{ Component } from 'react';
import './news-box-content.css';
import NewsBoxContentList from '../news-box-content-list/news-box-content-list';

//构造标题 链接 和 所属板块 链接
const news = [{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
},{
    belong:{
        text:'新闻',
        url:''
    },
    self:{
        text:'就在人民大会堂！第二届天刀国风嘉年华等你来约',
        url:''
    }
}];

export default class NewsBoxContent extends Component{
    render(){
        return (
            <div className='news-box-content'>
                <div 
                style={{
                        left:-this.props.avtiveNum*320,
                        transitionDuration:this.props.duration
                    }}>
                    <NewsBoxContentList
                        newsList={news}/>
                        <NewsBoxContentList
                        newsList={news}/>
                        <NewsBoxContentList
                        newsList={news}/>
                        <NewsBoxContentList
                        newsList={news}/>
                        <NewsBoxContentList
                        newsList={news}/>
                </div>
            </div>
        );
    }
}