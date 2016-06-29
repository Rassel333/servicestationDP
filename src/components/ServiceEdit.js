import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import {editService} from '../actions/adminActions';



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

class ServiceEdit extends React.Component{

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
        servname: findDOMNode(this.refs.edname).value,
		price: findDOMNode(this.refs.edprice).value
        }
      }

      ServiceEdit(event){
        const id = this.props.serviceID.id
        const index = this.props.serviceID.index
        const edname = this.refs.edname.value;
        const edprice = this.refs.edprice.value;
        const serviceedited = {
            id: id,
            name: edname,
            price: edprice
        }
        this.props.dispatch(editService(serviceedited, index));
    }

    upd(prps){
        if(this.props.serviceID){
            var index = this.props.serviceID.index;
            if(prps !== this.props.services[index]){
                this.refs.edname.value = this.props.services[index].service_name;
                this.refs.edprice.value = this.props.services[index].price;
            }
        }
    }

    componentDidUpdate(prevProps){
        var previndex = !prevProps.serviceID ? -1: prevProps.serviceID.index;
        this.upd(prevProps.services[previndex])
    	
    }



	render(){
		return <div className="service-edit_modal">
                <form className="service-edit_modal-inner" name="service-edit_modal-inner">
                    <div className="service-edit-modal-row">
                        <label className="service-edit-modal-row_title">Наименование</label>
                        <input type="text" placeholder="Наименование услуги " ref="edname"
                        onChange={this.props.handleValidation('servname')}
                        onBlur={this.props.handleValidation('servname')}/>
                        {this.renderHelpText(this.props.getValidationMessages('servname')[0])}
                    </div>
                    <div className="service-edit-modal-row">
                        <label className="service-edit-modal-row_title">Стоимость</label>
                        <input type="text" placeholder="Стоимость" ref="edprice"
                        onChange={this.props.handleValidation('price')}
                        onBlur={this.props.handleValidation('price')}/>
                        {this.renderHelpText(this.props.getValidationMessages('price')[0])}
                    </div>
                    <div className="service-edit-modal-button">
                        <button className="service-edit-modal-button_ok" onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="service-edit-modal-button_cancel">Cancel</button>
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
        this.ServiceEdit(event);
      }
    };
    this.props.validate(onValidate);
  }
}


export default connect(state => ({
    services: state.adminServices,
    serviceID: state.adminServiceID
}))(validation(strategy(options))(ServiceEdit));