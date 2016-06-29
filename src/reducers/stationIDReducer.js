import { SET_STATION_ID } from '../actions/neworderActions';

export default function stationIDReducer(state = null, action){
	switch(action.type){
		case SET_STATION_ID:
			return action.payload;
		default: return state;
	}
}