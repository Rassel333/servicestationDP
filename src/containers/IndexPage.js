import React from 'react';
import { IndexRoutes } from '../pageRoutes/IndexRoutes';
import Home from './Home';
import Header from '../components/Header';
import { connect } from 'react-redux';

export default class IndexPage extends React.Component{

	componentWillMount(){
		if ((localStorage.getItem('access_token') !== null) && (localStorage.getItem('role'))){
			switch(localStorage.getItem('role')){
				case 'ROLE_STATION_ADMIN':
					this.props.dispatch({
						type: 'ROUTING',
		          		payload: {
		            		method: 'replace',
		            		nextUrl: 'station'
		          		}
					}); break;
				case 'ROLE_ADMIN':
					this.props.dispatch({
						type: 'ROUTING',
		          		payload: {
		            		method: 'replace',
		            		nextUrl: 'admin'
		          		}
					}); break;
				case 'ROLE_USER':
					this.props.dispatch({
						type: 'ROUTING',
		          		payload: {
		            		method: 'replace',
		            		nextUrl: 'profile'
		          		}
					}); break;
				default: 
					this.props.dispatch({
						type: 'ROUTING',
		          		payload: {
		            		method: 'replace',
		            		nextUrl: 'error'
		          		}
					}); break;
			}
		}
	}

	render(){
		return <div>
			<Header pageroutes={IndexRoutes} />
			<Home />
			</div>
			

	}
}

export default connect()(IndexPage);