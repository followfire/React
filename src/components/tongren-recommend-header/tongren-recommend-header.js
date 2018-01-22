import React from 'react';
import styles from './tongren-recommend-header.css';

export default function(){
    return( <div className={styles.header}>
                <h3 className='news-title'>
                    同人推荐
                </h3>
                <p>
                    <a href=''>
                        投稿参与
                    </a>
                    <a href=''>
                        更多+
                    </a>
                </p>
            </div>);
}