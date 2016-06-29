import {OPEN_EDIT_MODAL_MECHANIC} from '../actions/stationAdminActions';


export default function stationMechanicsModalReducer(state={}, action){
	switch(action.type){
		case OPEN_EDIT_MODAL_MECHANIC:
			return action.payload;
		default: return state;
	}
}