import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
require('jquery')(window);
import {addMechanic} from '../actions/stationAdminActions';
import {stadminmodal} from '../vendor/station-admin-modal';


const options={
  language:{
  any: {
        unknown: ' введены некорректные данные',
        invalid: ' введены некорректные данные',
        empty: ' не может отсутствовать',
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
            base: '  содержит некорректные символы',
            name: '  содержит некорректные символы'
        }
    }
  }
};



class StationMechanicAdd extends React.Component{


	constructor(props){
		super(props);
        this.validatorTypes = {
          fname: Joi.string().label('Имя'), 
          sname: Joi.string().label('Фамилия')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}


	getValidatorData() {
        return {
          fname: findDOMNode(this.refs.nsnamemech).value, 
          sname: findDOMNode(this.refs.nfnamemech).value
        }
      }

  componentDidUpdate(){
        let err=false;
        for(var key in this.refs){
            this.refs[key].value ? err=false : err=true;
        }
        if(!err){
            this.refs.stationmech_add_ok.disabled=false;
        }
    }
        
	componentDidMount(){
		//stadminmodal();
    this.refs.stationmech_add_ok.disabled=true;
	}

	mechanicAdd(event){
		const nfname = this.refs.nfnamemech.value;
		const nsname = this.refs.nsnamemech.value;
		const mechanic = {
			fname: nfname,
			lname: nsname
		} 
		this.props.dispatch(addMechanic(mechanic, this.props.stationadmin.stationId));
    document.forms['mechanic-add_modal-inner'].reset();
	}

  

    


	render(){
		return <div className="mechanic-add_modal">
                <form className="mechanic-add_modal-inner" name="mechanic-add_modal-inner">
                    <div className="mechanic-add-modal-row">
                        <label className="mechanic-add-modal-row_title">Фамилия</label>
                        <input type="text" placeholder="Фамилия" ref="nsnamemech"
                        onChange={this.props.handleValidation('sname')}
                        onBlur={this.props.handleValidation('sname')}
                        onFocus={this.props.handleValidation('sname')}/>
						{this.renderHelpText(this.props.getValidationMessages('sname')[0])}	


                    </div>
                    <div className="mechanic-add-modal-row">
                        <label className="mechanic-add-modal-row_title">Имя</label>
                        <input type="text" placeholder="Имя" ref="nfnamemech"
                        onChange={this.props.handleValidation('fname')}
                        onBlur={this.props.handleValidation('fname')}
                        onFocus={this.props.handleValidation('fname')}/>
						{this.renderHelpText(this.props.getValidationMessages('fname')[0])}	
                    </div>
                    <div className="mechanic-add-modal-button">
                        <button className="mechanic-add-modal-button_ok" 
                        ref="stationmech_add_ok"
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="mechanic-add-modal-button_cancel">ОТМЕНА</button>
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
        this.mechanicAdd(event);
      }
    };
    this.props.validate(onValidate);
  }
}

export default connect(state=>({
  stationadmin: state.getStationAdmin
}))(validation(strategy(options))(StationMechanicAdd));