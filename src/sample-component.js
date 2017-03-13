import React from 'react';
import {Button} from 'react-bootstrap';

class Groot extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Button>I am {this.props.value}</Button>
            </div>
        )
    }
}

Groot.propTypes = {
    value: React.PropTypes.string.isRequired,
}
Groot.defaultProps = {
    value: 'Groot'
}

export default Groot;