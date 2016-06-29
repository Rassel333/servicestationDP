import { OPEN_EDIT_MODAL } from '../actions/userActions';

export default function editModalReducer(state = null, action){
	switch(action.type){
		case OPEN_EDIT_MODAL:
			return action.payload;
		default:
			return state;
	}
}