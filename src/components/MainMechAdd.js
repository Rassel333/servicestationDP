import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import '../css/index.min.css';
const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;
import {addMainMech} from '../actions/adminActions';


export default class MainMechAdd extends React.Component{

    MechAdd(){
        const mech = {
            username: this.refs.nmainmechlogin.value,
            password: this.refs.nmainmechpw.value,
            stationid: this.refs.stationselect.value().value
        }
        this.props.dispatch(addMainMech(mech));
        document.forms['mechanic-add_modal-inner'].reset();
    }


	render(){
		return <div className="mechanic-add_modal">
                <form className="mechanic-add_modal-inner" name="mechanic-add_modal-inner">
                    <div className="mechanic-add-modal-row">
                        <label className="mechanic-add-modal-row_title">Логин</label>
                        <input type="text" placeholder="Логин" ref="nmainmechlogin"/>
                    </div>
                    <div className="mechanic-add-modal-row">
                        <label className="mechanic-add-modal-row_title">Пароль</label>
                        <input type="text" placeholder="Пароль" ref="nmainmechpw" />
						
                    }	
                    </div>
                    <div className="mechanic-add-modal-row">
                        <label className="mechanic-add-modal-row_title">Станция</label>
                        <SimpleSelect placeholder = "Выберите станцию" ref="stationselect" >
                        {this.props.stations.map(station=>{
                            return <option key={station.id} value={station.id}>{station.station_name}</option>
                            }
                        )}
                            
                        </SimpleSelect>
                        }	
                    </div>
                    <div className="mechanic-add-modal-button">
                        <button className="mechanic-add-modal-button_ok" 
                        onClick={this.MechAdd.bind(this)}>OK</button>
                        <button className="mechanic-add-modal-button_cancel">ОТМЕНА</button>
                    </div>
                </form>
            </div>
	}
}






export default connect(state => ({
    stations: state.adminStations
}))(MainMechAdd);