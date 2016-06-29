import { GET_DEL_SERVICE} from '../actions/adminActions';

export default function delServiceReducer(state = {}, action){
	switch(action.type){
		case GET_DEL_SERVICE:
			return action.payload;
		default: return state;
	}
}