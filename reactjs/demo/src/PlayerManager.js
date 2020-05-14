import React from 'react';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

class PlayerManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            players: []
        }
    }

    onSave(p) {
        this.setState({ players: [...this.state.players, p] })
    }

    render() {
        return (<>
            <PlayerForm onSave={(p) => this.onSave(p)} />
            <PlayerList players={this.state.players}/>
        </>)
    }
}

export default PlayerManager;