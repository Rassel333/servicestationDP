import {SET_START_DATE} from '../actions/stationAdminActions'


export default function startDateReducer(state = null, action){
	switch(action.type){
		case SET_START_DATE: 
			return action.payload;
		default: return state;
	}
}