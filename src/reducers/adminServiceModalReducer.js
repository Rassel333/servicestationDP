import { OPEN_EDIT_MODAL_SERVICE } from '../actions/adminActions';

export default function adminServiceModalReducer(state = null, action){
	switch(action.type){
		case OPEN_EDIT_MODAL_SERVICE:
			return action.payload;
		default:
			return state;
	}
}