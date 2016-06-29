import React from 'react';
//import MechAdd from '../components/MechAdd'
//import StationAdd from '../components/StationAdd'
import Header from '../components/Header';
import { AdminRoutes } from '../pageRoutes/AdminRoutes';


export default class Admin extends React.Component{

    componentWillMount(){
        
    }

	render(){
		return <div>
            <Header pageroutes={AdminRoutes}/>
        <div className="main-container-admin">
            <div className="container-inner-admin">
                {this.props.children}

            </div>
            </div>
            

    </div>
                







                            
                        
	}
}