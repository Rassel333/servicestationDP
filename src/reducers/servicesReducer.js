import { GET_ALL_SERVICES } from '../actions/neworderActions';


export default function servicesReducer(state= [], action){
	switch(action.type){
		case GET_ALL_SERVICES: 
			return action.payload;
		default: return state;
	}
}