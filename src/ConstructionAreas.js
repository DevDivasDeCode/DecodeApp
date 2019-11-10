import React from "react";
import { GeoJSON, Marker } from "react-leaflet";
import * as overpass from "query-overpass";

// https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date

export default class ConstructionAreas extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     geojson: undefined,
     contacts: undefined
   };
 }

 componentDidMount() {
    fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
 }

 componentDidUpdate() {
     console.log(this.state);
    //  this.setState(geojson: this.state.contacts.)
 }

 dataHandler = (error, osmData) => {
   if (!error && osmData.features !== undefined) {
     this.setState({ geojson: osmData });
   }
 };

 render() {
   return this.state.geojson ? <GeoJSON data={this.state.geojson} /> : null;
 }
}