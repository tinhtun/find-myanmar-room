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
                    <NavItem eventKey={1} href="http://github.com/tinhtun/find-myanmar-room"><Glyphicon glyph="folder-open" style={{marginRight: 5}}/>Github</NavItem>
                </Nav>
            </Navbar>
    )

export default NavigationMenu;