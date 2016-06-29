import {GET_ORDER_INFO} from '../actions/ordersActions';

export default function orderInfoReducer(state={}, action){
	switch(action.type){
		case GET_ORDER_INFO:
			return action.payload;
		default: return state;
	}
}