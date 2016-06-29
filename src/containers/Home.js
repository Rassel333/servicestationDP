import React from 'react';
import { Link } from 'react-router';
import DescriptionBox from '../components/DescriptionBox';
import IndexRegForm from '../components/IndexRegForm';
import SignupModal from '../components/SignupModal';
require('jquery')(window);
import '../vendor/home-modal';
import { connect } from 'react-redux';
import GMap from '../components/GoogleMap';
import { getStations} from '../actions/neworderActions';

export default class Home extends React.Component{
    componentWillMount(){
        this.props.dispatch(getStations());
    }


	render(){
        return <div className="main-container-index">
        <div className="container-inner-index clearfix">
            <DescriptionBox />
            <IndexRegForm />

            
            <div className="mobile-signup-link-index">
                <Link to="/signup" className="mobile-signup-index">Регистрация</Link>
            </div>
           
        </div>
        
         <div className="map-container-index">
                <GMap sts={this.props.stations}/>
        </div>

        <div id="overlay"></div>
        <SignupModal />
    </div>
	}
}

export default connect(state => ({
    stations: state.stations
}))(Home);