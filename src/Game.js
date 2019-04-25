import React, { Component } from 'react'
import './styles/Game.css';
import Question from './Question';
import Stats from './Stats';

export default class Main extends Component {
    componentWillMount() {
        // Load questions
        console.log("Mounted main");
    }

    render() {
        return (
        <div className="Game">
            <h4>Bonne chance, Gustavo!</h4>
            <Question />
            <Stats />
        </div>
        )
    }
}
