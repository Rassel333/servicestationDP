import { GET_STATIONS } from '../actions/neworderActions';

export default  function stationsReducer(state = [], action){
	switch(action.type){
		case GET_STATIONS: 
			return action.payload;
		default: return state;
	}
}