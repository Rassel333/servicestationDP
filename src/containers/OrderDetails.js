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
import {getStations} from '../actions/neworderActions'








export default class OrderDetails extends React.Component{

    componentWillMount(){
      if(this.props.orderId == null){
      window.location="http://ss.com/#/userorders";
      }
    }
    
    componentDidMount(){
      if(this.props.orderId != null){  
      this.props.dispatch(getStations());
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

    prnt(event){
      event.preventDefault();
      window.print();
    }


    render(){

       return  <div className="main-container-order-details">
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
                          <p className="detail-title">Станция:</p>
                          <div className="detail-description">
                            {this.props.stations.map(station=>{
                              if(station.id == this.props.orderInfo.stationId){
                                return station.station_name
                              }
                            })}
                        </div>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Дата завершения:</p>
                          <div className="detail-description">
                              {this.props.orderInfo.plannedEndDate}
                        </div>
                      </div>
                      <div className="field-row-order-details">
                          <p className="detail-title">Статус:</p>
                          <div className="detail-description">{(this.props.orderInfo.status == 'INIT') ? 'Принят' : 'Подтверждён'}</div>
                      </div>
                  </form>
                  <div className="order-detail-button">
                          <button onClick={this.prnt.bind(this)} className="order-detail-button_item" disabled={(this.props.orderInfo.status == 'INIT') ? true : false}>Печать чека</button>
                  </div>
              </div>
               
            </div>
            : null}

        </div> 
        
    }

}

export default connect(state => ({
    orderInfo: state.orderInfo,
    orderId: state.orderId,
    mechs: state.stationMechanics,
    stations: state.stations
}))(OrderDetails);