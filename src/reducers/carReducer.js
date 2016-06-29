import { ADD_CAR, GET_CARS, DELETE_CAR, EDIT_CAR } from '../actions/userActions';

export default function carReducer(state= [], action){
		switch(action.type){
			case GET_CARS:
				return action.payload;
			case ADD_CAR:
				return [
					...state,
					action.payload
				];
			case EDIT_CAR:
				return [
					...state.slice(0, action.payload.index),
				Object.assign({}, state[action.payload.index], action.payload.car),
				...state.slice(action.payload.index + 1)
				];
			case DELETE_CAR:
				return [
					...state.slice(0, action.payload),
					...state.slice(action.payload + 1)
				];
			default: return state;
		}
}

