import React, {Component} from 'react'
import GoogleMap from 'google-map-react';
import {GOOGLE_API_KEY} from "../actions/api";
import './Map.css'
import pin from '../static/Pin.svg'


class Map extends Component{
    createMapOptions=()=>{
        return{
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{"visibility": "on"}, {"color": "#e0efef"}]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [{"visibility": "on"}, {"hue": "#1900ff"}, {"color": "#c0e8e8"}]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{"lightness": 100}, {"visibility": "simplified"}]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{"visibility": "on"}, {"lightness": 700}]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{"color": "#7dcdcd"}]
                }
            ]
        }
    };
    render(){
        return(
            <div style={{position:'absolute',top:'90px',left:0,height:'calc(100vh - 90px)', width:'100vw'}}>
                <GoogleMap bootstrapURLKeys={{key: GOOGLE_API_KEY,}}
                           center={[43.6543, -79.3860]}
                           zoom={17} options={this.createMapOptions}>
                    <Marker lat={43.6543} lng={-79.3860}/>
                </GoogleMap>
            </div>
        )
    }
}


export default Map

class Marker extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="map-marker">
                {this.props.text}
            </div>
        );
    }
}
