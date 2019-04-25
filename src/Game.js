import React, { Component } from 'react'
import './styles/Game.css';
import Question from './Question';
import Stats from './Stats';

export default class Main extends Component {
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
