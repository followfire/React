import React,{ Component } from "react";
import './main-content-carousel.css';
import MainContentCarouselController from '../main-content-carousel-controller/main-content-carousel-controller';
import MainContentCarouselContent from '../main-content-carousel-content/main-content-carousel-content';
export default class MainContentCarousel extends Component{
    constructor(props){
        super(props);
        // console.log(this.props.width)
        this.state={
            index:0
        };
        this.toIndex=this.toIndex.bind(this);
        this.animation=this.animation.bind(this);
    }
    animation(){
        // console.log('start timer');
        if(this.props.autoplay===true){
            let len = this.props.picList.length;
            var timer = setInterval(()=>{
                if(this.state.index===len-1){
                    this.setState({
                        index:-1
                    });
                }
                this.setState({
                    index:this.state.index+1
                });
            },this.props.interval);
            this.setState({
                timer:timer
            });
        }
    }
    toIndex(index){
        
        this.setState({
            index:index,
            timer:null
        });
        let timer = this.state.timer;
        if(timer!==null){
            // console.log('clear timer')
            clearInterval(timer);
        }
        // console.log(this.state.index);
    }
    componentDidMount(){
        this.animation();
    }
    render(){
        return (<div className='main-content-carousel'>
                    <MainContentCarouselContent 
                        activePosition={this.state.index}
                        {...this.props}
                        
                    />
                    <MainContentCarouselController 
                    activePosition={this.state.index}
                    toIndex={this.toIndex}
                    restartAnimation={this.animation}
                    ctrlList={this.props.ctrlList}
                    />
                </div>);
    }
}