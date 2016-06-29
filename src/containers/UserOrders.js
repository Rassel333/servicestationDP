import React from 'react';
import { UserRoutes } from '../pageRoutes/UserRoutes';
import Header from '../components/Header';


export default class UserOrders extends React.Component{

    

    render(){
        return <div>
        <Header pageroutes={UserRoutes} />
            
                {this.props.children}

            
        </div>
    }

}