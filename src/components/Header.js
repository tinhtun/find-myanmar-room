import React from 'react';
import { Jumbotron, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
    
    onChangeFilter(event) {
        this.filter = event.target.value;
    }

    onClickSearch(event) {
        event.preventDefault();
        this.props.onSearch(this.filter);
    }

    render() {
        return (
            <Jumbotron className="BgWhite" style={{ paddingTop: 10, paddingBottom: 20, marginTop:5, marginBottom:5, }}>
                <div>
                    <img style={{display: "inline-block", verticalAlign: 'bottom'}} width="100" height="100" src="/images/logo.png"/>
                    <div style={{display: "inline-block", width: 10}}/> 
                    <h1 style={{display: "inline-block", verticalAlign: 'bottom', marginBottom: 0, paddingBottom: 0}}>Find Myanmar Room</h1>
                </div>
                <div style={{height: 20}}/>
                <FormGroup bsSize="large">
                    <FormControl type="text"  onChange={this.onChangeFilter.bind(this)} placeholder="bishan, clementi, female, etc. " />
                </FormGroup>
                <Button bsStyle="primary" style={{ width: 120 }} bsSize="large" onClick={this.onClickSearch.bind(this)} >Search</Button>
            </Jumbotron>
        )
    }
}

export default Header;