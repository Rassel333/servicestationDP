import { GET_PERSONAL_INF, EDIT_PERSONAL_INF, EDIT_CAR} from '../actions/userActions';

export default function userReducer(state= {}, action){
	switch(action.type){
		case GET_PERSONAL_INF:
			return action.payload;
		case EDIT_PERSONAL_INF:
			return Object.assign({}, state, action.payload);
		default: return state;
	}
}