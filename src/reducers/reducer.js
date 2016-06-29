import carReducer from './carReducer';
import userReducer from './userReducer';
import signReducers from './signReducers';
import editModalReducer from './editModalReducer'
import busyTimeReducer from './busyTimeReducer';
import stationIDReducer from './stationIDReducer';
import { combineReducers } from 'redux';
import stationsReducer from './stationsReducer';
import servicesReducer from './servicesReducer';
import adminStationsReducer from './adminStationsReducer';
import adminServicesReducer from './adminServicesReducer';
import adminStationModalReducer from './adminStationModalReducer';
import adminServiceModalReducer from './adminServiceModalReducer';
import workTimeReducer from './workTimeReducer';
import delCarReducer from './delCarReducer';
import delServiceReducer from './delServiceReducer';
import delStationReducer from './delStationReducer';
import newOrderDateReducer from './newOrderDateReducer';
import newOrderTimeReducer from './newOrderTimeReducer';
import orderInfoReducer from './orderInfoReducer';
import stationMechanicsReducer from './stationMechanicsReducer';
import stationMechanicsModalReducer from './stationMechanicsModalReducer';
import delStationMechanicReducer from './delStationMechanicReducer';
import startDateReducer from './startDateReducer';
import ordersReducer from './ordersReducer';
import orderIdReducer from './orderIdReducer';
import mainMechanicsReducer from './mainMechanicsReducer';
import delMainMechReducer from './delMainMechReducer';
import mainMechModalReducer from './mainMechModalReducer';
import GetStationAdmin from './GetStationAdmin';
import filterReducer from './filterReducer';



export default combineReducers({
  cars: carReducer,
  stations: stationsReducer,
  user: userReducer,
  openmodal: editModalReducer,
  busyTime: busyTimeReducer,
  stationID: stationIDReducer,
  adminStationID: adminStationModalReducer,
  adminServiceID: adminServiceModalReducer,
  services: servicesReducer,
  adminStations: adminStationsReducer,
  adminServices: adminServicesReducer,
  workTime: workTimeReducer,
  delCar: delCarReducer,
  delStation: delStationReducer,
  delService: delServiceReducer,
  newOrderTime: newOrderTimeReducer,
  newOrderDate: newOrderDateReducer,
  orderInfo: orderInfoReducer,
  stationMechanics: stationMechanicsReducer,
  stationMechId: stationMechanicsModalReducer,
  delStationMechanic: delStationMechanicReducer,
  startDate: startDateReducer,
  allorders: ordersReducer,
  orderId: orderIdReducer,
  mainMechanics: mainMechanicsReducer,
  delMainMech: delMainMechReducer,
  mainMechID: mainMechModalReducer,
  getStationAdmin: GetStationAdmin,
  filter: filterReducer,
  signReducers
})