import React from 'react';
import { amodal } from '../vendor/admin-modal';

export default class serviceInfo extends React.Component{
    componentDidMount(){
        amodal();
    }
	render(){
		return <div className="service-info_item">
                            <i className="fa fa-trash service-delete" aria-hidden="true" onClick={this.props.delete}></i>
                            <i className="fa fa-pencil service-edit" aria-hidden="true" onClick={this.props.editClick}></i>
                            <div className="service-info-row">
                                <p className="service-info-title">Наименование:</p>
                                <p className="service-info-text">{this.props.name}</p>
                            </div>
                            <div className="service-info-row">
                                <p className="service-info-title">Стоимость:</p>
                                <p className="service-info-text">{this.props.price}</p>
                            </div>
                        </div>
	}


}