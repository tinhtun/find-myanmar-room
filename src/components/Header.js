import React from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Jumbotron style={{ paddingTop: 10, paddingBottom: 20, marginBottom:10, backgroundColor:"white"}}>
                <h2>Search Myanmar Room</h2>
                <p>Let's get a room for you quickly.</p>
                <FormGroup bsSize="large">
                    <FormControl type="text" default="Clementi" placeholder="Type Bishan, Clementi, etc" />
                </FormGroup>
                <Button bsStyle="primary" style={{ width: 120 }} bsSize="large" type="submit" onClick="">Search</Button>
            </Jumbotron>
        )
    }
}

export default Header;