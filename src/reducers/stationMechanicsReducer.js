import {ADD_MECHANIC, DELETE_MECHANIC, EDIT_MECHANIC, GET_MECHANICS} from '../actions/stationAdminActions';


export default function stationMechanicsReducer(state=[], action){
	switch(action.type){
		case GET_MECHANICS:
				return action.payload;
			case ADD_MECHANIC:
				return [
					...state,
					action.payload
				];
			case EDIT_MECHANIC:
				return [
					...state.slice(0, action.payload.index),
				Object.assign({}, state[action.payload.index], action.payload.mechanic),
				...state.slice(action.payload.index + 1)
				];
			case DELETE_MECHANIC:
				return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
			default: return state;
	}
}