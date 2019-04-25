import React, { Component } from 'react'
import './styles/Stats.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUser } from './actions/userActions';

class Stats extends Component {
    componentWillMount() {
        this.props.getUser();
    }

    render() {
        return (
        <div className="Stats">
            <Container>
                <Row>
                    <Col>
                        <Card bg="success">
                            <Card.Header as="h4">Bonnes réponses</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {this.props.correctAnswers}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card bg="danger">
                            <Card.Header as="h4">Mauvaises réponses</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                {this.props.wrongAnswers}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    correctAnswers: state.user.correctAnswers,
    wrongAnswers: state.user.wrongAnswers
})

export default connect(mapStateToProps, { getUser })(Stats);