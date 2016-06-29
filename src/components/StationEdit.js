import React from 'react';
/*const ReactSelectize = require("react-selectize");
const SimpleSelect = ReactSelectize.SimpleSelect;
const MultiSelect = ReactSelectize.MultiSelect;*/
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import {editStation} from '../actions/adminActions'



const options={
  language:{
  any: {
        unknown: ' введены некорректные данные',
        invalid: ' введены некорректные данные',
        empty: ' не может быть пустым',
        required: ' введены некорректные данные',
        allowOnly: ' введены некорректные данные',
        default: ' введены некорректные данные',
    },
    string: {
        base: ' имеет некорректный формат',
        min: ' слишком короткий',
        max: ' слишком длинный',
        length: ' имеет некорректный формат',
        alphanum: ' имеет некорректный формат',
        regex: {
            base: '  пример: [10]-[18]',
            name: '  пример: [10]-[18]'
        }
    },
    number: {
        base: ' должен быть числом',
        min: ' должен быть числом',
        max: ' должен быть числом',
        less: ' должен быть числом',
        greater: ' должен быть числом',
        float: ' должен быть числом',
        integer: ' должен быть числом',
        positive: ' должен быть положительным числом',
        precision: ' должен быть числом',
        ref: ' должен быть числом',
        multiple: ' должен быть числом'
    }
  }
};




class StationEdit extends React.Component{

	constructor(props){
		super(props);
        this.validatorTypes = {
          name: Joi.string().label('Название'),
          adress: Joi.string().label('Адрес'),
          lat: Joi.number().positive().label('Широта'),
          long: Joi.number().positive().label('Долгота'),
          wtime: Joi.string().regex(/[0-23]-[0-23]/).label('Время работы'),
          wwtime: Joi.string().regex(/[0-23]-[0-23]/).label('Время работы в выходные')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

	getValidatorData() {
        return {
        name: findDOMNode(this.refs.edname).value,
		adress: findDOMNode(this.refs.edadress).value,
		lat: findDOMNode(this.refs.edlat).value,
		long: findDOMNode(this.refs.edlong).value,
		wtime: findDOMNode(this.refs.edwtime).value,
		wwtime: findDOMNode(this.refs.edwwtime).value
        }
      }

      StationEdit(event){
        const id = this.props.stationID.id
        const index = this.props.stationID.index
        const edname = this.refs.edname.value;
        const edadress = this.refs.edadress.value;
        const edlat = this.refs.edlat.value;
        const edlong = this.refs.edlong.value;
        const eddescr = this.refs.eddescr.value;
        const edwtime = this.refs.edwtime.value;
        const edwwtime= this.refs.edwwtime.value;
        const stationedited = {
            id: id,
            name: edname,
            adress: edadress,
            latitude: edlat,
            longitude: edlong,
            description: eddescr,
            working_hours: edwtime,
            weekends_working_hours: edwwtime
        }
        this.props.dispatch(editStation(stationedited, index));
    }


    upd(prps){
        if(this.props.stationID){
            var index = this.props.stationID.index;
            if(prps !== this.props.stations[index]){
                this.refs.edname.value = this.props.stations[index].station_name;
                this.refs.edadress.value = this.props.stations[index].address;
                this.refs.eddescr.value = this.props.stations[index].description;
                this.refs.edlat.value = this.props.stations[index].latitude;
                this.refs.edlong.value = this.props.stations[index].longitude;
                this.refs.edwtime.value = this.props.stations[index].working_hours;
                this.refs.edwwtime.value = this.props.stations[index].weekends_working_hours;
            }
        }
    }

    componentDidUpdate(prevProps){
        var previndex = !prevProps.stationID ? -1: prevProps.stationID.index;
        this.upd(prevProps.stations[previndex])
    	
    }



	render(){
		return <div className="station-edit_modal">
                <form className="station-edit_modal-inner" name="station-edit_modal-inner">
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Название</label>
                        <input type="text" placeholder="Название" ref="edname"
                        onChange={this.props.handleValidation('name')}
                        onBlur={this.props.handleValidation('name')}/>
                        {this.renderHelpText(this.props.getValidationMessages('name')[0])}
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Адрес</label>
                        <input type="text" placeholder="Адрес" ref="edadress"
                        onChange={this.props.handleValidation('adress')}
                        onBlur={this.props.handleValidation('adress')}/>
                        {this.renderHelpText(this.props.getValidationMessages('adress')[0])}
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Описание</label>
                        <input type="text" placeholder="Описание" ref="eddescr"/>
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Широта</label>
                        <input type="text" placeholder="Широта" ref="edlat"
                        onChange={this.props.handleValidation('lat')}
                        onBlur={this.props.handleValidation('lat')}/>
                        {this.renderHelpText(this.props.getValidationMessages('lat')[0])}
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Долгота</label>
                        <input type="text" placeholder="Долгота"  ref="edlong"
                        onChange={this.props.handleValidation('long')}
                        onBlur={this.props.handleValidation('long')}/>
                        {this.renderHelpText(this.props.getValidationMessages('long')[0])}
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Время работы</label>
                        <input type="text" placeholder="Пример: 10-17"  ref="edwtime"
                        onChange={this.props.handleValidation('wtime')}
                        onBlur={this.props.handleValidation('wtime')}/>
                        {this.renderHelpText(this.props.getValidationMessages('wtime')[0])}
                    </div>
                    <div className="station-edit-modal-row">
                        <label className="station-edit-modal-row_title">Время работы в выходные</label>
                        <input type="text" placeholder="Пример: 10-17"  ref="edwwtime"
                        onChange={this.props.handleValidation('wwtime')}
                        onBlur={this.props.handleValidation('wwtime')}/>
                        {this.renderHelpText(this.props.getValidationMessages('wwtime')[0])}
                    </div>
                    <div className="station-edit-modal-button">
                        <button className="station-edit-modal-button_ok" 
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="station-edit-modal-button_cancel">Cancel</button>
                    </div>
                </form>
            </div>
	}



	renderHelpText(message) {
        return (
         <span className='error-msg'>{message}</span>
        );
      }


  getClasses(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  }

  

  onSubmit(event) {
    event.preventDefault();
    const onValidate = error => {
      if (error) {
        
      } else {
        this.StationEdit(event);
      }
    };
    this.props.validate(onValidate);
  }
}


export default connect(state => ({
    stations: state.adminStations,
    stationID: state.adminStationID
}))(validation(strategy(options))(StationEdit));