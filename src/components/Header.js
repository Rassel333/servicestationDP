import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default class Header extends React.Component{


	signOut(routepath){
		if(routepath == ''){localStorage.clear()}
	}

	render(){
		return <header id="header">
			<div className="logo-container">
                <Link to="" className="logo-link"></Link>
            </div>
            <nav id="main-nav">
					<ul className="nav-list clearfix">
					{
						this.props.pageroutes.map(route=>
							<li className="nav-item" key={route.routpath}>
							<NavLink
								onlyActiveOnIndex={route.active}
								key={route.routpath}
								to={`/${route.routpath}`}
								onClick={()=>this.signOut(route.routpath)}
							>
								<i className={`fa ${route.iclass}`} aria-hidden="true"></i>
							</NavLink>
							</li>
							)
						
					}
					</ul>
				</nav>
            </header>
	}

}
