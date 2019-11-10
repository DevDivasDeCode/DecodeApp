import React, {Component} from 'react';
import tableau from 'tableau-api';

class Hastings extends Component {

    state = {};
    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = 'https://public.tableau.com/views/HastingsSpeedometer/Dashboard1?:display_count=y&:origin=viz_share_link';
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

export default Hastings;