import React,{Component} from 'react';
import styles from './tongren.css';
import TongrenRecommend from '../tongren-recommend/tongren-recommend';
import TongrenBlindsItem from '../tongren-blinds-item/tongren-blinds-item';
const list = [{
    bgDefault: '0 0',
    bgActive: '-410px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
},{
    bgDefault: '-340px 0',
    bgActive: '-750px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
},{
    bgDefault: '-136px 0',
    bgActive: '-546px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
},{
    bgDefault: '-204px 0',
    bgActive: '-614px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
},{
    bgDefault: '-68px 0',
    bgActive: '-478px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
},{
    bgDefault: '-272px 0',
    bgActive: '-682px 0',
    title: '',
    newsList:[{
        text: '',
        link: ''
    }]
}];
export default class Tongren extends Component{
    constructor(props){
        super(props);
        this.state = {
            active:-1
        }
    }
    changeState=(index)=>{
        // console.log(index);
        if(index===this.state.active){
            this.setState({
                active:-1
            });
            return;
        }
        this.setState({
            active:index
        })
    }
    render(){
        return( <div className={styles.tongren}>
            <TongrenRecommend/>
            {
                list.map((item,index) => {
                    return (
                        <TongrenBlindsItem data={item} index={index} key={index} func={this.changeState}
                        active={this.state.active}/>
                );
                })
            }
        </div>);
    }
    
}
         
 