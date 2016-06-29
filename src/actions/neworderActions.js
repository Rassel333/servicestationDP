export const GET_BUSY_TIME = 'GET_BUSY_TIME';
export const SET_STATION_ID = 'SET_STATION_ID';
export const GET_STATIONS = 'GET_STATIONS';
export const GET_ALL_SERVICES = 'GET_ALL_SERVICES';
export const GET_WORKING_TIME = 'GET_WORKING_TIME';
export const SET_ORDER_DATE = 'SET_ORDER_DATE';
export const SET_ORDER_TIME = 'SET_ORDER_TIME';



export function setStationID(id){
	return {
		type: SET_STATION_ID,
		payload: id
	}

}

export function newOrderDate(date){
	return {
		type: SET_ORDER_DATE,
		payload: date
	}
}

export function newOrderTime(time){
	return {
		type: SET_ORDER_TIME,
		payload: time
	}
}

export function makeOrder(order){
	return dispatch=>{
		fetch('http://ss.com/api/order',{
			method: 'post',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				workDescription: order.udescription,
				status: 'INIT',
				stationId: order.stationId,
				orderDate: order.dateTime,
				carInfo: {
					id: order.car
					},
				services: order.services
			})
		})
		.then(()=> dispatch({type: 'ROUTING',
            	payload:{
            		method: 'push',
            		nextUrl: 'userorders'
            		}
            	}))

	}
}


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
				//'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
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
export function getWorkingTime(id, date){
	return dispatch=>{
		fetch(`http://ss.com/api/time/worktime/${id}/${date}`,{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(workingtime => dispatch({
			type: GET_WORKING_TIME,
			payload: workingtime
		}))
	}
}

export function getBusyTime(date, stationID){
	return dispatch=>{
		fetch(`http://ss.com/api/time/busytime/${stationID}/${date}`,{
			method: 'get',
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(time => dispatch({
			type: GET_BUSY_TIME,
			payload: time.busyTime
		}))
	}
}