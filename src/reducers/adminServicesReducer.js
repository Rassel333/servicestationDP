import {ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE, GET_ALL_SERVICES} from '../actions/adminActions';

export default function adminServicesReducer(state=[], action){
	switch(action.type){
		case GET_ALL_SERVICES:
				return action.payload;
			case ADD_SERVICE:
				return [
					...state,
					action.payload
				];
			case EDIT_SERVICE:
				return [
					...state.slice(0, action.payload.index),
				Object.assign({}, state[action.payload.index], action.payload.service),
				...state.slice(action.payload.index + 1)
				];
			case DELETE_SERVICE:
				return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
			default: return state;
	}
}