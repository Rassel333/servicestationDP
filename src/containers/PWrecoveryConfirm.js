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
                     <h2 className="recovery-title">Введите ваш новый пароль</h2>
                      <div className="field-row-recovery password">
                          <label for="confirm-password">Пароль</label>
                          <input type="password" placeholder="E-mail" name="confirm-password" />
                      </div>
                      <div className="recovery-button">
                          <button className="recovery-button_item">Сбросить пароль</button>
                      </div>
                  </form>
                  
              </div>
               
            </div>


        </div>
        </div>
    }

}