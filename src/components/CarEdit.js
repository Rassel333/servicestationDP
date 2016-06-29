import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import { editCar } from '../actions/userActions';
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


class CarEdit extends React.Component{

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
        vin: findDOMNode(this.refs.edvin).value,
		engvolume: findDOMNode(this.refs.edengineVol).value,
		regNumber: findDOMNode(this.refs.edregNumber).value,
		brand: findDOMNode(this.refs.edbrand).value,
		model: findDOMNode(this.refs.edmodel).value
        }
      }

  
    
    upd(prps){
        if(this.props.openmodal){
            var index = this.props.openmodal.index;
            if(prps !== this.props.cars[index]){
                this.refs.edbrand.value = this.props.cars[index].brand;
                this.refs.edmodel.value = this.props.cars[index].model;
                this.refs.edengineVol.value = this.props.cars[index].engine_volume;
                this.refs.edvin.value = this.props.cars[index].vin;
                this.refs.edregNumber.value = this.props.cars[index].registration_number;
            }
        }
    }

    componentDidUpdate(prevProps){
        var previndex = !prevProps.openmodal ? -1: prevProps.openmodal.index;
        this.upd(prevProps.cars[previndex])
    	
    }
    

    CarEdit(event){
        const id = this.props.openmodal.id
        const index = this.props.openmodal.index
        const edbrand = this.refs.edbrand.value;
        const edmodel= this.refs.edmodel.value ;
        const edengineVol = this.refs.edengineVol.value ;
        const edvin = this.refs.edvin.value ;
        const edregNumber = this.refs.edregNumber.value;
        const caredited = {
            id: id,
            brand: edbrand,
            model: edmodel,
            engine_volume: edengineVol,
            vin: edvin,
            registration_number: edregNumber
        }
        this.props.dispatch(editCar(caredited, index));

    }

	render(){
		return <div className="car-edit_modal">
                <form className="car-edit_modal-inner" name="car-edit_modal-inner">
                    <div className="car-edit-modal-row">
                        <label htmlFor="edit-brand" className="car-edit-modal-row_title">Марка</label>
                        <input type="text" id="edit-brand" placeholder="Марка" ref="edbrand"
                        onChange={this.props.handleValidation('brand')}
                        onBlur={this.props.handleValidation('brand')}
                        onFocus={this.props.handleValidation('brand')}/>
                        {this.renderHelpText(this.props.getValidationMessages('brand')[0])}
                    </div>
                    <div className="car-edit-modal-row">
                        <label htmlFor="edit-model" className="car-edit-modal-row_title">Модель</label>
                        <input type="text" id="edit-model" placeholder="Модель" ref="edmodel"
                        onChange={this.props.handleValidation('model')}
                        onBlur={this.props.handleValidation('model')}
                        onFocus={this.props.handleValidation('model')}/>
                        {this.renderHelpText(this.props.getValidationMessages('model')[0])}
                    </div>
                    <div className="car-edit-modal-row">
                        <label htmlFor="edit-eng-vol" className="car-edit-modal-row_title">Объём двигателя</label>
                        <input type="text" id="edit-eng-vol" placeholder="Объём двигателя" ref="edengineVol"
                        onChange={this.props.handleValidation('engvolume')}
                        onBlur={this.props.handleValidation('engvolume')}
                        onFocus={this.props.handleValidation('engvolume')}/>
                        {this.renderHelpText(this.props.getValidationMessages('engvolume')[0])}
                    </div>
                    <div className="car-edit-modal-row">
                        <label htmlFor="edit-vin" className="car-edit-modal-row_title">VIN</label>
                        <input type="text" id="edit-vin" placeholder="VIN" ref="edvin"
                        onChange={this.props.handleValidation('vin')}
                        onBlur={this.props.handleValidation('vin')}
                        onFocus={this.props.handleValidation('vin')}/>
                        {this.renderHelpText(this.props.getValidationMessages('vin')[0])}
                    </div>
                    <div className="car-edit-modal-row">
                        <label htmlFor="edit-reg-num" className="car-edit-modal-row_title">Рег.Номер</label>
                        <input type="text" id="edit-reg-num" placeholder="Регистрационный номер" ref="edregNumber"
                        onChange={this.props.handleValidation('regNumber')}
                        onBlur={this.props.handleValidation('regNumber')}
                        onFocus={this.props.handleValidation('regNumber')}/>
                        {this.renderHelpText(this.props.getValidationMessages('regNumber')[0])}
                    </div>
                    <div className="car-edit-modal-button">
                        <button className="car-edit-modal-button_ok" 
                        disabled={this.props.getValidationMessages().length ? true: false}
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="car-edit-modal-button_cancel">ОТМЕНА</button>
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
        this.CarEdit(event);
      }
    };
    this.props.validate(onValidate);
  }
}

export default connect(state => ({
    cars: state.cars,
    openmodal: state.openmodal
}))(validation(strategy(options))(CarEdit));