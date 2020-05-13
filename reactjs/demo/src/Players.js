import React, { useState } from 'react';

function Player(props) {
    const [teamVisible, setTeamVisible] = useState(false);
    let team = <></>
    if (teamVisible) {
        team = <span> (Equipe: {props.team})</span>
    }
    let color = props.team.length < 5 ? 'red' : 'black';
    return (
        <>
            <li onDoubleClick={() => setTeamVisible(!teamVisible)}>
                <span style={{color}}>Player: {props.name}</span>
                {team}
            </li>
        </>
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
        const players = this.players.map(p => <Player key={p.name} name={p.name} team={p.team} />);
        return (
            <>
                <h1>Liste des joueurs</h1>
                {players}
            </>)
    }
}

export default Players;