import React,{ Component } from 'react';
import './main.css';
import MainHead from '../main-head/main-head';
import MainContent from '../main-content/main-content';
export default class Main extends Component{
    render(){
        return (<div className='main'>
                    <MainHead/>
                    <MainContent/>
                </div>
            );
    }
}