import {SET_ORDER_ID} from '../actions/stationAdminActions';


export default function orderIdReducer(state = null, action){
	switch(action.type){
		case SET_ORDER_ID:
			return action.payload;
		default: return state;
	}
}