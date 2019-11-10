import React, {Component} from 'react';
import CardExampleCardProps from './GridExampleColumnWidth'
import {Card} from "semantic-ui-react";
class AboutUs extends Component {

    render() {
        const sectionStyle = {
            padding: "50px",
        };
        return (
            <div className='container' style={sectionStyle}>
                <CardExampleCardProps/>
                <Card
                    image='Oliver.jpg'
                    header='Oliver Li'
                    meta='3rd-year CS + Stats'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />

                <Card
                    image='Oliver.jpg'
                    header='Charlene Nicer'
                    meta='Friend'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />

                <Card
                    image='Oliver.jpg'
                    header='Dhruv Mahajan'
                    meta='Electrical Engineering'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />

                <Card
                    image='Oliver.jpg'
                    header='Abigail Climacosa'
                    meta='Electrical Engineering'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />

                <Card
                    image='Oliver.jpg'
                    header='Jasper Gao'
                    meta='3rd Year CMS'
                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                />
            </div>
        );
    }
}

export default AboutUs;