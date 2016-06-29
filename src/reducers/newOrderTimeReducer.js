import {SET_ORDER_TIME} from '../actions/newOrderActions';

export default function newOrderTimeReducer(state=null, action){
	switch(action.type){
		case SET_ORDER_TIME: 
			return action.payload;
		default: return state;
	}
}