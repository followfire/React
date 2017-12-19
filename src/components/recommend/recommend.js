import React,{ Component } from "react";

import './recommend.css';
import RecommendContent from '../recommend-content/recommend-content';

export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            hover:false
        };
        this.handleMouseOver=this.handleMouseOver.bind(this);
        this.handleMouseLeave=this.handleMouseLeave.bind(this);
    }
    handleMouseOver(){
        // console.log(this);
        this.setState({
            hover:true
        });
    }
    handleMouseLeave(){
        this.setState({
            hover:false
        })
    }
    render(){
        return(
            <div onMouseOver={this.handleMouseOver} onMouseLeave={
                this.handleMouseLeave
            }>
                <a className='recommond'>
                </a>
                {
                   this.state.hover===true? <RecommendContent/>:''
                }
                
            </div>
        );
        
    }
}