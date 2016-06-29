import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import classnames from 'classnames';
require('jquery')(window);
import {editMechanic} from '../actions/stationAdminActions';
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




class StationMechanicEdit extends React.Component{

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
          fname: findDOMNode(this.refs.edsnamemech).value, 
          sname: findDOMNode(this.refs.edfnamemech).value
        }
      }



	componentDidMount(){
		//stadminmodal();
	}


	upd(prps){
		if(this.props.stmechid){
			let index = this.props.stmechid.index;
            if(prps !== this.props.stmechanics[index]){
            	alert('ok');
                this.refs.edsnamemech.value = this.props.stmechanics[index].lastname;
                this.refs.edfnamemech.value = this.props.stmechanics[index].firstname;
            }
        }
    }
    

	componentDidUpdate(prevProps){
		let previndex = !prevProps.stmechid ? -1 : prevProps.stmechid.index;
        this.upd(prevProps.stmechanics[previndex]);

	}

	mechanicEdit(){
		const edfname = this.refs.edfnamemech.value;
		const edsname = this.refs.edsnamemech.value;
		const id = this.props.stmechid.id;
		const index = this.props.stmechid.index;
		const edmech = {
			id: id,
			name: edfname,
			lastname: edsname
		}
		this.props.dispatch(editMechanic(edmech, index));
	}

	render(){
		return <div className="mechanic-edit_modal">
                <form className="mechanic-edit_modal-inner" name="mechanic-edit_modal-inner">
                    <div className="mechanic-edit-modal-row">
                        <label className="mechanic-edit-modal-row_title">Фамилия</label>
                        <input type="text" placeholder="Фамилия" ref="edsnamemech"
                        onChange={this.props.handleValidation('sname')}
                        onBlur={this.props.handleValidation('sname')}
                        onFocus={this.props.handleValidation('sname')}/>
                        {this.renderHelpText(this.props.getValidationMessages('sname')[0])} 
                    </div>
                    <div className="mechanic-edit-modal-row">
                        <label className="mechanic-edit-modal-row_title">Имя</label>
                        <input type="text" placeholder="Имя" ref="edfnamemech"
                        onChange={this.props.handleValidation('fname')}
                        onBlur={this.props.handleValidation('fname')}
                        onFocus={this.props.handleValidation('fname')}/>
                        {this.renderHelpText(this.props.getValidationMessages('fname')[0])} 
                    </div>
                    <div className="mechanic-edit-modal-button">
                        <button className="mechanic-edit-modal-button_ok" onClick={this.onSubmit.bind(this)}>OK</button>
                        <button className="mechanic-edit-modal-button_cancel">Cancel</button>
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
        this.mechanicEdit(event);
      }
    };
    this.props.validate(onValidate);
  }
}


export default connect(state => ({
    stmechanics: state.stationMechanics,
    openmodal: state.openmodal,
    stmechid: state.stationMechId
}))(validation(strategy(options))(StationMechanicEdit))