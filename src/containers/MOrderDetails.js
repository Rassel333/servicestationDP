import React from 'react';
import { UserRoutes } from '../pageRoutes/UserRoutes';
import Header from '../components/Header';
import 'bootstrap-webpack';
import moment from 'moment';
require('bootstrap-datetimepicker-npm');
import '../vendor/bootstrap-datetimepicker.min';
import '../css/index.min.css';
const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;
import {getOrderInfo, editOrder} from '../actions/ordersActions';
import {setOrderId, getMechanics} from '../actions/stationAdminActions';
import { connect } from 'react-redux';









export default class MOrderDetails extends React.Component{

    componentWillMount(){
      if(this.props.orderId == null){
        this.props.dispatch({type: 'ROUTING',
                                payload:{
                                method: 'replace',
                                nextUrl: 'station'
                                }
                            })
      }
    }
    
    componentDidMount(){
        if(this.props.orderId != null){  



      let dp = this.refs.dpckr;
      let orddate= this.props.orderInfo.orderDate.split(' ');
      $(dp).datetimepicker({
            language: 'ru',
            useCurrent: false,
            minDate: orddate[0],
            pickTime: false,
            format:  'YYYY-MM-DD'
        });

  }
    }


    OrderEdit(event){
      event.preventDefault();
      const order = {
        id: this.props.orderInfo.id,
        workDescription: this.props.orderInfo.workDescription,
        status: this.refs.statusselect.value().value,
        plannedCost: this.props.orderInfo.plannedCost,
        plannedEndDate: this.refs.dpckr.value,
        totalCost: this.props.orderInfo.plannedCost,
        endDate: this.refs.dpckr.value,
        services: this.props.orderInfo.services,
        carInfo: {
          id: this.props.orderInfo.carInfo.id,
          brand: this.props.orderInfo.carInfo.brand,
          model: this.props.orderInfo.carInfo.model,
          engine_volume: this.props.orderInfo.carInfo.engine_volume,
          vin: this.props.orderInfo.carInfo.vin,
          registration_number: this.props.orderInfo.carInfo.registration_number
        },
        orderDate: this.props.orderInfo.orderDate
      }
      //this.props.dispatch(editOrder(order));
      this.editOrder(order);
      this.props.dispatch({type: 'ROUTING',
                                payload:{
                                method: 'replace',
                                nextUrl: 'station'
                                }
                            });

    }
    prnt(event){
          event.preventDefault();
          window.print();
    }
    editOrder(order){
    fetch(`http://ss.com/api/order/${order.id}`,{
      method: 'put',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
              id: order.id,
              workDescription:order.workDescription,
              status: order.status,
              plannedCost: order.plannedCost,
              plannedEndDate: order.plannedEndDate,
              totalCost: order.totalCost,
              endDate: order.endDate,
              services: order.services,
              carInfo: {
                id: order.carInfo.id,
                brand: order.carInfo.brand,
                model: order.carInfo.model,
                engine_volume: order.carInfo.engine_volume,
                vin: order.carInfo.vin,
                registration_number: order.carInfo.registration_number
              },
              orderDate: order.orderDate
            })
    })

}
    
    render(){
       return <div className="main-container-order-details">
       	{(this.props.orderId != null) ? 
            <div className="container-inner-order-details">
              <div className="form-container-order-details">
                  <form action="" className="order-detail-form">
                      <div className="field-row-order-details">
                          <p className="detail-title">Авто:</p>
                          <p className="detail-description">{this.props.orderInfo.carInfo.brand + ' ' + this.props.orderInfo.carInfo.model}</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">VIN:</p>
                          <p className="detail-description">{this.props.orderInfo.carInfo.vin}</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Рег номер:</p>
                          <p className="detail-description">{this.props.orderInfo.carInfo.registration_number}</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Выбранные услуги:</p>
                          <p className="detail-description">{this.props.orderInfo.services.map(serv=> serv.service_name + ' ')}</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Описание:</p>
                          <p className="detail-description">{this.props.orderInfo.workDescription}</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Стоимость:</p>
                          <p className="detail-description">{this.props.orderInfo.plannedCost} руб.</p>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Дата завершения:</p>
                          <div className="detail-description">
                            {this.props.orderInfo.status == 'INIT' ? <div className="date-pick">
                                <div className="input-group date" id="datetimepicker-ico">
                                    <div className="date-input">
                                        <input type="text" className="form-control" id="datepicker-detail"  ref="dpckr"/>
                                    </div>
                                    <span className="input-group-addon">
                                <span className="glyphicon-calendar glyphicon"></span>
                                    </span>
                                </div>
                            </div> : this.props.orderInfo.plannedEndDate }
                              
                        </div>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Статус:</p>
                          <div className="detail-description">
                          {this.props.orderInfo.status == 'INIT' ?
                          <SimpleSelect placeholder = "Статус" ref="statusselect" >
                            <option value={'INIT'}>Принят</option>
                            <option value={'ACCEPTED'}>Подтверждён</option>
                          </SimpleSelect>
                          : 'Подтверждён'}
                          </div>
                      </div>
                  </form>
                  <div className="order-detail-button">
                          <button disabled={this.props.orderInfo.status == 'INIT' ? false : true}  onClick={this.OrderEdit.bind(this)} className="order-detail-button_item">ОК</button>
                  </div>
                  <div className="order-detail-button">
                          <button onClick={this.prnt.bind(this)} className="order-detail-button_item" disabled={(this.props.orderInfo.status == 'INIT') ? true : false}>Печать чека</button>
                  </div>
              </div>
               
            </div>

            : null }
        </div>
        
    }

}

export default connect(state => ({
    orderInfo: state.orderInfo,
    orderId: state.orderId,
    mechs: state.stationMechanics,
    stationadmin: state.getStationAdmin
}))(MOrderDetails);




