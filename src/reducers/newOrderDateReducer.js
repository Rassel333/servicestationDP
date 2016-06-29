import {SET_ORDER_DATE} from '../actions/newOrderActions';

export default function newOrderDateReducer(state=null, action){
	switch(action.type){
		case SET_ORDER_DATE: 
			return action.payload;
		default: return state;
	}
}