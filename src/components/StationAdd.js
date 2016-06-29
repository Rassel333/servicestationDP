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
import {addStation} from '../actions/adminActions'



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


class StationAdd extends React.Component{

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
        name: findDOMNode(this.refs.nstname).value,
		adress: findDOMNode(this.refs.nstadress).value,
		lat: findDOMNode(this.refs.nstlat).value,
		long: findDOMNode(this.refs.nstlong).value,
		wtime: findDOMNode(this.refs.nstwtime).value,
		wwtime: findDOMNode(this.refs.nstwwtime).value
        }
      }


	StationAdd(event){
        const nstname = this.refs.nstname.value;
        const nstadress = this.refs.nstadress.value;
        const nstlat = this.refs.nstlat.value;
        const nstlong = this.refs.nstlong.value;
        const nstdescr = this.refs.nstdescr.value;
        const nstwtime = this.refs.nstwtime.value;
        const nstwwtime= this.refs.nstwwtime.value;
        const station ={
            name: nstname,
            adress: nstadress,
            latitude: nstlat,
            longitude: nstlong,
            description: nstdescr,
            working_hours: nstwtime,
            weekends_working_hours: nstwwtime
        };
        this.props.dispatch(addStation(station));
        document.forms['station-add_modal-inner'].reset();
    }

    componentDidUpdate(){
        let err=false;
        for(var key in this.refs){
            this.refs[key].value ? err=false : err=true;
        }
        if(!err){
            this.refs.station_add_ok.disabled=false;
        }
    }

    componentDidMount(){
      this.refs.station_add_ok.disabled=true;

    }


	render(){
		return <div className="station-add_modal">
                <form className="station-add_modal-inner" name="station-add_modal-inner">
                    <div className="station-add-modal-row">
                        <label className="station-add-modal-row_title">Название</label>
                        <input type="text" placeholder="Название" ref="nstname"
                        onChange={this.props.handleValidation('name')}
                        onBlur={this.props.handleValidation('name')}/>
                        {this.renderHelpText(this.props.getValidationMessages('name')[0])}
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-add-modal-row_title">Адрес</label>
                        <input type="text" placeholder="Адрес" ref="nstadress"
                        onChange={this.props.handleValidation('adress')}
                        onBlur={this.props.handleValidation('adress')}/>
                        {this.renderHelpText(this.props.getValidationMessages('adress')[0])}
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-add-modal-row_title">Описание</label>
                        <input type="text" placeholder="Описание" ref="nstdescr"/>
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-add-modal-row_title">Широта</label>
                        <input type="text" placeholder="Широта" ref="nstlat"
                        onChange={this.props.handleValidation('lat')}
                        onBlur={this.props.handleValidation('lat')}/>
                        {this.renderHelpText(this.props.getValidationMessages('lat')[0])}
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-add-modal-row_title">Долгота</label>
                        <input type="text" placeholder="Долгота" ref="nstlong"
                        onChange={this.props.handleValidation('long')}
                        onBlur={this.props.handleValidation('long')}/>
                        {this.renderHelpText(this.props.getValidationMessages('long')[0])}
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-edit-modal-row_title">Время работы</label>
                        <input type="text" placeholder="Пример: 10-17"  ref="nstwtime"
                        onChange={this.props.handleValidation('wtime')}
                        onBlur={this.props.handleValidation('wtime')}/>
                        {this.renderHelpText(this.props.getValidationMessages('wtime')[0])}
                    </div>
                    <div className="station-add-modal-row">
                        <label className="station-edit-modal-row_title">Время работы в выходные</label>
                        <input type="text" placeholder="Пример: 10-17"  ref="nstwwtime"
                        onChange={this.props.handleValidation('wwtime')}
                        onBlur={this.props.handleValidation('wwtime')}/>
                        {this.renderHelpText(this.props.getValidationMessages('wwtime')[0])}

                    </div>
                    <div className="station-add-modal-button">
                        <button className="station-add-modal-button_ok" 
                        ref="station_add_ok"
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="station-add-modal-button_cancel">ОТМЕНА</button>
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
        this.StationAdd(event);
      }
    };
    this.props.validate(onValidate);
  }
}



export default connect()(validation(strategy(options))(StationAdd));