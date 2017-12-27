import React,{ Component } from 'react';
import './game-data.css';
import GameCareer from '../game-career/game-career';
import GameCareerController from '../game-career-controller/game-career-controller';

// ctroller 列表项
const controllerList=['','','','','','','',''];
//角色列表
const careerList=[{
    career:'神刀',
    desc:'刀含杀气腾幽朔，萧飒寒芒泣鬼神',
    mainweapon:'长刀',
    secondaryweapon:'鹰',
    hard:4,
    imgUrl:'/static/media/role-8.png'
},{
    career:'太白',
    desc:'流星白羽光出匣，一剑无痕雪漫山',
    mainweapon:'剑',
    secondaryweapon:'剑鞘',
    hard:4,
    imgUrl:'/static/media/role-4.png'
},{
    career:'神威',
    desc:'神威倒卷翻空浪，一举冲霄气势雄',
    mainweapon:'枪',
    secondaryweapon:'长弓',
    hard:3,
    imgUrl:'/static/media/role-3.png'
},{
    career:'唐门',
    desc:'雾霭云从飞星落，半影相依扇中情',
    mainweapon:'傀儡',
    secondaryweapon:'扇子',
    hard:5,
    imgUrl:'/static/media/role-5.png'
},{
    career:'丐帮',
    desc:'醉来豪气不可收，嘘作长虹贯牛斗',
    mainweapon:'缠手',
    secondaryweapon:'酒葫芦',
    hard:4,
    imgUrl:'/static/media/role-2.png'
},{
    career:'天香',
    desc:'竞夸天下双无绝，独立人间第一香',
    mainweapon:'伞',
    secondaryweapon:'伞中剑',
    hard:3,
    imgUrl:'/static/media/role-6.png'
},{
    career:'真武',
    desc:'灵妙潜通乘风起，太极玄虚若镜清',
    mainweapon:'双剑',
    secondaryweapon:'剑鞘',
    hard:4,
    imgUrl:'/static/media/role-1.png'
},{
    career:'五毒',
    desc:'动游碧落心无碍，静藏深渊迹绝踪',
    mainweapon:'双刃',
    secondaryweapon:'双刃',
    hard:5,
    imgUrl:'/static/media/role-7.png'
},];
export default class GameData extends Component{
    constructor(props){
        super(props);
        this.state={
            active:0
        };
        this.changeItem=this.changeItem.bind(this);
    }
    changeItem(index){
        this.setState({
            active:index
        });
    }
    render(){
        return (
            <div className='game-data'>
                <GameCareerController changeItem={this.changeItem} active={this.state.active} controllerList={controllerList}/>
                <GameCareer active={this.state.active} careerList={careerList}/>
            </div>
        );
    }
}