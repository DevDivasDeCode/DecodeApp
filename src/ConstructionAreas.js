import React from "react";
import { GeoJSON } from "react-leaflet";

// https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date

export default class ConstructionAreas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            geojson: undefined
        };
    }

    componentDidMount() {
        fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=road-ahead-projects-under-construction&facet=comp_date')
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
            console.log(this.state.geojson);
            for (let i = 0; i < this.state.geojson.records.length; i ++) {
                let feature = {
                    "type": "Feature",
                    "geometry": this.state.geojson.records[i].fields.geom,
                    "properties": {
                        "name": this.state.geojson.records[i].fields.project,
                    },
                    "color": "read"
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