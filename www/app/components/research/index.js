import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as researchActions from "../../actions/researchActions.js"


class Research extends React.Component {
    constructor(props) {
        super(props);
        props.researchActions.loadServerData();
    }
    //组件已经上树
    componentDidMount(){
        this.chart = echarts.init(this.refs.box);
        this.chart.title = '小调查';
        var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['京东','淘宝','天猫','网易考拉','苏宁易购']
                },
                series: [
                    {
                        name:'购物网站',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            
                        ]
                    }
                ]
            };
            this.chart.setOption(option)
    }
    //组件即将接受props
    componentWillReceiveProps(newProps){
        //重设一下Data属性
        this.chart.setOption({
            series : {
                data:[
                    {value:newProps.A, name:'京东'},
                    {value:newProps.B, name:'淘宝'},
                    {value:newProps.C, name:'天猫'},
                    {value:newProps.D, name:'网易考拉'},
                    {value:newProps.E, name:'苏宁易购'}
                ]
            }
        })
    }
    render() {
        return (
            <div>
                <div ref="box" style={{"width":"500px","height":"300px","backgroundColor":"#eee"}}></div>
                <button onClick={()=>{this.props.researchActions.tp("A")}}>京东</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.tp("B")}}>淘宝</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.tp("C")}}>天猫</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.tp("D")}}>网易考拉</button>
                {" "}
                <button onClick={()=>{this.props.researchActions.tp("E")}}>苏宁易购</button>
            </div>
        );
    }
}
export default connect(
    ({researchReducer}) => {
        return {
            A : researchReducer.A,
            B : researchReducer.B,
            C : researchReducer.C,
            D : researchReducer.D,
            E : researchReducer.E
        }
    },
    (dispatch)=>({
        researchActions : bindActionCreators(researchActions, dispatch)
    })
)(Research);