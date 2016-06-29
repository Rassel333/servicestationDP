import React from 'react';
const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;
import ServiceInfo from '../components/ServiceInfo';
import { connect } from 'react-redux';
require('jquery')(window);
import { amodal } from '../vendor/admin-modal';
import { getAllServices, openEditModalService, deleteService, getDelService } from '../actions/adminActions';
import ConfirmWindow from '../components/ConfirmWindow';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ServiceAdd from '../components/ServiceAdd';
import ServiceEdit from '../components/ServiceEdit'


export default class Services extends React.Component{
    componentWillMount(){
        this.props.dispatch(getAllServices());
    }
    componentDidMount(){
        amodal();
    }

    editClick(id, index){
        this.props.dispatch(openEditModalService(id, index));
    }
    
    ServiceDelete(id, index){
        this.props.dispatch(getDelService(id, index));
    }
    serviceConfirmDelete(){
        let id = this.props.delService.id;
        let index = this.props.delService.index;
        this.props.dispatch(deleteService(id, index))
    }


	render(){
        var services = this.props.services.map((service, index) => {
                            return <ServiceInfo 
                                    key={service.id} 
                                    name={service.service_name}
                                    price={service.price}
                                    delete={()=>this.ServiceDelete(service.id, index)}
                                    editClick={()=> this.editClick(service.id, index)} />

                        });

		return <div>
			<div className="add-button-admin">
                        <button className="add-service">Добавить услугу</button>
            </div>
            <div className="services-info clearfix">
                        {services.length ? <ReactCSSTransitionGroup transitionName="services-transition" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                          {services}
                        </ReactCSSTransitionGroup>
                        : <div className="placeholder-text">Нет добавленных услуг</div>}
                        
                    </div>

           <ConfirmWindow onConfirm={()=> this.serviceConfirmDelete()}/>
           <div id="overlay2"></div>
            <ServiceEdit />
            <ServiceAdd />

            

		</div>
	}
}


export default connect(state => ({
    services: state.adminServices,
    serviceID: state.adminServiceID,
    delService: state.delService
}))(Services);