import React,{ Component } from "react";
import './main-content.css';
import MainContentDownload from '../main-content-download/main-content-download';
import MainContentCarousel from '../main-content-carousel/main-content-carousel';
import MainWeekRecommend from '../main-week-recommend/main-week-recommend';

const picList=[{
    src:'http://game.gtimg.cn/upload/adw/image/1513600894/1513600894.jpg?_r=1513696422',
    title:'',
    url:' '
},
{
    src:'http://game.gtimg.cn/upload/adw/image/1513607018/1513607018.jpg?_r=1513696422',
    title:'',
    url:''
},
{
    src:'http://game.gtimg.cn/upload/adw/image/1513607013/1513607013.jpg?_r=1513696422',
    title:'',
    url:''
},
{
    // 4
    src:'http://game.gtimg.cn/upload/adw/image/1513607073/1513607073.jpg?_r=1513696422',
    title:'',
    url:''
},
{
    // 5
    src:'//game.gtimg.cn/upload/adw/image/20171219/1513696356.jpg?_r=1513696422',
    title:'',
    url:''
},
{
    // 6
    src:'http://game.gtimg.cn/upload/adw/image/1513608097/1513608097.jpg?_r=1513696422',
    title:'',
    url:''
},
{
    // 7
    src:'http://game.gtimg.cn/upload/adw/image/1513410393/1513410393.png?_r=1513696422',
    title:'',
    url:''
}];
const ctrlList =[{
    text:'百万Q币大放送'
},
{
    text:'金装飒雪暖冬扬纱'
},
{
    text:'八荒之血以换青龙'
},
{
    text:'青龙换世版本来袭'
},
{
    text:'天刀助手新活动'
},
{
    text:'新服潜龙之渊'
},
{
    text:'少年八荒'
}];
export default class MainContent extends Component{
    constructor(props){
        super(props);
        this.state={
            width:0
        };
    }
    componentDidMount(){
       let width = window.getComputedStyle(this.refs.container).width;
    //    console.log(width)
       this.setState({
           width:parseFloat(width)
       })
   }
    render(){
        
        return (<div className='main-content'>
                    <MainContentDownload/>
                    <div className='carousel-container' ref='container'>
                        <MainContentCarousel 
                        width={this.state.width}
                        picList={picList}
                        duration={300}
                        interval={3000}
                        autoplay={true}
                        ctrlList={ctrlList}
                        />
                    </div>
                    <MainWeekRecommend 
                        
                    />
                </div>);
    }
}