
import React from 'react';
import styles from './others-nav-item.css';
export default function(props){
  return (<a href={props.info.href} className={styles.item}>
            <i className={styles.icon}>{props.info.icon}</i>
            {props.info.text}
          </a>);
}