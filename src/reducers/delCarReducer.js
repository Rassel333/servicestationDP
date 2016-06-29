import { GET_DEL_CAR} from '../actions/userActions';

export default function delCarReducer(state = {}, action){
	switch(action.type){
		case GET_DEL_CAR:
			return action.payload;
		default: return state;
	}
}