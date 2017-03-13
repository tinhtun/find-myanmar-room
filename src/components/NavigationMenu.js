import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem,
    Glyphicon
} from 'react-bootstrap';

const NavigationMenu = () => (
             <Navbar style={{ "marginBottom": 0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><Glyphicon glyph="home" /> Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="http://github.com/tinhtun/find-myanmar-room">Github</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    
                </Nav>
            </Navbar>
    )

export default NavigationMenu;