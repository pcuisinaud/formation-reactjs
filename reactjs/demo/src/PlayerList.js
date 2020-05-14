import React from 'react';

class PlayerList extends React.Component {

    onDelete(name) {
        this.props.onDelete(name);
    }

    render() {
        this.onDelete = this.onDelete.bind(this);
        const players = this.props.players
            .filter(p => !this.props.filters || this.props.filters.filterName == '' || this.props.filters.filterName == p.name)
            .filter(p => !this.props.filters || this.props.filters.filterTeam == '' || this.props.filters.filterTeam == p.team)
            .map((player) => (<p key={player.name}>
                <span>Joueur : {player.name}</span>
                <span>Equipe : {player.team}</span>
                <button onClick={() => this.onDelete(player.name)}>DEL</button>
            </p>))
        return (<>{players}</>)
    }
}

export default PlayerList;