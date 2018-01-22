import React,{ Component } from 'react';
import './main.css';
import MainHead from '../main-head/main-head';
import MainContent from '../main-content/main-content';
import MainContent2 from '../main-content-2/main-content-2';

export default class Main extends Component{
    render(){
        return (<div className='main'>
                    <MainHead/>
                    <MainContent/>
                    <MainContent2/>
                </div>
            );
    }
}