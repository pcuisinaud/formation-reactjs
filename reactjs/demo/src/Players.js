import React, {useState} from 'react';

function Player(props) {
    const [teamVisible, showTeamVisible] = useState(false);
    let team = <></>
    if(teamVisible) {
        team = <li>Equipe: {props.team}</li>
    }
    return (
        <>
            <li onClick={() => showTeamVisible(!teamVisible)}>Player: {props.name}</li>
            {team}
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
        const players = this.players.map(p => <Player key={p.name} name={p.name} team={p.team}/>);
        return (
            <>
                <h1>Liste des joueurs</h1>
                {players}
            </>)
    }
}

export default Players;