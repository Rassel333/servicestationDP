import React from 'react';
import {stadminmodal} from '../vendor/station-admin-modal';

export default class MechanicInfo extends React.Component{
	componentDidMount(){
       stadminmodal();
    }

	render(){
		return <div className="mechanic-info_item">
                            <i className="fa fa-trash mechanic-delete" aria-hidden="true" onClick={this.props.delete}></i>
                            <i className="fa fa-pencil mechanic-edit" aria-hidden="true" onClick={this.props.editClick}></i>
                            <div className="mechanic-info-row">
                                <p className="mechanic-info-title">Имя:</p>
                                <p className="mechanic-info-text">{this.props.fname}</p>
                            </div>
                            <div className="mechanic-info-row">
                                <p className="mechanic-info-title">Фамилия:</p>
                                <p className="mechanic-info-text">{this.props.sname}</p>
                            </div>
                        </div>
	}
}