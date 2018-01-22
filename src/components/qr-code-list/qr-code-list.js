import React, { Component } from 'react'
import './qr-code-list.css';


export default class QrCodeList extends Component{
    render(){
        return( <div className='qr-code-list'>
                    {
                       this.props.imgList.map((item,index) => {
                           return (<div key={index}>
                                        {
                                            this.props.active===index?
                                            <img src={item} alt='失败'/>:''
                                        } 
                                    </div>);
                       })
                   }
                </div>);
    }
}