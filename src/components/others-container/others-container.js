import React  from 'react';
import styles from './others-container.css'
import OthersNav from '../others-nav/others-nav';
export default function (props){
    return (<div className={styles.container}>
                <OthersNav/>
            </div>);
}