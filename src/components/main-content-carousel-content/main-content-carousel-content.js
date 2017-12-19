import React,{Component} from 'react';
import './main-content-carousel-content.css';

export default class MainContentCarouselContent extends Component{
    render(){
        let width=this.props.width;
        let activePosition = this.props.activePosition;
        return(
            <div className='main-content-carousel-content'
                style={{width:this.props.width}}
            >
            <ul style={{left:activePosition*(-width),
                        transitionDuration:this.props.duration+'ms',
                        width:width*7
                     }}>
                {
                    this.props.picList.map((item,index)=>{
                        return(
                            <li key={index} style={{width:this.props.width}}>
                                <a href={item.url}>
                                    <img title={item.title} src={item.src} alt={item.title}/>
                                </a>
                            </li>);
                    })
                }
                
            </ul>
            </div>);
    }
}