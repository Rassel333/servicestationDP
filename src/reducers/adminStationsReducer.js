import {ADD_STATION, DELETE_STATION, EDIT_STATION, GET_STATIONS} from '../actions/adminActions';


export default function adminStationsReducer(state=[], action){
	switch(action.type){
		case GET_STATIONS:
				return action.payload;
			case ADD_STATION:
				return [
					...state,
					action.payload
				];
			case EDIT_STATION:
				return [
					...state.slice(0, action.payload.index),
				Object.assign({}, state[action.payload.index], action.payload.station),
				...state.slice(action.payload.index + 1)
				];
			case DELETE_STATION:
				return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
			default: return state;
	}
}