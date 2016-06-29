import React from 'react';
import MainMechanicInfo from '../components/MainMechanicInfo';
import { connect } from 'react-redux';
require('jquery')(window);
import ConfirmWindow from '../components/ConfirmWindow';
import { amodal } from '../vendor/admin-modal';
//import {getMechanics, getDelMechanic, openEditModalMech, deleteMechanic} from '../actions/stationAdminActions';
//import StationMechanicEdit from '../components/StationMechanicEdit';
//import StationMechanicAdd from '../components/StationMechanicAdd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {getStations, getMainMechs, openEditModalMainMech, getDelMainMech, deleteMainMech} from '../actions/adminActions';
import MainMechAdd from '../components/MainMechAdd';
import MainMechEdit from '../components/MainMechEdit';

export default class MainMechanics extends React.Component{

    componentWillMount(){
       this.props.dispatch(getStations());
       this.props.dispatch(getMainMechs());

    }

    componentDidMount(){
       amodal();
        
    }

    mechanicDelete(id, index){
        this.props.dispatch(getDelMainMech(id, index))
        
    }

    mechanicConfirmDelete(){
        let id = this.props.delMainMech.id;
        let index = this.props.delMainMech.index;
        this.props.dispatch(deleteMainMech(id, index))
    }

    editClick(id, index){
        this.props.dispatch(openEditModalMainMech(id, index))
    }
    


    render(){
        var mechs =  this.props.mainMechanics.map((mechanic, index) => {
                            return <MainMechanicInfo 
                                    key={index}
                                    username={mechanic.username}
                                    password="***"
                                    station={
                                        this.props.stations.map((station)=>{
                                            if(station.id == mechanic.stationId){
                                                return station.station_name
                                            }
                                        })}
                                    delete={()=>this.mechanicDelete(mechanic.username, index)}
                                    editClick={()=> this.editClick(mechanic.username, index)} />

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


                    <MainMechAdd />
                    <MainMechEdit />
          
            
            <ConfirmWindow onConfirm={()=>this.mechanicConfirmDelete()}/>
            <div id="overlay3"></div>
        </div>
    }
}



export default connect(state=>({
    mainMechanics: state.mainMechanics,
    stations: state.adminStations,
    delMainMech: state.delMainMech
    /*delMechanic: state.delStationMechanic,
    openModal: state.stationMechId*/
}))(MainMechanics)