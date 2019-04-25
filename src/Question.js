import React, { Component } from 'react'
import { Container, Row, Form, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import './styles/Question.css';

export default class Question extends Component {
  render() {
    return (
      <div className="Question">
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body> Il </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body> aller (présent) </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body> à la plage d'ici peu </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Form className="Form">
                    <InputGroup className="mb-3" size="lg">
                        <FormControl
                        placeholder="Tappez votre réponse"
                        aria-label="Tappez votre réponse"
                        aria-describedby="basic-addon2"/>
                        <InputGroup.Append>
                            <Button variant="primary">OK</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Row>
        </Container>
      </div>
    )
  }
}
