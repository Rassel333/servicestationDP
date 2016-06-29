import React from 'react';

export default class PersonalInfo extends React.Component{
	render(){
		return <div className="profile-p-info">
                        <p className="profile-title">Личная информация</p>
                        <i className="fa fa-pencil personal-edit" aria-hidden="true"></i>
                        <div className="p-info-row">
                            <p className="info-title">Фамилия</p>
                            <p className="info-text">{this.props.Sname}</p>
                        </div>
                        <div className="p-info-row">
                            <p className="info-title">Имя</p>
                            <p className="info-text">{this.props.Fname}</p>
                        </div>
                        <div className="p-info-row">
                            <p className="info-title">Телефон</p>
                            <p className="info-text">+{this.props.Number}</p>
                        </div>
                        <div className="p-info-row">
                            <p className="info-title">E-mail</p>
                            <p className="info-text">{this.props.Uname}</p>
                        </div>
                    </div>
	}
}