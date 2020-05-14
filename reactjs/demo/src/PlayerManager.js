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
        console.log("onSave " + p);
        this.setState({ players: [...this.state.players, p] })
    }

    onDelete(name) {
        console.log("onDelete " + name);
        this.setState({ players: this.state.players.filter((p) => p.name != name) })
    }

    render() {
        return (<>
            <PlayerForm onSave={(p) => this.onSave(p)} />
            <PlayerList players={this.state.players} onDelete={(name) => this.onDelete(name)} />
        </>)
    }
}

export default PlayerManager;