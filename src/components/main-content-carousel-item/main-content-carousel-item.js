import React,{Component} from 'react';
import './main-content-carousel-item.css';

export default class MainCOntentCarouselItem extends Component{
    handleMouseOver=(e)=>{
        this.props.toIndex(this.props.selPosition);
    }
    handleMouseLeave=()=>{
        this.props.restartAnimation();
    }
    render(){
        // console.log(this.props.activePosition)
        return (<div 
        className={this.props.activePosition===this.props.selPosition?'main-content-carousel-item active':'main-content-carousel-item'}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
        >
                    <span>{this.props.text}</span>
                </div>
            );
    }
}