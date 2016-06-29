import React from 'react';
import {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Header from '../components/Header';
import { IndexRoutes } from '../pageRoutes/IndexRoutes';
import { connect } from 'react-redux';
import { signIn} from '../actions/signActions';





export default class SigninPage extends React.Component{


  signIn(event){
      event.preventDefault();
      const username = this.refs.uname.value;
      const userpw = this.refs.upw.value;
      const user = {
            username: username,
            password: userpw
          };
      this.props.dispatch(signIn(user));
  }
  
	render(){
		return <div>
      <Header pageroutes={IndexRoutes} />
    <div className="main-container-sign">
            <div className="container-inner-sign">
              <div className="form-container-sign">
                  <form action="" className="signin-form-sign">
                      <div className="field-row-sign e-mail">
                          <label htmlFor="sign-mail">E-mail</label>
                          <input type="email" placeholder="E-mail" name="sign-mail" ref="uname" />
                      </div>
                      <div className="field-row-sign password">
                          <label htmlFor="sing-password">Пароль</label>
                          <input type="password" placeholder="Пароль" name="sign-password" ref="upw" />
                      </div>
                      <span className="error-msg hidden">Неверный логин или пароль</span>
                      
                      <div className="signin-button-sign">
                          <button className="signin-button_item-sign" onClick={this.signIn.bind(this)}>Войти</button>
                      </div>
                  </form>
                  
              </div>
               
            </div>


        </div>
        </div>
	}

  
}


export default connect()(SigninPage);




