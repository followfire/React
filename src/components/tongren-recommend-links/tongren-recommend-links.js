import React from 'react';
import styles from './tongren-recommend-links.css';
import Link from '../main-head-linklist-item/main-head-linklist-item';
const list = [{
    text: '精品手绘集《如归》',
    link: ''
},{
    text: '这真的是一个惊悚片——嘲天宫惊魂',
    link: ''
},{
    text: '可爱卡通手绘——八荒罪犯收集录',
    link: ''
},{
    text: '【帮宣】纵使繁华落尽，我亦不负初心',
    link: ''
}];
export default function(){
    return( <div className={styles.container}>
               {
                list.map((item,index) => {
                    return <div className={styles.item} key={index}>
                                <Link text={item.text} link={item.link}/>
                            </div>    
                })
               } 
            </div>);
}