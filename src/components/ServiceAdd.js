import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import {addService} from '../actions/adminActions';


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
        alphanum: ' имеет некорректный формат'
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



class ServiceAdd extends React.Component{

	constructor(props){
		super(props);
        this.validatorTypes = {
          servname: Joi.string().label('Наименование'),
          price: Joi.number().positive().label('Стоимость')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

	getValidatorData() {
        return {
        servname: findDOMNode(this.refs.nsname).value,
		price: findDOMNode(this.refs.nsprice).value
        }
      }

	ServiceAdd(event){
        const nsname = this.refs.nsname.value;
        const nsprice = this.refs.nsprice.value;
        const service ={
            name: nsname,
            price: nsprice
        };
        this.props.dispatch(addService(service));
        document.forms['service-add_modal-inner'].reset();
    }

   

	render(){
		return <div className="service-add_modal">
                <form className="service-add_modal-inner" name="service-add_modal-inner">
                    <div className="service-add-modal-row">
                        <label className="service-add-modal-row_title">Наименование</label>
                        <input type="text" placeholder="Наименование услуги" ref="nsname"
                        onChange={this.props.handleValidation('servname')}
                        onBlur={this.props.handleValidation('servname')}/>
                        {this.renderHelpText(this.props.getValidationMessages('servname')[0])}
                    </div>
                    <div className="service-add-modal-row">
                        <label className="service-add-modal-row_title">Стоимость</label>
                        <input type="text" placeholder="Стоимость" ref="nsprice"
                        onChange={this.props.handleValidation('price')}
                        onBlur={this.props.handleValidation('price')}/>
                        {this.renderHelpText(this.props.getValidationMessages('price')[0])}
                    </div>
                    <div className="service-add-modal-button">
                        <button className="service-add-modal-button_ok" 
                        ref="service_add_ok"
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="service-add-modal-button_cancel">ОТМЕНА</button>
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
        this.ServiceAdd(event);
      }
    };
    this.props.validate(onValidate);
  }
}



export default connect()(validation(strategy(options))(ServiceAdd));