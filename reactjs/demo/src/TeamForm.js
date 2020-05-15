import React from 'react';
import { addTeam } from './services/Player.service';

class TeamForm extends React.Component {

    teamName = React.createRef();
    response = React.createRef();

    onAdd() {
        addTeam(this.teamName.current.value)
            .then(res => this.updateWithResponse(res));
    }

    updateWithResponse(res) {
        this.response.current.innerText = (res.status == '200') ? 'OK' : 'Erreur !';
    }

    render() {
        return (
            <div>
                <h2>Team Form</h2>
                <input placeholder="Nom de l'équipe" type="text" ref={this.teamName} />
                <span ref={this.response}></span>
                <button onClick={() => this.onAdd()}>Ajouter</button>
            </div>
        )
    }
}

export default TeamForm;