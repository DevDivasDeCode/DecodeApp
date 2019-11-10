import React, {Component} from 'react';
import tableau from 'tableau-api';

class Density extends Component {

    state = {};
    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = 'https://public.tableau.com/views/VehicleDensityByHour/VehicleDensityByHour?:display_count=y&:origin=viz_share_link';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }

    render() {
        const sectionStyle = {
            padding: "50px",
        };
        return (
            <div className='container' style={sectionStyle}>
                <div ref={(div) => { this.vizContainer = div }}>
                </div>
            </div>
        );
    }
}

export default Density;