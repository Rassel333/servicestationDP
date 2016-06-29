import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import { addCar} from '../actions/userActions';
import { pmodal } from '../vendor/profile-modal';



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
            base: '  содержит некорректные символы',
            name: '  содержит некорректные символы'
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




class CarAdd extends React.Component{
	
	constructor(props){
		super(props);
        this.validatorTypes = {
          vin: Joi.string().regex(/[A-HJ-NPR-Z0-9]/).min(17).max(17).label('VIN'),
          engvolume: Joi.number().positive().label('Объём двигателя'),
          regNumber: Joi.string().regex(/[a-zA-Z0-9]/).min(6).max(6).label('Рег. номер'),
          brand: Joi.string().label('Марка'),
          model: Joi.string().label('Модель')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

	getValidatorData() {
        return {
        vin: findDOMNode(this.refs.nvin).value,
		engvolume: findDOMNode(this.refs.nengvolume).value,
		regNumber: findDOMNode(this.refs.nregnumber).value,
		brand: findDOMNode(this.refs.nbrand).value,
		model: findDOMNode(this.refs.nmodel).value
        }
      }

	CarAdd(event){
        //event.preventDefault();
        const nbrand = this.refs.nbrand.value;
        const nmodel = this.refs.nmodel.value;
        const nengineVolume = this.refs.nengvolume.value;
        const nvin = this.refs.nvin.value;
        const nregistrationNumber = this.refs.nregnumber.value;
        const car ={
            brand: nbrand,
            model: nmodel,
            engine_volume: nengineVolume,
            vin: nvin,
            registration_number: nregistrationNumber
        };
        this.props.dispatch(addCar(car));
        document.forms['car-add_modal-inner'].reset();
        
    }
    

  
	render(){
		return <div className="car-add_modal">
                <form className="car-add_modal-inner" name="car-add_modal-inner">
                    <div className="car-add-modal-row">
                        <label className="car-add-modal-row_title">Марка</label>
                        <input type="text" placeholder="Марка" ref="nbrand"
                        autoFocus={true}
                        onChange={this.props.handleValidation('brand')}
                        onBlur={this.props.handleValidation('brand')}/>
                        {this.renderHelpText(this.props.getValidationMessages('brand')[0])}
                    </div>
                    <div className="car-add-modal-row">
                        <label className="car-add-modal-row_title">Модель</label>
                        <input type="text" placeholder="Модель" ref="nmodel"
                        onChange={this.props.handleValidation('model')}
                        onBlur={this.props.handleValidation('model')}/>
                        {this.renderHelpText(this.props.getValidationMessages('model')[0])}
                    </div>
                    <div className="car-add-modal-row">
                        <label className="car-add-modal-row_title">Объём двигателя</label>
                        <input type="text" placeholder="Объём двигателя" ref="nengvolume"
                        onChange={this.props.handleValidation('engvolume')}
                        onBlur={this.props.handleValidation('engvolume')}/>
                        {this.renderHelpText(this.props.getValidationMessages('engvolume')[0])}
                    </div>
                    <div className="car-add-modal-row">
                        <label className="car-add-modal-row_title">VIN</label>
                        <input type="text" placeholder="VIN" ref="nvin"
                        onChange={this.props.handleValidation('vin')}
                        onBlur={this.props.handleValidation('vin')}/>
                        {this.renderHelpText(this.props.getValidationMessages('vin')[0])}
                    </div>
                    <div className="car-add-modal-row">
                        <label className="car-add-modal-row_title">Рег.Номер</label>
                        <input type="text" placeholder="Регистрационный номер" ref="nregnumber"
                        onChange={this.props.handleValidation('regNumber')}
                        onBlur={this.props.handleValidation('regNumber')}/>
                        {this.renderHelpText(this.props.getValidationMessages('regNumber')[0])}
                    </div>
                    <div className="car-add-modal-button">
                        <button className="car-add-modal-button_ok"
                        ref="car_add_ok" 
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="car-add-modal-button_cancel">ОТМЕНА</button>
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
        this.CarAdd(event);
      }
    };
    this.props.validate(onValidate);
  }

}



export default connect()(validation(strategy(options))(CarAdd));