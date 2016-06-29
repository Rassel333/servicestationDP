import React from 'react';

export default class SignupModal extends React.Component{

	render(){
        return	<div className="signup_modal-index">
        <form className="signup_modal-inner">
            <div className="signup-modal-row">
                <label for="signup-email" className="signup-modal-row_title">E-mail</label>
                <input type="email" id="signup-email" placeholder="E-mail" />
            </div>
            <div className="signup-modal-row">
                <label for="signup-password" className="signup-modal-row_title">Пароль</label>
                <input type="password" id="signup-password" placeholder="Password" />
            </div>
            <div className="signup-modal-button">
                <button className="signup-modal-button_ok">РЕГИСТРАЦИЯ</button>
            </div>
        </form>
    </div>
	}
}