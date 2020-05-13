import React from 'react';

function Player(props) {
    return (
        <li> 
            <span>Player: {props.name}</span>
            <span>Equipe: {props.team}</span>
        </li>
    )
}

class Players extends React.Component {
    players = []
    constructor(props) {
        super(props);
        this.players = [
            { name: 'Chris', team: 'Juve' },
            { name: 'Phil', team: 'FC Grasse' },
            { name: 'Vincent', team: 'Spartak Courbevoie' },
        ]
    }
    render() {
        const players = this.players.map(p => <Player key={p.name} name={p.name} team={p.team}/>);
        return (
            <>
                <h1>Liste des joueurs</h1>
                {players}
            </>)
    }
}

export default Players;