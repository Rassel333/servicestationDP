import { GET_DEL_MECHANIC} from '../actions/stationAdminActions';

export default function delStationMechanicReducer(state = {}, action){
	switch(action.type){
		case GET_DEL_MECHANIC:
			return action.payload;
		default: return state;
	}
}