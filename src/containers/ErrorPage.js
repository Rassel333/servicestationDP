import React from 'react';
import Header from '../components/Header'
import { IndexRoutes } from '../pageRoutes/IndexRoutes';


export default class ErrorPage extends React.Component{
 
  render(){
    return <div>
      <Header pageroutes={IndexRoutes} />
      
       
    <div className="main-container-sign">
            <div className="container-inner-sign">
              <div className="form-container-sign">
                  <p>Вы не имеете прав доступа к данной странице. Авторизируйтейсь или создайте учётную запись</p>
                  
              </div>
               
            </div>


        </div>
        </div>
  }

}