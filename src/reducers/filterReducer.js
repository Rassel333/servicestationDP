import {SET_FILTER} from '../actions/stationAdminActions';


export default function filterReducer(state = 'SHOW_ALL', action){
	switch(action.type){
		case SET_FILTER: 
			return action.payload;
		default: return state;
	}
}