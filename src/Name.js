import React, { Component } from 'react'
import './styles/Name.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Name extends Component {
    onSubmit(e) {
        // Set user name
    }

    render() {
        return (
            <div className="Name">
                <h2>Combien de verbes pouvez-vous conjuguer en français?</h2>
                <h3>Jouez maintenent et découvrez!</h3>
                <Form className="Form-Name">
                    <Form.Group>
                        <Form.Label>Comment vous vous appelez?</Form.Label>
                        <Form.Control className="Input-Name" type="text" placeholder="Tappez votre nom" />
                    </Form.Group>
                    <Link to="/game">
                        <Button variant="primary" onClick={this.onSubmit}>
                    Commencez!
                        </Button>
                    </Link>
            </Form>
        </div>
        )
    }
}

