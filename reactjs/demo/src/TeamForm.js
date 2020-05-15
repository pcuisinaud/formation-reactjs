import React from 'react';
import { addTeam } from './services/Player.service';

class TeamForm extends React.Component {

    state = {
        name: ''
    }

    onAdd(e) {
        addTeam(this.state.name);
    }

    render() {
        return (
            <div>
                <h2>Team Form</h2>
                <input type='text' name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={(e) => this.onAdd(e)}>Ajouter</button>
            </div>
        )
    }
}

export default TeamForm;