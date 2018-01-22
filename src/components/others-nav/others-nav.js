
import React from 'react';
import styles from './others-nav.css';
import OthersNavItem from '../others-nav-item/others-nav-item';

const list = [{
    icon: '',
    href: '',
    text: '天衣阁'
},{
  icon: '',
    href: '',
    text: '同人站'
},{
  icon: '',
    href: '',
    text: '精英服'
},{
  icon: '',
    href: '',
    text: '道聚城'
},{
  icon: '',
    href: '',
    text: '心悦特权'
},{
  icon: '',
    href: '',
    text: '原声大碟'
},{
  icon: '',
    href: '',
    text: '账号安全'
},{
  icon: '',
    href: '',
    text: '在线客服'
}];

export default function(props){
  return (<div className={styles.nav}>
           {
             list.map((item,index)=>{
               return <OthersNavItem info={item} key={index}/>
             })
           }
          </div>);
}