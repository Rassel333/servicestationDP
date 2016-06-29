import { GET_DEL_STATION} from '../actions/adminActions';

export default function delStationReducer(state = {}, action){
	switch(action.type){
		case GET_DEL_STATION:
			return action.payload;
		default: return state;
	}
}