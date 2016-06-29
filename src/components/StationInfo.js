import React from 'react';
import { amodal } from '../vendor/admin-modal';

export default class StationInfo extends React.Component{
    componentDidMount(){
        amodal();
    }
	render(){
		return <div className="station-info_item">
                            <i className="fa fa-trash station-delete" aria-hidden="true" onClick={this.props.delete}></i>
                            <i className="fa fa-pencil station-edit" aria-hidden="true" onClick={this.props.editClick}></i>
                            <div className="station-info-row">
                                <p className="station-info-title">Название:</p>
                                <p className="station-info-text">{this.props.name}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Адрес:</p>
                                <p className="station-info-text">{this.props.adress}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Описание:</p>
                                <p className="station-info-text">{this.props.description}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Будни:</p>
                                <p className="station-info-text">{this.props.wtime}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Выходные:</p>
                                <p className="station-info-text">{this.props.wwtime}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Широта:</p>
                                <p className="station-info-text">{this.props.latitude}</p>
                            </div>
                            <div className="station-info-row">
                                <p className="station-info-title">Долгота:</p>
                                <p className="station-info-text">{this.props.longitude}</p>
                            </div>
                        </div>
	}


}