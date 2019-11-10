import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import Castles from './Castles';
import ConstructionAreas from './ConstructionAreas';
import ConstructionAreasUpcoming from "./ConstructionAreasUpcoming.js";
import ConstructionAreasRoadClosure from "./ConstructionAreasRoadClosure.js"
import { Grid } from 'semantic-ui-react'


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
       <div className='container'>
       <Map center={position} zoom={this.state.zoom} padding='300px'>
       <TileLayer
         attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
        <ConstructionAreas/>
     </Map>
       </div>
   );
 }
}