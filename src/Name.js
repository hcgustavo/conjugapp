import React, { Component } from 'react'
import './styles/Name.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserName } from './actions/userActions';

const Name = ({dispatch}) => {
    let nameInput

    return (
        <div className="Name">
            <h2>Combien de verbes pouvez-vous conjuguer en français?</h2>
            <h3>Jouez maintenent et découvrez!</h3>
            <Form className="Form-Name" onSubmit={e => e.preventDefault()}>
                <Form.Group>
                    <Form.Label>Comment vous vous appelez?</Form.Label>
                    <Form.Control ref={node => (nameInput = node)} className="Input-Name" type="text" placeholder="Tappez votre nom" />
                </Form.Group>
                <Link to="/game">
                    <Button variant="primary" onClick={e => {
                        let name = nameInput.value !== "" ? nameInput.value : "Stranger";
                        dispatch(setUserName(name))
                    }}>
                Commencez!
                    </Button>
                </Link>
        </Form>
    </div>
    )
}

export default connect()(Name);

