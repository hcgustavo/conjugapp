import React, { Component } from 'react'
import './styles/Game.css';
import Question from './Question';
import Stats from './Stats';
import { connect } from 'react-redux';
import { getUser } from './actions/userActions';

class Game extends Component {
    componentWillMount() {
        this.props.getUser();
    }

    render() {
        let name = this.props.userName;

        return (
        <div className="Game">
            <h4>Bonne chance, {name}!</h4>
            <Question />
            <Stats />
        </div>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.user.name
})

export default connect(mapStateToProps, { getUser })(Game);
