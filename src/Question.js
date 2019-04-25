import React, { Component } from 'react'
import { Container, Row, Form, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import './styles/Question.css';
import { connect } from 'react-redux';
import { fetchQuestions } from './actions/questionsActions';
import { incrementCorrectAnswers, incrementWrongAnswers } from './actions/userActions';

let answerInput;
let currentIndex = 0;

class Question extends Component {

    componentWillMount() {
        this.props.fetchQuestions();
    }

    onSubmit = e => {
        e.preventDefault();
        this.evaluateAnswer(answerInput.value);
    }

    evaluateAnswer = answer => {
        if(currentIndex > this.props.questions.length - 1) {
            alert("Le jeu est terminé!");
            return;
        }
        if(this.props.questions.length > 0) {
            let correctAnswer = this.props.questions[currentIndex].response;
            if(answer.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").trim() === correctAnswer) {
                alert("C'est correct! :)");
                this.props.incrementCorrectAnswers(); 
            } else {
                alert("Ce n'est pas la bonne réponse :(");
                this.props.incrementWrongAnswers();
            }
            currentIndex++;
            if(currentIndex > this.props.questions.length - 1) {
                return;
            }
            answerInput.value = "";
            this.forceUpdate(); //not ideal, but will do it for now
        }
    }

    render() {
        let questionParts = [];
        let verb = "";
        if(this.props.questions.length > 0) {
            questionParts = this.props.questions[currentIndex].parts.map(part => (
                <Col key={part}>
                    <Card>
                        <Card.Body>{part}</Card.Body>
                    </Card>
                </Col>
            ));

            verb = (
                <Col>
                    <Card bg="warning">
                        <Card.Body>{`${this.props.questions[currentIndex].verb} (${this.props.questions[currentIndex].tense})`}</Card.Body>
                    </Card>
                </Col>
            ) 
        }
        return (
        <div className="Question">
            <Container>
                <Row>
                    {questionParts}
                    {verb}
                </Row>

                <Row>
                    <Form className="Form" onSubmit={this.onSubmit}>
                        <InputGroup className="mb-3" size="lg">
                            <FormControl
                            ref={node => (answerInput = node)}
                            placeholder="Tappez votre réponse"
                            aria-label="Tappez votre réponse"
                            aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <Button variant="primary" type="submit">OK</Button>
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

export default connect(mapStateToProps, { fetchQuestions, incrementCorrectAnswers, incrementWrongAnswers })(Question);
