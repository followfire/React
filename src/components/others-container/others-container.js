import React  from 'react';
import styles from './others-container.css'
import OthersNav from '../others-nav/others-nav';
import QrCodeContainer from '../qr-code-container/qr-code-container';
import Partners from '../partners/partners';
export default function (props){
    return (<div className={styles.container}>
                <OthersNav/>
                <QrCodeContainer/>
                <Partners/>
            </div>);
}