export const GET_ORDER_INFO = 'GET_ORDER_INFO';


export function getOrderInfo(order){
	return {
		type: GET_ORDER_INFO,
		payload: order
	}

}



