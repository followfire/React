import React from 'react';
import styles from './tongren-recommend.css';
import TongrenRecommendHeader from '../tongren-recommend-header/tongren-recommend-header';
import TongrenRecommendImg from '../tongren-recommend-img/tongren-recommend-img';
import TongrenRecommendLinks from '../tongren-recommend-links/tongren-recommend-links';
export default function(){
    return( <div className={styles.tongren}>
                <TongrenRecommendHeader/>
                <TongrenRecommendImg/>
                <TongrenRecommendLinks/>
            </div>);
}