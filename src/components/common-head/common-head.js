import React,{Component} from 'react';

import './common-head.css';
import Logo from '../main-logo/main-logo';
import Recommend from '../recommend/recommend';
import CommonHeadRight from '../common-head-right/common-head-right';
export default class OstBox extends Component{


    render(){
        return (<div className='header-content'>
                    <Logo/>
                    <Recommend/>
                    <CommonHeadRight/>
                </div>
            );
    }
}
