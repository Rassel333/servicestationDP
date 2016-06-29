import {GET_WORKING_TIME} from '../actions/neworderActions';


export default function workTimeReducer(state = {}, action){
	switch(action.type){
		case GET_WORKING_TIME:
		 return action.payload;
		 default: return state;
	}
}