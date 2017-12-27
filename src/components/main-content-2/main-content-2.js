import React,{ Component } from "react";
import './main-content-2.css';

import MainContent2PicNav from '../main-content-2-picnav/main-content-2-picnav';
import NewsBox from '../news-box/news-box';
import EventCenter from '../event-center/event-center';
import GameData from '../game-data/game-data';

export default class MainContent2 extends Component{

    render(){ 
        return (<div className='main-content main-content-2'>
                    <MainContent2PicNav />
                    <div className='newsbox-container'>
                        <NewsBox/>
                    </div>
                    <EventCenter/>
                    <GameData/>
                </div>);
    }
}