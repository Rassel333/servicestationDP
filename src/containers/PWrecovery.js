import React from 'react';
import { IndexRoutes } from '../pageRoutes/IndexRoutes';
import Header from '../components/Header';

export default class PWrecovery extends React.Component{
    render(){
        return <div>
        <Header pageroutes={IndexRoutes} />
        <div className="main-container-recovery">
            <div className="container-inner-recovery">
              <div className="form-container-recovery">
                  <form action="" className="recovery-form">
                     <h2 className="recovery-title">Введите ваш e-mail для сброса пароля</h2>
                      <div className="field-row-recovery e-mail">
                          <label for="recovery-mail">E-mail</label>
                          <input type="email" placeholder="E-mail" name="recovery-mail" />
                      </div>
                      <div className="recovery-button">
                          <button className="recovery-button_item">Отпаравить</button>
                      </div>
                  </form>
                  
              </div>
               
            </div>


        </div>
        </div>
    }

}