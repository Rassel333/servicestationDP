export const GET_MECHANICS = 'GET_MECHANICS';
export const ADD_MECHANIC = 'ADD_MECHANIC';
export const EDIT_MECHANIC = 'EDIT_MECHANIC';
export const DELETE_MECHANIC = 'DELETE_MECHANIC';
export const OPEN_EDIT_MODAL_MECHANIC = 'OPEN_EDIT_MODAL_MECHANIC';
export const GET_DEL_MECHANIC = 'GET_DEL_MECHANIC';
export const SET_START_DATE = 'SET_START_DATE';
export const GET_ORDERS = 'GET_ORDERS';
export const SET_ORDER_ID = 'SET_ORDER_ID';
export const GET_STATION_ADMIN = 'GET_STATION_ADMIN';
export const SET_FILTER = 'SET_FILTER';


export function getMechanics(stationID){
	return dispatch=>{
		fetch(`http://ss.com/api/mechanic/station/${stationID}`, {
			method: 'get'
		})
		.then(response => response.json())
		.then((mechanics) => dispatch({
				type: GET_MECHANICS,
				payload: mechanics
			}))
	}
}

export function setFilter(filter){
	return {
		type: SET_FILTER,
		payload: filter
	}
}


export function getAdminStation(){
	return dispatch=>{
		fetch('http://ss.com/api/admin', {
				method: 'get',
				headers: {
					'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
					'Content-Type': 'application/json'
				}
			})
		.then((response)=> response.json())
		.then(stationadmin=>dispatch({
			type: GET_STATION_ADMIN,
			payload: stationadmin
		}))}
}


export function addMechanic(mechanic, stid){
	return dispatch=>{
		fetch('http://ss.com/api/mechanic',{
			method: 'post',
			headers: {
				//'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				stationId: stid,
				firstname: mechanic.fname,
				lastname: mechanic.lname,
				
			})
		})
		.then(response => response.json())
		.then( (mechanic) => dispatch({
			type: ADD_MECHANIC,
			payload: mechanic
			}))
	}
}




export function deleteMechanic(id, index){
	return dispatch=>{
		fetch(`http://ss.com/api/mechanic/${id}`,{
			method: 'delete',
			headers: {
				//'Authorization': 'Bearer ' + localStorage.getItem('access_token')
			}
		})
		.then(()=>{
			setTimeout(()=>{dispatch({
				type: DELETE_MECHANIC,
				payload: index
				})}, 500)
			
		})
		
	}
}

export function editMechanic(mechanic, index){
	return dispatch=>{
		fetch(`http://ss.com/api/mechanic/${mechanic.id}`,{
			method: 'put',
			headers: {
				//'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstname: mechanic.name,
				lastname: mechanic.lastname,
				
			})
		})
		.then(response => response.json())
		.then( mechanic => dispatch({
			type: EDIT_MECHANIC,
			payload: {
				mechanic,
				index
			}
			}))
	}
}


export function openEditModalMech(id, index){
	return {
		type: OPEN_EDIT_MODAL_MECHANIC,
		payload: {
				id,
				index
		}
	}
}

export function getDelMechanic(id, index){
	return {
		type: GET_DEL_MECHANIC,
		payload: {
			id,
			index
		}
	}
}

export function getOrders(orders){
	return {
		type: GET_ORDERS,
		payload: orders
	}
}

export function setStartDate(date){
	return {
		type: SET_START_DATE,
		payload: date
	}
}

export function setOrderId(id, index){
	return {
		type: SET_ORDER_ID, 
		payload: {
			id, 
			index
		}
	}
}