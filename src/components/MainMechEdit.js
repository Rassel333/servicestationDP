import React from 'react';
import { connect } from 'react-redux';
require('jquery')(window);
import {editMainMech} from '../actions/adminActions';
import '../css/index.min.css';
const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;





export default class MainMechEdit extends React.Component{



	mechanicEdit(){
    
		const index = this.props.mainMechID.index;
    const edstation = (this.refs.edstationselect.value() == undefined) ? this.props.mainMechanics[index].stationId : this.refs.edstationselect.value().value;
		const edmech = {
			username: this.props.mainMechanics[index].username,
			stationId: edstation
		}
		this.props.dispatch(editMainMech(edmech, index));
	}

	render(){
		return <div className="mechanic-edit_modal">
                <form className="mechanic-edit_modal-inner" name="mechanic-edit_modal-inner">
                    <div className="mechanic-edit-modal-row">
                        <label className="mechanic-edit-modal-row_title">Станция</label>
                        <SimpleSelect ref="edstationselect" placeholder = "Выберите станцию">
                        {this.props.stations.map(station=>{
                            return <option key={station.id} value={station.id}>{station.station_name}</option>
                            }
                        )}
                        
                        </SimpleSelect>
                      } 
                    </div>
                    <div className="mechanic-edit-modal-button">
                        <button className="mechanic-edit-modal-button_ok" 
                        onClick={this.mechanicEdit.bind(this)}>OK</button>
                        <button className="mechanic-edit-modal-button_cancel">Cancel</button>
                    </div>
                </form>
            </div>
	}



}


export default connect(state => ({
    mainMechanics: state.mainMechanics,
    mainMechID: state.mainMechID,
    stations: state.adminStations
}))(MainMechEdit)