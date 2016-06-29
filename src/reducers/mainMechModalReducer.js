import {OPEN_EDIT_MODAL_STATION_ADMIN} from '../actions/adminActions';


export default function mainMechModalReducer(state = null, action){
	switch(action.type){
		case OPEN_EDIT_MODAL_STATION_ADMIN:
			return action.payload;
		default:
			return state;
	}
}