import React from 'react';


export default class GMap extends React.Component{





  markerclick(id){
    if(this.props.click){
      this.props.click(id);
    }
    
  }
	

	render() {
    return <div className='GMap-canvas' ref="mapCanvas"
    			style={{display: 'block', width: '100%',  height: '100%'}}>
      	</div>
  }

  componentDidMount() {
    this.gmap = this.createMap();

    /*let map = this.gmap;
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

  
      map.setCenter(pos);
    })*/
  }

  componentDidUpdate(){
  	Promise.resolve()
  	.then(()=> this.createMarkers())
  	.then((markers)=> this.createClickEv(markers))

  	
  	
  }

  /*sendStationID(id){
        this.props.sendStation(id);
    }*/
    //53.684545, 23.836159

  createMap() {
    let mapOptions = {
      zoom: 10,
      center: { lng: 23.836159, lat: 53.684545}
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  createInfoWindow(marker) {
  		let contentString = `<div class="InfoWindow"><p><strong>${marker.name}</strong></p><p><strong>Адрес:</strong> ${marker.address}</p><p><strong>Будни:</strong> ${marker.wh}</p><p><strong>Выходные:</strong> ${marker.weekend_wh}</p><p>${marker.description}</p></div>`
		return 
  	   
  }

  createMarkers(){
  	return this.props.sts.map((station)=>{
  		return new google.maps.Marker({
  		  id: station.id,
	      position: {lat: station.latitude , lng: station.longitude},
	      map: this.gmap, 
	      description: station.description,
	      address: station.address,
	      name: station.station_name,
	      wh: station.working_hours,
	      weekend_wh: station.weekends_working_hours
	    })
  	})
	}

  createClickEv(markers) {
  	return markers.map(marker=>{
  		let contentString = `<div class="InfoWindow"><p><strong>${marker.name}</strong></p><p><strong>Адрес:</strong> ${marker.address}</p><p><strong>Будни:</strong> ${marker.wh}</p><p><strong>Выходные:</strong> ${marker.weekend_wh}</p><p>${marker.description}</p></div>`
  		let info = new google.maps.InfoWindow({
		      content: contentString
		    });
  		marker.addListener('click', function() {
		    info.open(this.gmap, marker);
		  });
  		marker.addListener('click', ()=>{ this.markerclick(marker.id) });

  	})
  	
	    
	}

  
  
}

