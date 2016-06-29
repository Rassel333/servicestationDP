import React from 'react';
import { Route, IndexRoute, IndexRedirect  } from 'react-router';
import App from './containers/App';
import IndexPage from './containers/IndexPage';
import Home from './containers/Home';
import Admin from './containers/Admin';
import Order from './containers/Order';
import Profile from './containers/Profile';
import SigninPage from './containers/Signin';
import Signup from './containers/Signup';
import PWrecovery from './containers/PWrecovery';
import PWrecoveryConfirm from './containers/PWrecoveryConfirm';
import Stations from './containers/Stations';
import Services from './containers/Services';
import UserOrders from './containers/UserOrders';
import StationOrders from './containers/StationOrders';
import OrderDetails from './containers/OrderDetails';
import MOrdersTable from './containers/MOrdersTable';
import UOrdersTable from './containers/UOrdersTable';
import Mechanics from './containers/Mechanics';
import MainMechanics from './containers/MainMechanics';
import ErrorPage from './containers/ErrorPage';
import requComp from './containers/AuthComp';
import adminComp from './containers/AdminComp';
import stationAdminComp from './containers/StationAdminComp'
import SignUpError from './containers/SignUpError';
import SignInError from './containers/SignInError';
import MOrderDetails from './containers/MOrderDetails';



export const routes = ( 
<Route path="/" component={App} >
	<IndexRoute component={IndexPage} />
		<Route path="signup" component={Signup} />
		<Route path="signin" component={SigninPage} />
		<Route path="admin" component={Admin}>
			<IndexRedirect to="stations" />
			<Route path="stations" component={Stations}/>
			<Route path="mainmechanics" component={MainMechanics}/>
			<Route path="services" component={Services}/>
		</Route>
		<Route path="pwrecovery" component={PWrecovery} />
		<Route path="pwrecoveryconfirm" component={PWrecoveryConfirm} />
		<Route path="profile" component={requComp(Profile)} />
		<Route path="neworder" component={requComp(Order)} />
		<Route path="userorders" component={requComp(UserOrders)}>
			<IndexRoute component={UOrdersTable}/>
			<Route path="orderdetails" component={OrderDetails} />
		</Route>
		<Route path="station" component={stationAdminComp(StationOrders)}>
			<IndexRoute component={MOrdersTable}/>
			<Route path="orddtails" component={MOrderDetails} />
			<Route path="mechanics" component={Mechanics} />
		</Route>
		<Route path="error" component={ErrorPage}/>
		<Route path="signuperror" component={SignUpError} />
		<Route path="signinerror" component={SignInError} />
		
</Route>
)


  


/*, data:JSON.stringify({
            startDate: "2016-06-01",
            endDate: "2016-06-02"
        }) */