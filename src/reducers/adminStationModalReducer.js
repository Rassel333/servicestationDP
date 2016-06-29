import { OPEN_EDIT_MODAL_STATION } from '../actions/adminActions';

export default function adminStationModalReducer(state = null, action){
	switch(action.type){
		case OPEN_EDIT_MODAL_STATION:
			return action.payload;
		default:
			return state;
	}
}