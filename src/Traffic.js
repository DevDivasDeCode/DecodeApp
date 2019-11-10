import React from "react";
import { GeoJSON, Marker } from "react-leaflet";
import L from 'leaflet';
import geoTest from './intersection-counts-2010-2017-mod.geojson';

console.log(geoTest);

const geoFile = require("./intersection-counts-2010-2017-mod.geojson");
let result;

export default class Traffic extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     geojson: undefined,
     data: undefined,
     loadedOnce: false
   };
 }

getColor(val) {
    let color;
    if (val >= 1000) {
        color = 'red';
    }
    else if (val >= 500) {
        color = 'green';
    }
    else {
    color = 'blue';
    }
    console.log(color);
    return color;
}

 pointToLayer(feature, latlng) {
    console.log(feature);
    return L.circleMarker(latlng, {fillOpacity: 0.1, opacity:0, weight: 0, color: this.getColor(feature.properties.pk_hr_vol)}); // Change marker to circle
 }


 componentDidMount() {
     let test = [];
     if (this.state.loadedOnce===false) {
     fetch(geoFile)
     .then(res => res.json())
     .then((data) => {
         console.log(data);
         test = data.features;
         this.setState({ data: test, loadedOnce: true })
        })
    .catch(console.log);
     }
 }

componentDidUpdate() {
    console.log(this.state);
}

 onMouseOut = (e) => {
     console.log("onMouseOut", e);
 }

 onMouseOver = (e) => {
     console.log("onMouseOver", e.layer.feature.properties.name);
 }

 onClick = (e) => {
     console.log("onClick", e);
 }



  style(feature) {
    return {
        color: '#06406F',
        opacity: 1,
        fillColor: '#DDDDFF',
        fillOpacity: 0.9,
        weight: 3,
        radius: 6,
        clickable: true
    }
}

 render() {
    let featuresObj = {
        "type": "FeatureCollection",
        "features": this.state.data
    }

    // helps parse CSV files
    // const papaparseOptions = {
    //     header: true,
    //     dynamicTyping: true,
    //     skipEmptyLines: true,
    //     transformHeader: header =>
    //       header
    //         .toLowerCase()
    //         .replace(/\W/g, '_')
    //   }

   return this.state.data ? 
    <div>
    <GeoJSON 
        data={featuresObj} 
        pointToLayer={this.pointToLayer.bind(this)}
        // color="red"
        // onMouseOver={this.onMouseOver.bind(this)} 
        // onMouseOut={this.onMouseOut.bind(this)}
        onClick={this.onClick.bind(this)}
        
    /> 
    </div>
    : null;
 }
}