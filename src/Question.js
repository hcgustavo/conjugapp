import React, { Component } from 'react'
import { Container, Row, Form, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import './styles/Question.css';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions/questionsActions';

class Question extends Component {
    componentWillMount() {
        this.props.fetchQuestions();
    }

    render() {
        let questionParts = [];
        if(this.props.questions.length > 0) {
            questionParts = this.props.questions[0].parts.map(part => (
                <Col>
                    <Card>
                        <Card.Body>{part}</Card.Body>
                    </Card>
                </Col>
            ));
        }
        return (
        <div className="Question">
            <Container>
                <Row>
                    {questionParts}
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

const mapStateToProps = state => ({
    questions: state.questions.items
})

export default connect(mapStateToProps, { fetchQuestions })(Question);
