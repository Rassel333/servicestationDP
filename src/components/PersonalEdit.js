import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
import { editPersonalInf} from '../actions/userActions';
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
        base: ' должен содержать от 6 до 30 символов',
        min: ' должен содержать от 6 до 30 символов',
        max: ' должен содержать от 6 до 30 символов',
        length: ' должен содержать от 6 до 30 символов',
        alphanum: ' должен содержать от 6 до 30 символов',
        regex: {
            base: '  содержит некорректные символы',
            name: '  содержит некорректные символы'
        },
        email: ' некорректен'
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

class PersonalEdit extends React.Component{
	
	constructor(props){
		super(props);
        this.validatorTypes = {
          email: Joi.string().email().label('E-mail'), 
          pnumber: Joi.number().positive().label('Телефон')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

	getValidatorData() {
        return {
          email: findDOMNode(this.refs.uname).value, 
          pnumber: findDOMNode(this.refs.pnumber).value
        }
      }

 
    
    upd(prps){
            if(prps !== this.props.user){
                this.refs.uname.value = this.props.user.username;
                this.refs.fname.value = this.props.user.firstname;
                this.refs.sname.value = this.props.user.lastname;
                this.refs.pnumber.value = this.props.user.phone_number;
            }
        }
    

	componentDidUpdate(prevProps){
        this.upd(prevProps.user);

	}
	editpersInf(event){
        const uname = this.refs.uname.value;
        const firstname = this.refs.fname.value;
        const lastname = this.refs.sname.value;
        const phoneNumber = this.refs.pnumber.value;
        const user = {  
            username: uname,
            firstname: firstname,
            lastname: lastname,
            phone_number: phoneNumber
        };
        this.props.dispatch(editPersonalInf(user));
    }

	render(){
		return  <div className="personal-edit_modal">
                <form className="personal-edit_modal-inner" name="personal-edit_modal-inner">
                    <div className="personal-edit-modal-row">
                        <label htmlFor="edit-fname" className="personal-edit-modal-row_title">Имя</label>
                        <input type="text" id="edit-fname" placeholder="Имя" ref="fname"/>
                    </div>
                    <div className="personal-edit-modal-row">
                        <label htmlFor="edit-sname" className="personal-edit-modal-row_title">Фамилия</label>
                        <input type="text" id="edit-sname" placeholder="Фамилия" ref="sname"/>
                    </div>
                    <div className="personal-edit-modal-row">
                        <label htmlFor="edit-phone" className="personal-edit-modal-row_title">Телефон</label>
                        <input type="text" id="edit-phone" placeholder="Телефон" ref="pnumber"
                        onChange={this.props.handleValidation('pnumber')}
                        />
                        {this.renderHelpText(this.props.getValidationMessages('pnumber')[0])}
                    </div>
                    <div className="personal-edit-modal-row">
                        <label htmlFor="edit-email" className="personal-edit-modal-row_title">E-mail</label>
                        <input type="email" id="edit-email" placeholder="E-mail"  ref="uname"
                        onChange={this.props.handleValidation('email')}
                        onBlur={this.props.handleValidation('email')}/>

                        {this.renderHelpText(this.props.getValidationMessages('email')[0])}
                    </div>
                    <div className="personal-edit-modal-button">
                        <button className="personal-edit-modal-button_ok" 
                        disabled={this.props.getValidationMessages().length ? true: false} 
                        onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="personal-edit-modal-button_cancel">Cancel</button>
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
        this.editpersInf(event);
      }
    };
    this.props.validate(onValidate);
  }

}


export default connect(state => ({
    user: state.user
}))(validation(strategy(options))(PersonalEdit));