import React from 'react';
import { pmodal } from '../vendor/profile-modal';

export default class CarItem extends React.Component{
    componentDidMount(){
        pmodal();
    }
	render(){
		return <div className="car-info_item-profile">
                            <i className="fa fa-trash car-delete" aria-hidden="true" onClick={this.props.delete}></i>
                            <i className="fa fa-pencil car-edit" aria-hidden="true" onClick={this.props.editClick}></i>
                            <div className="car-info-row-profile">
                                <p className="car-info-title-profile">Марка:</p>
                                <p className="car-info-text-profile">{this.props.brand}</p>
                            </div>
                            <div className="car-info-row-profile">
                                <p className="car-info-title-profile">Модель:</p>
                                <p className="car-info-text-profile">{this.props.model}</p>
                            </div>
                            <div className="car-info-row-profile">
                                <p className="car-info-title-profile">Объём двигателя:</p>
                                <p className="car-info-text-profile">{this.props.engineVolume}</p>
                            </div>
                            <div className="car-info-row-profile">
                                <p className="car-info-title-profile">VIN:</p>
                                <p className="car-info-text-profile">{this.props.vin}</p>
                            </div>
                            <div className="car-info-row-profile">
                                <p className="car-info-title-profile">Рег. Номер:</p>
                                <p className="car-info-text-profile">{this.props.registrationNumber}</p>
                            </div>
                        </div>
	}


}