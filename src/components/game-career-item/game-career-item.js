import React,{ Component } from 'react';
import './game-career-item.css';

export default class GameCareer extends Component{
    drawStar=(index)=>{
        if(index>5||index<0) throw new Error('星级只能1到4');
        var list = [];
        for(let i=0;i<index;i++){
            // console.log(i);
            list.push(<i key={Math.random()+10} className='star full-star'></i>);
        }
        // console.log('split')
        for(let k=0;k<5-index;k++){
            // console.log(index);
            list.push(<i key={Math.random()+'a'} className='star empty-star'></i>);
        }
        return list;
    }
    render(){
        return (
            <div className='game-career-item'>
            {
                this.props.careerList.map((item,index)=>{
                    // console.log(this.props.active)
                    return (
                    <div key={index}>
                        <div className='charactor' style={{
                            backgroundImage: 'url('+item.imgUrl+')',
                            right:index===this.props.active?0:-150}}>
                        
                        </div>
                        <div className='intro' style={{
                            left:index===this.props.active?0:-150}}>
                            <h2 className='career'>
                                {item.career}
                            </h2>
                            <p className='desc'>
                                {item.desc}
                            </p>
                            <h3>
                                主武器：{item.mainweapon}
                            </h3>
                            <h3>
                                副武器：{item.secondaryweapon}
                            </h3>
                            <p className='hard'>
                            操作难度
                            </p>
                            <div className='star-container'>
                                {/* 根据传来的star绘制图形 */}
                                {this.drawStar(item.hard)}
                            </div>
                            <p className='btn-group'>
                                <a href='' className='btn btn-success'>详情介绍</a>
                                <a href='' className='btn btn-default'>门派攻略</a>
                            </p>
                        </div>
                    </div>);
                })
            }
            </div>);
        }

}