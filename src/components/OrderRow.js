import React from 'react';



export default class OrderRow extends React.Component{


	render(){
		return <tr onClick={this.props.click} key={this.props.id} className="table-row">
                                                <td>{this.props.brand}</td>
                                                <td>{this.props.model}</td>
                                                <td>{this.props.orderDate}</td>
                                                <td>{this.props.cost} руб.</td>
                                                <td>{this.props.status}</td>
                                            </tr>
	}
}