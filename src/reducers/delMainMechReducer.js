import {GET_DEL_STATION_ADMIN} from '../actions/adminActions';


export default function delMainMechReducer(state = {}, action){
	switch(action.type){
		case GET_DEL_STATION_ADMIN:
			return action.payload;
		default: return state;
	}
}