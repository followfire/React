import React, { Component } from "react";
import MainContentCarouselItem from  "../main-content-carousel-item/main-content-carousel-item";
import './main-content-carousel-controller.css';



export default class MainContentCarouselController extends Component{
   
    render(){
        let tmp = this.props;
        return(<div className='main-content-carousel-controller'>
           {/* 7个标签 */}
                {
                    this.props.ctrlList.map((item,index)=>{
                    return <MainContentCarouselItem 
                    text={item.text} 
                    key={index} 
                    selPosition={index} 
                    {...tmp}                      
                    />
                })
                }
            </div>);
    }
}