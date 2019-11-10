import React, {Component, Fragment} from 'react';
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link, withRouter} from "react-router-dom";


class NavBar extends Component {
    state = {
        authenticated: false
    };
    // temp

    render() {

        return (
            <div className='navvv'>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to='/HomePage' name="Home" />
                    <Menu.Item as={NavLink} to='/Density' name="Density" />
                    <Menu.Item as={NavLink} to='/Collision' name="Collision" />
                    <Menu.Item as={NavLink} to='/Construction' name="Construction" />
                    <Menu.Item as={NavLink} to='/Hastings' name="Hastings Speedometer" />
                    <Menu.Item as={NavLink} to='/AboutUs' name="About Us" />




                </Container>
            </Menu>
            </div>
        );
    }
}


export default NavBar;