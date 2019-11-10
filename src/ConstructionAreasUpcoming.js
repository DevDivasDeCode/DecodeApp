import React from "react";
import { GeoJSON } from "react-leaflet";

// https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date

export default class ConstructionAreasUpcoming extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     geojson: undefined
   };
 }

 componentDidMount() {
    // fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&q=comp_date+%3C+2020&rows=50')
    // fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-current-road-closures&rows=50&facet=comp_date')
    fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-upcoming-projects&rows=150&facet=comp_date')
    // fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date') // shows 10 rows of data
    .then(res => res.json())
        .then((data) => {
          this.setState({ geojson: data })
        })
        .catch(console.log)    
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

 render() {
    let features = [];
    if (this.state.geojson) {
        // console.log(this.state.geojson);
        for (let i = 0; i < this.state.geojson.records.length; i ++) {
            let feature = {
                "type": "Feature",
                "geometry": this.state.geojson.records[i].fields.geom,
                "properties": {
                    "name": this.state.geojson.records[i].fields.project,
                },
                "color": "purple"
            };
            features.push(feature);
        }
    }
    let featuresObj = {
        "type": "FeatureCollection",
        "features": features
    }
   return this.state.geojson ? 
    <GeoJSON 
        data={featuresObj} 
        color="purple" 
        onMouseOver={this.onMouseOver.bind(this)} 
        onMouseOut={this.onMouseOut.bind(this)}
        onClick={this.onClick.bind(this)}
    /> 
    : null;
 }
}