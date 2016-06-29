import React from 'react';
import DatePicker from '../components/DatePicker'
import CarSelector from '../components/CarSelector'
import OrderDescription from '../components/OrderDescription'
import Header from '../components/Header';
import { UserRoutes } from '../pageRoutes/UserRoutes';
import { connect } from 'react-redux';
import { setStationID, getStations, getBusyTime, getAllServices, makeOrder } from '../actions/neworderActions';
const ReactSelectize = require("react-selectize");
import '../css/index.min.css';
import { getCars } from '../actions/userActions';
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;
import GMap from '../components/GoogleMap';


export default class Order extends React.Component{
    constructor(props) {
    super(props);
    }
    
    componentDidMount(){
        this.props.dispatch(getStations());
    }
    sendStationID(id){
        this.props.dispatch(setStationID(id));
    }  


    componentWillMount(){
        
        this.props.dispatch(getAllServices());
        this.props.dispatch(getCars());
    }

    makeNewOrder(){
        const order = {
            udescription: !this.refs.udescr.value ? '' : this.refs.udescr.value,
            stationId: this.props.stationID,
            dateTime: this.props.newOrderDate + ' ' + this.props.newOrderTime,
            car: this.refs.carselect.value().value,
            services: this.refs.servselect.values().map(val=>{
                return {id: val.value}
            })
        }
        this.props.dispatch(makeOrder(order));
    }


 




	render(){
                            var options = this.props.services.map(service=>{
                                return {label: service.service_name, value:service.id}
                            });
        
		return   <div>
        <Header pageroutes={UserRoutes}/> 
        <div className="main-container-order">
            <div className="container-inner-order">
                <div className="map-container-order">
                    <GMap  click={(id)=> this.sendStationID(id)}
                            sts={this.props.stations}/>
                    
                </div>
                <div className="order-form">
                    <div className="order-form_item clearfix">
                        <p className="field-title-order">Дата и время</p>
                        <DatePicker stID={this.props.stationID} ref="dpckr"/>
                    </div>
                    <div className="order-form_item clearfix">
                        <p className="field-title-order">Выберите машину</p>
                        <SimpleSelect placeholder = "Выберите машину" ref="carselect" >
                        {this.props.cars.map(car=>{
                            return <option key={car.id} value={car.id}>{car.brand +' '+ car.model}</option>
                            }
                        )}
                            
                        </SimpleSelect>

                        
                    </div>
                    <div className="order-form_item clearfix">
                        <p className="field-title-order">Выберите услуги</p>
                        
                        <MultiSelect options = {options} ref="servselect" placeholder = "Выберите услуги" 
                                    />
                    </div>
                    <div className="order-form_item clearfix">
                        <p className="field-title-order">Описание</p>
                        <textarea ref="udescr" rows="7" className="order-description order-field" placeholder="Необязательное поле"></textarea>
                    </div>
                    <div className="order-form_item clearfix">
                        <button className="order-button" 
                        disabled={((this.props.stationID) && (this.props.newOrderDate) || (this.props.newOrderTime) && (this.refs.carselect.value())) ? false : true}
                        onClick={this.makeNewOrder.bind(this)}>Сделать заказ</button>
                    </div>
                </div>
            </div>


        </div>
        </div>

	}
}


export default connect(state => ({
    stations: state.stations,
    stationID: state.stationID,
    cars: state.cars,
    services: state.services,
    newOrderDate: state.newOrderDate,
    newOrderTime: state.newOrderTime
}))(Order);

