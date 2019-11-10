import React from "react";
import { GeoJSON, Marker } from "react-leaflet";
import * as overpass from "query-overpass";

export default class Castles extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     geojson: undefined
   };
 }

 componentDidMount() {
   const query = `[out:json];(way[historic=castle](around:10000, 50.0874654,14.4212535);\
                             relation[historic=castle](around:10000, 50.0874654,14.4212535););\
                             out body;>;out skel qt;`;
   const options = {
     flatProperties: true
   };
   overpass(query, this.dataHandler, options);
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