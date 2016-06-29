import React from 'react';
import MechanicInfo from '../components/MechanicInfo';
import { connect } from 'react-redux';
require('jquery')(window);
import ConfirmWindow from '../components/ConfirmWindow';
//import { pmodal } from '../vendor/profile-modal';
import {getMechanics, getDelMechanic, openEditModalMech, deleteMechanic} from '../actions/stationAdminActions';
import StationMechanicEdit from '../components/StationMechanicEdit';
import StationMechanicAdd from '../components/StationMechanicAdd';
import {stadminmodal} from '../vendor/station-admin-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Mechanics extends React.Component{

    componentWillMount(){
        this.props.dispatch(getMechanics(this.props.stationadmin.stationId));
    }

    componentDidMount(){
        stadminmodal();
        
    }

    mechanicDelete(id, index){
        this.props.dispatch(getDelMechanic(id, index))
        
    }

    mechanicConfirmDelete(){
        let id = this.props.delMechanic.id;
        let index = this.props.delMechanic.index;
        this.props.dispatch(deleteMechanic(id, index))
    }

    editClick(id, index){
        this.props.dispatch(openEditModalMech(id, index))
    }
    


	render(){
        var mechs = this.props.stmechanics.map((mechanic, index) => {
                            return <MechanicInfo 
                                    key={index}
                                    fname={mechanic.firstname}
                                    sname={mechanic.lastname}
                                    delete={()=>this.mechanicDelete(mechanic.id, index)}
                                    editClick={()=> this.editClick(mechanic.id, index)} />

                        })
        return <div className="container-inner-admin">
			<div className="add-button-admin">
                        <button className="add-mechanic">Добавить механика</button>
            </div>
            <div className="mechanics-info clearfix">
                        {mechs.length ? 
                        <ReactCSSTransitionGroup transitionName="transition" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                          {mechs}
                        </ReactCSSTransitionGroup>
                        : <div className="placeholder-text">Нет добавленных механиков</div>}
                        
                    </div>



               
            
           <StationMechanicEdit />
           
           <StationMechanicAdd />
            
            <ConfirmWindow onConfirm={()=>this.mechanicConfirmDelete()}/>
            <div id="overlay"></div>
		</div>
	}
}



export default connect(state=>({
    stmechanics: state.stationMechanics,
    delMechanic: state.delStationMechanic,
    openModal: state.stationMechId,
    stationadmin: state.getStationAdmin
}))(Mechanics)