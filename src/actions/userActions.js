export const GET_PERSONAL_INF = 'GET_PERSONAL_INF';
export const ADD_CAR = 'ADD_CAR';
export const GET_CARS = 'GET_CARS';
export const EDIT_PERSONAL_INF = 'EDIT_PERSONAL_INF';
export const EDIT_CAR = 'EDIT_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const GET_DEL_CAR = 'GET_DEL_CAR';

export function getPersonalInf(){
	return dispatch=>{
		fetch('http://ss.com/api/user',{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(user => dispatch({
			type: GET_PERSONAL_INF,
			payload: user
			})
		)
	}	
}


export function getDelCar(id, index){
	return {
		type: GET_DEL_CAR,
		payload:{
			id, 
			index
		}
	}
}
export function openEditModal(id, index){
	return {
		type: OPEN_EDIT_MODAL,
		payload: {
				id,
				index
		}
	}
}
export function editPersonalInf(user){
	return dispatch=>{
		fetch('http://ss.com/api/user',{
			method: 'put',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				phone_number: user.phone_number
			})
		})
		.then(() => dispatch({type: EDIT_PERSONAL_INF,payload: user}));

		
	}

}

export function getCars(){
	return dispatch=>{
		fetch('http://ss.com/api/car',{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(cars => dispatch({
			type: GET_CARS,
			payload: cars 
			})
		)
	}
}
export function editCar(car, index){
	return dispatch=>{
		fetch(`http://ss.com/api/car/${car.id}`,{
			method: 'put',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				brand: car.brand,
				model: car.model,
				engine_volume: car.engine_volume,
				vin: car.vin,
				registration_number: car.registration_number
			})
		})
		.then(response => response.json())
		.then( car => dispatch({
			type: EDIT_CAR,
			payload: {
				car,
				index
			}
			}))
	}



}
export function addCar(car){
	return dispatch=>{
		fetch('http://ss.com/api/car',{
			method: 'post',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				brand: car.brand,
				model: car.model,
				engine_volume: car.engine_volume,
				vin: car.vin,
				registration_number: car.registration_number
			})
		})
		.then(response => response.json())
		.then( (car) => dispatch({
			type: ADD_CAR,
			payload: car
			}))
	}

}

export function deleteCar(id, index){
	return dispatch=>{
		fetch(`http://ss.com/api/car/${id}`,{
			method: 'delete',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token')
			}
		})
		.then(() => dispatch({
			type: DELETE_CAR,
			payload: index
			})
		)
		
	} 

}