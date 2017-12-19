import React,{ Component } from 'react';
import './main.css';
import MainHead from '../main-head/main-head';
export default class Main extends Component{
    render(){
        return (<div className='main'>
                    <MainHead/>
                </div>
            );
    }
}