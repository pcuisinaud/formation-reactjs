import React from 'react';

class PlayerList extends React.Component {

    render() {
        const players = this.props.players.map((p) => (<p>
            <span>Joueur : {p.name}</span>
            <span>Equipe : {p.team}</span>
        </p>))
        return (<>{players}</>)
    }
}

export default PlayerList;