import React from 'react';
import 'bootstrap-webpack';
import moment from 'moment';
require('bootstrap-datetimepicker-npm');
import '../vendor/bootstrap-datetimepicker.min';
import TimePicker from '../components/timePicker'
import { getBusyTime, getWorkingTime, newOrderDate } from '../actions/neworderActions';
import { connect } from 'react-redux';


export default class DatePicker extends React.Component{

    componentDidMount(){
        let nowDate = new Date();
        let today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
		const datepickerfield  = this.refs.datepickerfield;
		$(datepickerfield).datetimepicker({
                                    language: 'ru',
                                    minDate: today,
                                    useCurrent: false,
                                    pickTime: false,
                                    format:  'YYYY-MM-DD'
                                });
	}

    blockbusyTime(){
        $(this.refs.datepickerfield).change(()=>{
            let date = this.refs.datepickerfield.value;
            this.props.dispatch(getBusyTime(date, this.props.stID));
            this.props.dispatch(getWorkingTime(this.props.stID, date));
            this.props.dispatch(newOrderDate(date));
        });

    }

    componentDidUpdate(prevProps){
        if((prevProps.stID !== this.props.stID)){
            this.refs.datepickerfield.value = '';
        }  
    }


	render(){
		return <div className="date-pick">
                            <div className="input-group date" id="datetimepicker-ico">
                                <div className="date-input">
                                    <input type="text" className="form-control order-field" onClick={this.blockbusyTime.bind(this)}  id="datepicker-field"  ref="datepickerfield"/>
                                </div>
                                <span className="input-group-addon">
                            <span className="glyphicon-calendar glyphicon"></span>
                                </span>
                            <TimePicker busyTime={this.props.busyTime}
                                        workTime={this.props.workTime}
                                        station={this.props.stID}/>
                            </div>
                          
                                    

                            
                        </div>
	}
}


export default connect(state=>({
    busyTime: state.busyTime,
    workTime: state.workTime
}))(DatePicker);