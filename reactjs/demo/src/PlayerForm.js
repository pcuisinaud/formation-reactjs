import React from 'react';

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', team: '' }
    }

    onSave() {
        this.props.onSave(this.state);
        this.setState({ name: '', team: '' });
    }

    onHandleChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        this.onHandleChange = this.onHandleChange.bind(this);
        return (
            <div>
                <input name="name" placeholder='Nom du joueur' value={this.state.name} onChange={this.onHandleChange} />
                <select name="team" value={this.state.team} onChange={this.onHandleChange}>
                    <option value="">- Choisir une équipe -</option>
                    <option>Juve</option>
                    <option>Madrid</option>
                    <option>Strasbourg</option>
                </select>
                <button onClick={() => this.onSave()}>Enregistrer</button>
            </div>
        )
    }
}

export default PlayerForm;