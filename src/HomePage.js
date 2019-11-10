import React, {Component} from 'react';
import MyMap from "./MyMap";
import { Grid } from 'semantic-ui-react'
import vancouverPic from './vanCar.jpg'



class HomePage extends Component {


    render() {
        const imgUrl = vancouverPic;
        // const imgUrl = "https://biv.com/sites/default/files/styles/media_image/public/2017-12/traffic_vancouver_credit_surangasl__shutterstockcom.jpg?itok=h8mei9i2";
        var sectionStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden'
            // backgroundImage: "url(" + "src/images/VancouverView.jpg" + ")",
        };

        return (
            <div id="bg" style={sectionStyle}>
            {/*<div className="ui message">*/}
            {/*    <div className="header">*/}
            {/*        Here you will see the illustration of different ways to monitor traffic over a period of time.*/}
            {/*    </div>*/}
            {/*    <ul className="list">*/}
            {/*        <li> Interactive Vehicle Density Map</li>*/}
            {/*        <li> Collision Data Map  </li>*/}
            {/*        <li> Overlap of Construction and Traffic Map</li>*/}
            {/*        <li> Hastings Travel Time Monitoring System </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*Here you will see the illustration of different ways to monitor traffic over a period of time.*/}
            {/*Interactive Vehicle Density Map*/}
            {/*Overlap of Construction and Traffic Map*/}
            {/*Collision Data Map*/}
            {/*Hastings Travel Time Monitoring System*/}
            </div>
    );

    }
}


export default HomePage;