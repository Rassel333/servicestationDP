import React from 'react';
import Footer from '../components/Footer';





export default class App extends React.Component{
	
	render(){
		return <div className="global-container">
			{this.props.children}
			<Footer />
			</div>
	}
}