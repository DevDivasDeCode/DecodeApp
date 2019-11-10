import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import Castles from './Castles';
import ConstructionAreas from './ConstructionAreas';

export default class MyMap extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     lat:  49.263169, 
     lng: -123.114837 ,
     zoom: 12
   };
 }

 render() {
   const position = [this.state.lat, this.state.lng];
   return (
     <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
       <Marker position={[this.state.lat, this.state.lng]} />
        <Castles />
        <ConstructionAreas/>
     </Map>
   );
 }
}