import {GET_STATIONS_ADMINS, ADD_STATION_ADMIN, EDIT_STATION_ADMIN, DELETE_STATION_ADMIN} from '../actions/adminActions';


export default function mainMechanicsReducer(state = [], action){
	switch(action.type){
		case GET_STATIONS_ADMINS:
			return action.payload;
		case ADD_STATION_ADMIN:
			return [
					...state,
					action.payload
					];
		case EDIT_STATION_ADMIN:
			return [
					...state.slice(0, action.payload.index),
				Object.assign({}, state[action.payload.index], action.payload.mech),
				...state.slice(action.payload.index + 1)
				];
		case DELETE_STATION_ADMIN:
			return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
		default: return state;
	}
}