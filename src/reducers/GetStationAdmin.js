import {GET_STATION_ADMIN} from '../actions/stationAdminActions';



export default function GetStationAdmin(state = {}, action){
	switch(action.type){
		case GET_STATION_ADMIN:
			return action.payload;
		default: return state;
	}
}