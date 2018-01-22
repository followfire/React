import React, { Component } from 'react'
import './qr-code-controller.css';
export default class QrCodeController extends Component{
    handleClick(index){
        // console.log(index);
        this.props.changeState(index);
    }
    render(){
        return( <div className='qr-code-controller'>
                   {
                       this.props.itemList.map((item,index) => {
                           return (
                                <div key={index}>
                                    <span className={this.props.active===index?'active':''} 
                                        onClick={()=>this.handleClick(index)} 
                                        >{item}
                                    </span>
                                </div>);
                       })
                   }
                </div>);
    }
}