import React from 'react';
import { Panel, Image, Grid, Row, Col, Modal, Button, Carousel } from 'react-bootstrap';
import moment from 'moment';

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

    }

    componentWillMount() {
        let lines = this.props.value.description && this.props.value.description.replace(/(\n)+/g, "\n").split('\n');
        this.shortDescription = lines && lines.length > 5 ?
            lines.slice(0, 5).join('\n') + '\n...' :
            this.props.value.description;
    }

    launchModal() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    render() {

        let room = this.props.value;
        let title = room.post_owner + " - " + moment(room.updated_time).fromNow();
        return (
            <div>
                <Panel bsStyle="default" header={title} onClick={this.launchModal.bind(this)}>
                    <Grid fluid={true}>
                        <Row>
                            <Col xs={12} sm={8} md={6} style={{ padding: 0 }}>
                                {room.photos && room.photos[0] && <Image responsive rounded src={room.photos[0]} />}
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ marginTop: 10 }}>
                                <div className="PreWrap">
                                    {this.shortDescription}
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
                
                
                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)} >
                    <Modal.Header closeButton={true}>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        {room.photos && room.photos.length > 0 && 
                            <Carousel>
                            {
                                room.photos.map((imageUrl, index) => 
                                    <Carousel.Item key={index}>
                                        <img width={900} height={500} alt="" src={imageUrl} />
                                    </Carousel.Item>
                                )
                            }
                            </Carousel>
                        }
                        
                        <div style={{height: 10}} />
                        <div className="PreWrap">
                            {room.description}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal.bind(this)} bsStyle="primary">Close</Button>
                    </Modal.Footer>
                </Modal>

                
            </div>
        )
    }
}

Room.propTypes = {
    value: React.PropTypes.object.isRequired,
}
Room.defaultProps = {
    value: {
        id: Math.random().toString(36).substring(7),
    }
}

export default Room;