import React from 'react';
import 'timepicker';
import '../css/jquery.timepicker.min.css';
import {connect} from 'react-redux';
import { newOrderTime } from '../actions/neworderActions';


export default class TimePicker extends React.Component{
	componentDidMount(){
		$(this.refs.timepickerfield).timepicker({
                timeFormat: 'H:i',
                step: '10',
                disableTimeRanges: this.props.busyTime,
                minTime: this.props.workTime.minTime,
                maxTime: this.props.workTime.maxTime
              })
		
		}

		shouldComponentUpdate(nextProps){
			if((nextProps.workTime == this.props.workTime) && (nextProps.busyTime == this.props.busyTime) && (nextProps.station == this.props.station)){
				return false
			}
			else{
				return true
			}
		}

	getTime(){
		$(this.refs.timepickerfield).change(()=>{
			let time = this.refs.timepickerfield.value;
			this.props.dispatch(newOrderTime(time));
		})
	}

	componentDidUpdate(){
		this.refs.timepickerfield.value = '';
		$(this.refs.timepickerfield).timepicker('remove');
		$(this.refs.timepickerfield).timepicker({
                timeFormat: 'H:i',
                step: '10',
                disableTimeRanges: this.props.busyTime,
                minTime: this.props.workTime.minTime,
                maxTime: this.props.workTime.maxTime
              })
	}
	


	render(){
		return <input type="text" className="form-control order-field" id="timepicker-field" onClick={this.getTime.bind(this)} ref="timepickerfield"/>
	}
}


export default connect()(TimePicker);