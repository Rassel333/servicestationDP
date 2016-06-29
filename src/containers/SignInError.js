import React from 'react';
import Header from '../components/Header'
import { IndexRoutes } from '../pageRoutes/IndexRoutes';


export default class SignInError extends React.Component{
 
  render(){
    return <div>
      <Header pageroutes={IndexRoutes} />
      
       
    <div className="main-container-sign">
            <div className="container-inner-sign">
              <div className="form-container-sign">
                  <p>Ошибка входа. Введён неверный логин или пароль.</p>
                  
              </div>
               
            </div>


        </div>
        </div>
  }

}