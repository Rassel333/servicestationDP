import React from 'react';
const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;
import StationInfo from '../components/StationInfo';
import { connect } from 'react-redux';
require('jquery')(window);
import { amodal } from '../vendor/admin-modal';
import {getStations, addStation, openEditModalStation, editStation, deleteStation, getDelStation} from '../actions/adminActions'
import ConfirmWindow from '../components/ConfirmWindow';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StationAdd from '../components/StationAdd';
import StationEdit from '../components/StationEdit'



export default class Stations extends React.Component{
    componentWillMount(){
        this.props.dispatch(getStations());
    }
    componentDidMount(){
        amodal();
    }



    
    editClick(id, index){
        this.props.dispatch(openEditModalStation(id, index));
    }
    
    StationDelete(id, index){
        this.props.dispatch(getDelStation(id, index));
    }
    stationConfirmDelete(){
        let id = this.props.delStation.id;
        let index = this.props.delStation.index;
        this.props.dispatch(deleteStation(id, index))

    }


	render(){
        var stations = this.props.stations.map((station, index) => {
                            return <StationInfo 
                                    key={station.id}
                                    name={station.station_name}
                                    adress={station.address}
                                    latitude={station.latitude}
                                    longitude={station.longitude}
                                    description={station.description}
                                    wtime={station.working_hours}
                                    wwtime={station.weekends_working_hours}
                                    delete={()=>this.StationDelete(station.id, index)}
                                    editClick={()=> this.editClick(station.id, index)} />

                        });
		return <div>
			<div className="add-button-admin">
                        <button className="add-station">Добавить станцию</button>
            </div>
            <div className="stations-info clearfix">
                        {stations.length ? <ReactCSSTransitionGroup transitionName="stations-transition" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                          {stations}
                        </ReactCSSTransitionGroup>
                        : <div className="placeholder-text">Нет добавленных станций</div>}
                        
                    </div>



            
            <ConfirmWindow onConfirm={()=> this.stationConfirmDelete()}/>
            <div id="overlay1"></div>
           
            <StationEdit />
            <StationAdd />
            
		</div>
	}
}

export default connect(state => ({
    stations: state.adminStations,
    stationID: state.adminStationID,
    delStation: state.delStation
}))(Stations);