//export const SIGN_UP = 'SIGN_UP';
//export const SIGIN = 'SIGIN';
require('jquery')(window);


export function signIn(user){
	let form = $.param(user);
	return dispatch => {
		fetch('http://ss.com/oauth/token',{
			method: 'post',
			headers: {
				'Authorization': 'Basic MzUzYjMwMmM0NDU3NGY1NjUwNDU2ODdlNTM0ZTdkNmE6Mjg2OTI0Njk3ZTYxNWE2NzJhNjQ2YTQ5MzU0NTY0NmM=',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: 'grant_type=password&' + form 
		})
		.then(response => response.json())
		.then(access => {
			window.localStorage.setItem('access_token', access.access_token);
			fetch('http://ss.com/api/authority',{
			method: 'get',
			headers: {
				'Authorization': `Bearer ${access.access_token}`
				}
			})
			.then(response=> response.json())
			.then((role) => {
				if(localStorage.getItem('access_token') != 'undefined'){
					localStorage.setItem('role', role[0])
					switch(role[0]){
						case 'ROLE_USER':
							dispatch({type: 'ROUTING',
			            		payload:{
			            		method: 'push',
			            		nextUrl: 'profile'
			            		}
			            	}); break;
						case 'ROLE_STATION_ADMIN':
							dispatch({type: 'ROUTING',
			            		payload:{
			            		method: 'push',
			            		nextUrl: 'station'
			            		}
			            	}); break;
						case 'ROLE_ADMIN':
							dispatch({type: 'ROUTING',
			            		payload:{
			            		method: 'push',
			            		nextUrl: 'admin'
			            		}
			            	}); break;
						default: dispatch({type: 'ROUTING',
				            		payload:{
				            		method: 'push',
				            		nextUrl: 'error'
				            		}
				            	}); break;
					}

				}else{
					dispatch({type: 'ROUTING',
				        payload:{
				        method: 'push',
				        nextUrl: 'signinerror'
				        }
			        });
				}
				
			})
		
		})
	}
}

export function signUp(user){
	return dispatch => {
		fetch('http://ss.com/api/user',{
			method: 'post',
			headers: {
				'Authorization': 'Basic MzUzYjMwMmM0NDU3NGY1NjUwNDU2ODdlNTM0ZTdkNmE6Mjg2OTI0Njk3ZTYxNWE2NzJhNjQ2YTQ5MzU0NTY0NmM=',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user.name,
				password: user.password
			})
		})
		.then((response)=>{
			if(response.status == 200){
				dispatch({
            	type: 'ROUTING',
            	payload:{
            		method: 'push',
            		nextUrl: 'signup'
            		}
            	})
			}else{
				dispatch({
            	type: 'ROUTING',
            	payload:{
            		method: 'push',
            		nextUrl: 'signuperror'
            		}
            	})
			}
			
		})
	}
}