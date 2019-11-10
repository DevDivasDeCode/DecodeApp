import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink, Link, withRouter} from "react-router-dom";


export default class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item as={NavLink} exact to='/homePage'
                    name='Home'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >
                    Editorials
                </Menu.Item>

                <Menu.Item as={NavLink} exact to='/AboutUs'
                    name='AboutUs'
                    active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                >
                    About Us
                </Menu.Item>

                <Menu.Item
                    name='More'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
                </Menu.Item>
            </Menu>
        )
    }
}