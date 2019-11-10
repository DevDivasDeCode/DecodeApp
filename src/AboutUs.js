import React, {Component} from 'react';
import {Card} from "semantic-ui-react";
import oliver from "./Oliver.jpg"
import dhruv from "./dhruv.jpg"
import abi from "./abi.jpg"
import charlene from "./charlene.jpeg"
import jasper from "./jasper.jpeg"

class AboutUs extends Component {

    render() {
        const sectionStyle = {
            padding: "50px",
        };
        return (
            <div className='container' style={sectionStyle}>
                <br/>
                <br/>
                <div className="ui grid">
                    <div className="four wide column">
                        <img src= {oliver} className="ui image"/>
                    </div>
                    <div className="nine wide column">
                        <a href="https://github.com/Oliverlee1003"><i className="github icon"/></a>
                        Oliver Li is a third-year student studying computer science and statistics at UBC, minoring in commerce.
                        <br/>
                        He's passionate to use statistical and software tools to solve the real world problems. Learning is always his passion and life goal, and this has translated to an immense motivation while working and studying.
                        <br/>
                        During his free time he likes to play soccer and jog.
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <img src= {dhruv} className="ui image"/>
                    </div>
                    <div className="nine wide column">
                        <a href="https://github.com/Dhruv1754"><i className="github icon"/></a>
                        Dhruv is a third-year student studying electrical engineering at UBC
                        <br/>
                        He's passionate about data science
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <img src= {abi} className="ui image"/>
                    </div>
                    <div className="nine wide column">
                        <a href="https://github.com/abigail-climacosa"><i className="github icon"/></a>
                        Abi is a fourth-year student studying electrical engineering at UBC
                        <br/>
                        Abi is a fast learner and passionate about learning more technology
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <img src= {charlene} className="ui image"/>
                    </div>
                    <div className="nine wide column">
                        <a href="https://github.com/charlenenicer"><i className="github icon"/></a>
                        Charlene is a third-year student studying Computer Science and Physics at UBC
                        <br/>
                        She loves hacking up and exploring data.
                    </div>
                </div>

                <div className="ui grid">
                    <div className="four wide column">
                        <img src= {jasper} className="ui image"/>
                    </div>
                    <div className="nine wide column">
                        <a href="https://github.com/jaspergao"><i className="github icon"/></a>
                        Jasper is a third-year student studying CMS with Computer Science and Statistics at UBC
                        <br/>
                        He's passionate about big data and financial engineering.
                    </div>
                </div>

            </div>
        );
    }
}

export default AboutUs;