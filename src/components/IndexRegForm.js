import React from 'react';
import { signUp} from '../actions/signActions';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';

import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';


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
            base: '  должен начинаться с заглавной буквы',
            name: '  должен начинаться с заглавной буквы'
        },
        email: ' некорректен'
    }
  }
};


class IndexRegForm extends React.Component{
	constructor(props){
		super(props);
        this.validatorTypes = {
          email: Joi.string().email().label('Логин'),
          password: Joi.string().regex(/[A-Z][a-zA-Z0-9]{5,30}/).label('Пароль')
        };

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
	}

      getValidatorData() {
        return {
          email: findDOMNode(this.refs.nuname).value,
          password: findDOMNode(this.refs.nupw).value
        }
      }
    
    signUser(event){
    	//event.preventDefault();
  		const username = this.refs.nuname.value;
  		const userpw = this.refs.nupw.value;
        const user ={
            name: username,
            password: userpw
        };
        this.props.dispatch(signUp(user));
    }

	render(){
		return <div className="reg-form_container-index">
                <form className="reg-form-index">
                    <div className="form-input-index">
                        <input type="email" placeholder="E-mail" ref="nuname" 
                                  onBlur={this.props.handleValidation('email')} />
                          {this.renderHelpText(this.props.getValidationMessages('email')[0])}
                    </div>
                    <div className="form-input-index last-input">
                        <input type="password" placeholder="Пароль" ref="nupw"  
                                  onBlur={this.props.handleValidation('password')} />
                          {this.renderHelpText(this.props.getValidationMessages('password')[0])}
                    </div>
                    <button className="reg-button-index" onClick={this.onSubmit.bind(this)}>РЕГИСТРАЦИЯ</button>
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
        //form has errors; do not submit
      } else {
        this.signUser(event);
      }
    };
    this.props.validate(onValidate);
  }

}


export default connect(state => ({
    users: state.users
}))(validation(strategy(options))(IndexRegForm));