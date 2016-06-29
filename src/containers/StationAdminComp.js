import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function stationAdminComp(Component){

  var res;
	class StationAdmComp extends Component{

	componentWillMount() {
      this.checkAuth()
    }

    checkAuth(){
    	 if ((localStorage.getItem('access_token') == null) || (localStorage.getItem('role') !== 'ROLE_STATION_ADMIN')) {
        	this.props.dispatch({
          		type: 'ROUTING',
          		payload: {
            		method: 'replace',
            		nextUrl: 'error'
          		}
        	});
          return res=false;
      	}else{
          return res=true;
        }
    }


		render(){
			return <div>
	          		{res === true
	            	? <Component {...this.props} />
	            	: null
          			}
        		</div>
        		
		}
	}


  return connect()(StationAdmComp);

}