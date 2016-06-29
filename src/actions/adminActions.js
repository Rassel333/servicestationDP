export const ADD_STATION = 'ADD_STATION';
export const DELETE_STATION = 'DELETE_STATION';
export const EDIT_STATION = 'EDIT_STATION';
export const ADD_SERVICE = 'ADD_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const OPEN_EDIT_MODAL_STATION = 'OPEN_EDIT_MODAL_STATION';
export const OPEN_EDIT_MODAL_SERVICE = 'OPEN_EDIT_MODAL_SERVICE';
export const GET_STATIONS = 'GET_STATIONS';
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES';
export const GET_DEL_STATION = 'GET_DEL_STATION';
export const GET_DEL_SERVICE = 'GET_DEL_SERVICE';
export const GET_STATIONS_ADMINS = 'GET_STATIONS_ADMINS';
export const ADD_STATION_ADMIN = 'ADD_STATION_ADMIN';
export const EDIT_STATION_ADMIN = 'EDIT_STATION_ADMIN';
export const DELETE_STATION_ADMIN = 'DELETE_STATION_ADMIN';
export const GET_DEL_STATION_ADMIN = 'GET_DEL_STATION_ADMIN';
export const OPEN_EDIT_MODAL_STATION_ADMIN = 'OPEN_EDIT_MODAL_STATION_ADMIN';


export function getAllServices(){
	return dispatch=>{
		fetch('http://ss.com/api/service',{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response=> response.json())
		.then(services=> dispatch({
			type: GET_ALL_SERVICES,
			payload: services
		}))

	}
}


export function getStations(){
	return dispatch=>{
		fetch('http://ss.com/api/station',{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response=> response.json())
		.then(stations=> dispatch({
			type: GET_STATIONS,
			payload: stations
		}))

	}
}




export function addStation(station){
	return dispatch=>{
		fetch('http://ss.com/api/station',{
			method: 'post',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				station_name: station.name,
				address: station.adress,
				latitude: station.latitude,
				longitude: station.longitude,
				description: station.description,
				working_hours: station.working_hours,
  				weekends_working_hours: station.weekends_working_hours
			})
		})
		.then(response => response.json())
		.then( station => dispatch({
			type: ADD_STATION,
			payload: station
			}))
	}
}


export function openEditModalStation(id, index){
	return {
		type: OPEN_EDIT_MODAL_STATION,
		payload: {
				id,
				index
		}
	}
}


export function editStation(station, index){
	return dispatch=>{
		fetch(`http://ss.com/api/station/${station.id}`,{
			method: 'put',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				station_name: station.name,
				address: station.adress,
				latitude: station.latitude,
				longitude: station.longitude,
				description: station.description,
				working_hours: station.working_hours,
  				weekends_working_hours: station.weekends_working_hours
			})
		})
		.then(response => response.json())
		.then( station => dispatch({
			type: EDIT_STATION,
			payload: {
				station,
				index
			}
			}))
	}
}

export function getDelStation(id, index){
	return {
		type: GET_DEL_STATION,
		payload:{
			id,
			index
		}
	}
}

export function deleteStation(id, index){
	return dispatch=>{
		fetch(`http://ss.com/api/station/${id}`,{
			method: 'delete',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token')
			}
		})
		.then(() => dispatch({
			type: DELETE_STATION,
			payload: index
			})
		)
		
	} 
}




export function addService(service){
	return dispatch=>{
		fetch('http://ss.com/api/service',{
			method: 'post',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				service_name: service.name,
				price: service.price
			})
		})
		.then(response => response.json())
		.then( (service) => dispatch({
			type: ADD_SERVICE,
			payload: service
			}))
	}
}


export function openEditModalService(id, index){
	return {
		type: OPEN_EDIT_MODAL_SERVICE,
		payload: {
				id,
				index
		}
	}
}

export function editService(service, index){
	return dispatch=>{
		fetch(`http://ss.com/api/service/${service.id}`,{
			method: 'put',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				service_name: service.name,
				price: service.price
			})
		})
		.then(response => response.json())
		.then( service => dispatch({
			type: EDIT_SERVICE,
			payload: {
				service,
				index
			}
			}))
	}
}

export function getDelService(id, index){
	return {
		type: GET_DEL_SERVICE,
		payload: {
			id,
			index
		}
	}
}

export function deleteService(id, index){
	return dispatch=>{
		fetch(`http://ss.com/api/service/${id}`,{
			method: 'delete',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token')
			}
		})
		.then(() => dispatch({
			type: DELETE_SERVICE,
			payload: index
			})
		)
		
	} 
}


export function getMainMechs(){
	return dispatch=>{
		fetch('http://ss.com/api/admin/station',{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then((response)=> response.json())
		.then(mechanics=>dispatch({
			type: GET_STATIONS_ADMINS,
			payload: mechanics
		}))
	}
}


export function addMainMech(mech){
	return dispatch=>{
		fetch('http://ss.com/api/admin',{
			method: 'post',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: mech.username,
				password: mech.password,
				stationId: mech.stationid
			})
		})
		.then((response)=>response.json())
		.then(mechanic=>dispatch({
			type: ADD_STATION_ADMIN,
			payload: mechanic
		}))
	}
}

export function editMainMech(mech, index){
	return dispatch=>{
		fetch(`http://ss.com/api/admin/${mech.username}`,{
			method: 'put',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: mech.username,
				stationId: mech.stationId
			})
		})
		.then(response => response.json())
		.then( ()=> dispatch({
			type: EDIT_STATION_ADMIN,
			payload: {
				mech,
				index
			}
			}))
	}
}

export function openEditModalMainMech(id, index){
	return {
		type: OPEN_EDIT_MODAL_STATION_ADMIN,
		payload: {
				id,
				index
		}
	}
}

export function getDelMainMech(id, index){
	return {
		type: GET_DEL_STATION_ADMIN,
		payload:{
			id,
			index
		}
	}
}



export function deleteMainMech(id, index){
	return dispatch=>{
		fetch(`http://ss.com/api/admin/${id}`,{
			method: 'delete',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token')
			}
		})
		.then(() => dispatch({
			type: DELETE_STATION_ADMIN,
			payload: index
			})
		)
		
	} 
}