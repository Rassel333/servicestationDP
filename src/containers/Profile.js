import React from 'react';
import PersonalInfo from '../components/PersonalInfo';
import Header from '../components/Header';
import { UserRoutes } from '../pageRoutes/UserRoutes';
require('jquery')(window);
import PersonalEdit from '../components/PersonalEdit';
import { pmodal } from '../vendor/profile-modal';
import { getPersonalInf, getDelCar, editPersonalInf, getCars, deleteCar, openEditModal  } from '../actions/userActions';
import { connect } from 'react-redux';
import CarItem from '../components/CarItem';
import ConfirmWindow from '../components/ConfirmWindow';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CarAdd from '../components/CarAdd';
import CarEdit from '../components/CarEdit';



export default class Profile extends React.Component{



   componentWillMount(){
        this.props.dispatch(getPersonalInf());
        this.props.dispatch(getCars());

    }
    componentDidMount(){
        pmodal();

    }
    

    


    CarDelete(id, index){
        this.props.dispatch(getDelCar(id, index))
        
    }

    carConfirmDelete(){
        let id = this.props.delCar.id;
        let index = this.props.delCar.index;
        this.props.dispatch(deleteCar(id, index))
    }
    

    
    editClick(id, index){
        this.props.dispatch(openEditModal(id, index));
    }
    

	render(){
        var cars = this.props.cars.map((car, index) => {
                            return <CarItem 
                                    key={car.id} 
                                    brand={car.brand}
                                    model={car.model}
                                    engineVolume={car.engine_volume}
                                    vin={car.vin}
                                    registrationNumber={car.registration_number}
                                    delete={()=>this.CarDelete(car.id, index)}
                                    editClick={()=> this.editClick(car.id, index)} />

                        })
		return  <div>
            <Header pageroutes={UserRoutes}/>
        <div className="main-container-profile">
            <div className="container-inner-profile">
                <div className="profile-info">
                    <PersonalInfo Fname={this.props.user.firstname} 
                        Sname={this.props.user.lastname} 
                        Uname={this.props.user.username}
                        Number={this.props.user.phone_number}
                        />
                    <div className="cars-info-profile">
                    {cars.length ? 
                        <ReactCSSTransitionGroup transitionName="cars-transition" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                          {cars}
                        </ReactCSSTransitionGroup>
                        : <div className="placeholder-text">Нет добавленных авто</div>}
                        
                    </div>
                    <div className="add-button-profile">
                        <button className="add-car-profile">Добавить авто</button>
                    </div>
                </div>

            </div>
            </div>

            <ConfirmWindow onConfirm={()=>this.carConfirmDelete()}/>

            <div id="overlay"></div>
           
           <PersonalEdit />
           <CarAdd />
           <CarEdit />
           

            

    </div>
	}
}


export default connect(state => ({
    user: state.user,
    cars: state.cars,
    openmodal: state.openmodal,
    delCar: state.delCar
}))(Profile);