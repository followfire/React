/**
 * @author XZM
 * @description 百叶窗项
 */
import React ,{Component} from 'react';
import styles from './tongren-blinds-item.css';
import TongrenRecommend from '../tongren-recommend/tongren-recommend';


export default class extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        // console.log('called');
        this.props.func(this.props.index);
        
    }
    render(){
        let {data,index,active} = this.props;
        
        return( <div className={styles.container} style={{
                height:300,
                left:active>=index?(370/6)*index:360+(370/6)*index,
                top:0,
                position:'absolute'}}>

                <div className={styles.controller} style={{
                    backgroundPosition:active===index?data.bgActive:data.bgDefault,
                    width:370/6,
                    height:'100%',
                    float:'left'
                    }}
                    onClick={this.handleClick}>
                </div>
                <TongrenRecommend/>
            </div>);
    }
    
}