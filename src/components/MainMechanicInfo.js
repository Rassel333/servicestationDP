import React from 'react';
import {amodal} from '../vendor/admin-modal';


export default class MainMechanicInfo extends React.Component{
	componentDidMount(){
       amodal();
    }

	render(){
		return <div className="mechanic-info_item">
                            <i className="fa fa-trash mechanic-delete" aria-hidden="true" onClick={this.props.delete}></i>
                            <i className="fa fa-pencil mechanic-edit" aria-hidden="true" onClick={this.props.editClick}></i>
                            <div className="mechanic-info-row">
                                <p className="mechanic-info-title">Логин:</p>
                                <p className="mechanic-info-text">{this.props.username}</p>
                            </div>
                            <div className="mechanic-info-row">
                                <p className="mechanic-info-title">Пароль:</p>
                                <p className="mechanic-info-text">{this.props.password}</p>
                            </div>
                            <div className="mechanic-info-row">
                                <p className="mechanic-info-title">Станция:</p>
                                <p className="mechanic-info-text">{this.props.station}</p>
                            </div>
                        </div>
	}
}


