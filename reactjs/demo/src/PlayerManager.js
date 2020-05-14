import React from 'react';
import PlayerForm from './PlayerForm';
import FilterPlayer from './FilterPlayer';
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
        this.setState({ players: this.state.players.filter((p) => p.name !== name) })
    }

    onFilter(filter) {
        console.log(filter);
        this.setState({ filters: filter });
    }

    render() {
        return (<>
            <PlayerForm onSave={(p) => this.onSave(p)} />
            <FilterPlayer onFilter={(filter) => this.onFilter(filter)} />
            <PlayerList players={this.state.players}
                onDelete={(name) => this.onDelete(name)}
                filters={this.state.filters}
            />
        </>)
    }
}

export default PlayerManager;