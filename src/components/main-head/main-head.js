import React,{ Component } from 'react';
import './main-head.css';
import ProductLogo from '../product-logo/product-logo';
import MainHeadNav from '../main-head-nav/main-head-nav';

document.getElementsByTagName('body')[0].style.paddingTop='42px';
// console.log(document.getElementsByTagName('body')[0].style.paddingTop);
export default class MainHead extends Component{
    render(){
        return (<div className='main-head'>
                    <ProductLogo/>
                    <MainHeadNav/>
                </div>
            );
    }
}