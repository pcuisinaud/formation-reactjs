import React from 'react';

class PlayerList extends React.Component {

    constructor(params) {
        super(params);
        console.log(params);
    }

    render() {
        console.log(this.params)
        const players = this.params.players.map((p) => (<p>
            <span>Joueur : {p.name}</span>
            <span>Equipe : {p.team}</span>
        </p>))
        return (<>{players}</>)
    }
}

export default PlayerList;