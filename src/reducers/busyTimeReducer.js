import { GET_BUSY_TIME } from '../actions/neworderActions';


export default function busyTimeReducer(state= [], action){
	switch(action.type){
		case GET_BUSY_TIME:
			return action.payload || state;
		default: return state;
	}
}