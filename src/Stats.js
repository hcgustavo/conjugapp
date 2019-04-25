import React, { Component } from 'react'
import './styles/Stats.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class Stats extends Component {
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
                                0
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card bg="danger">
                        <Card.Header as="h4">Mauvaises réponses</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                0
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
