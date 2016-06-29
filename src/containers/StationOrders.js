import React from 'react';
import { StationRoutes } from '../pageRoutes/StationRoutes';
import Header from '../components/Header';
import {getAdminStation} from '../actions/stationAdminActions';
import { connect } from 'react-redux';

export default class StationOrders extends React.Component{

	componentWillMount(){
		this.props.dispatch(getAdminStation());
	}
    

    render(){
        return <div>
        <Header pageroutes={StationRoutes} />
            
                {this.props.children}

            
        </div>
    }

}

export default connect()(StationOrders);