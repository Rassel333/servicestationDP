import React from 'react';
import 'bootstrap-webpack';
import moment from 'moment';
require('bootstrap-datetimepicker-npm');
import '../vendor/bootstrap-datetimepicker.min';
import { connect } from 'react-redux';
import {getOrders, setStartDate, setOrderId, setFilter, getAdminStation} from '../actions/stationAdminActions'
import {getOrderInfo} from '../actions/ordersActions';
import OrderRow from '../components/OrderRow';


var nowDate = new Date();
var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
var socket;

export default class MOrdersTable extends React.Component{


   
	componentDidMount(){
        const dp3 = this.refs.datepicker3;
        const dp4 = this.refs.datepicker4;
        $(dp3).datetimepicker({
            language: 'ru',
            useCurrent: false,
            pickTime: false,
            format:  'YYYY-MM-DD'
        });

        $(dp4).datetimepicker({
            language: 'ru',
            useCurrent: false,
            pickTime: false,
            format:  'YYYY-MM-DD'
        });
         $(dp3).on('dp.change', (event)=> {
            $(dp4).data('DateTimePicker').setMinDate(event.date);
        });
        $(dp4).on('dp.change', (event)=>  {
            $(dp3).data('DateTimePicker').setMaxDate(event.date);
        });
        
        setTimeout(()=>{
            var startobj = JSON.stringify({action:"GET_ALL_STATION_ORDERS", accessToken: localStorage.getItem('access_token'), data: JSON.stringify({
            stationId: this.props.stationadmin.stationId
                })
            });
            socket = new WebSocket('ws://ss.com/api/ws');
            socket.onopen = ()=>{
                console.log('OK')
                socket.send(startobj)};
            
            socket.onerror = function(error){console.log('ERROR')};

            socket.onmessage = (event)=>{

                var socketdata = JSON.parse(event.data);
                if(socketdata.action == 'ORDERS_CHANGED'){
                    socket.send(startobj)
                }
                var orders = socketdata.data;
                this.props.dispatch(getOrders(orders))
                console.log('msg');
            }
            socket.onclose = ()=>{
                console.log('close');
            }
        }, 1000)

        

    }

    dp3click(){
        $(this.refs.datepicker3).change(()=>{
            this.refs.datepicker4.value = '';
            let dat = this.refs.datepicker3.value;
            this.props.dispatch(setStartDate(dat));
        })
    }
    dp4click(){
        var obj = {};
        $(this.refs.datepicker4).change(()=>{
            if(socket.readyState == 1){
                if(this.refs.datepicker3.value == ''){
                    obj = JSON.stringify({action:"GET_ALL_STATION_ORDERS", accessToken: localStorage.getItem('access_token'), data: JSON.stringify({
                                stationId: this.props.stationadmin.stationId,
                                startDate: today,
                                endDate: this.refs.datepicker4.value 
                            })
                        });
                    
                }else{
                    obj = JSON.stringify({action:"GET_ALL_STATION_ORDERS", accessToken: localStorage.getItem('access_token'), data: JSON.stringify({
                                stationId: this.props.stationadmin.stationId,
                                startDate: this.props.dateStart,
                                endDate: this.refs.datepicker4.value 
                            })
                        });
                }
                socket.send(obj)
                
            }
            
        })
    }

    showAllOrders(event){
        event.preventDefault();
        this.props.dispatch(setFilter('SHOW_ALL'));
        var startobj = JSON.stringify({action:"GET_ALL_STATION_ORDERS", accessToken: localStorage.getItem('access_token'), data: JSON.stringify({
            stationId: this.props.stationadmin.stationId 
            })
        });
        socket.send(startobj);
        this.refs.datepicker3.value = '';
        this.refs.datepicker4.value = '';
    }

    orderClick(id, index){
        this.props.dispatch(setOrderId(id, index));
      
        this.props.dispatch(getOrderInfo(this.props.orders[index]));
    
        

        setTimeout(()=>{this.props.dispatch({type: 'ROUTING',
                                        payload:{
                                        method: 'replace',
                                        nextUrl: 'station/orddtails'
                                        }
                                    })}, 600
        )
        
    }

    componentWillUnmount(){
        socket.close();
    }

    showCompl(event){
        event.preventDefault();
        this.props.dispatch(setFilter('SHOW_COMPLETED'));
    }

	render(){
		return <div classNameName="main-container-orders">
            <div classNameName="container-inner-umorders">
              <div className="user-orders-container">
                    <div className="toolbar">
                        <div className="toolbar-inner">
                            <div className="date-range-filter">
                                <div className="min-date dp">
                                    <p className="range-title">С</p>
                                    <div className="form-group">
                                        <div className="input-group date">
                                            <input type='text' className="form-control" id="datepicker3" onClick={this.dp3click.bind(this)} ref="datepicker3"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-date dp">
                                    <p className="range-title">по</p>
                                    <div className="form-group">
                                        <div className="input-group date">
                                            <input type="text" className="form-control" onClick={this.dp4click.bind(this)} id="datepicker4" ref="datepicker4"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-filter">
                                <a onClick={this.showAllOrders.bind(this)} style={{cursor: 'pointer'}} className="show-all status-filter-item">Все</a>
                                <a onClick={this.showCompl.bind(this)} style={{cursor: 'pointer'}} className="show-completed status-filter-item">Подтверждённые</a>
                            </div>
                        </div>

                    </div>
                    <div className="user-orders">
                        <table className="user-orders-table">
                            <thead>
                                <tr>
                                    <th>Марка</th>
                                    <th>Модель</th>
                                    <th>Дата оформления</th>
                                    <th>Цена</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.orders.map((order, index)=>{
                                    if(this.props.filter == 'SHOW_ALL'){
                                    return <tr onClick={()=>this.orderClick(order.id, index)} 
                                                key={order.id} className="table-row">
                                                <td>{order.carInfo.brand}</td>
                                                <td>{order.carInfo.model}</td>
                                                <td>{order.orderDate}</td>
                                                <td>{order.plannedCost} руб.</td>
                                                <td>{order.status == 'INIT' ? 'Принят' : 'Подтверждён'}</td>
                                            </tr>
                                        } else{
                                            if(order.status != 'INIT'){
                                                return <tr onClick={()=>this.orderClick(order.id, index)} 
                                                            key={order.id} className="table-row">
                                                            <td>{order.carInfo.brand}</td>
                                                            <td>{order.carInfo.model}</td>
                                                            <td>{order.orderDate}</td>
                                                            <td>{order.plannedCost} руб.</td>
                                                            <td>{order.status == 'INIT' ? 'Принят' : 'Подтверждён'}</td>
                                                        </tr>
                                            }
                                        }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>


        </div>
	}
}


export default connect(state => ({
    orders: state.allorders,
    stationadmin: state.getStationAdmin,
    dateStart: state.startDate,
    orderId: state.orderId,
    filter: state.filter
}))(MOrdersTable);