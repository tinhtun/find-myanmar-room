import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem,
    Glyphicon
} from 'react-bootstrap';
class NavigationMenu extends React.Component {
    render() {
        return (
            <Navbar style={{ "margin-bottom": 0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><Glyphicon glyph="home" /> Home</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationMenu;