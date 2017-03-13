import React from 'react';
import {} from 'react-bootstrap';

import Room from './Room';

class RoomList extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let list = this.props.list || []
        return (
            
                <div>
                    {list.map(
                        (item, index) => (
                            <Room key={index} value={item}/>
                        ) 
                    )}
                </div>
            
        )
    }
}



RoomList.propTypes = {
    list: React.PropTypes.array.isRequired,
}
RoomList.defaultProps = {
    list: [],
}

export default RoomList;