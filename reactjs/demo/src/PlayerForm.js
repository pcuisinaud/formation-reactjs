import React from 'react';
import PlayerService from './services/Player.service';
import LangContext from './LangContext';

class PlayerForm extends React.Component {

    static contextType = LangContext

    constructor(props) {
        super(props);
        this.state = { name: '', team: '', teams: null, position: 0 }
        this.numInput = React.createRef();
        this.myDiv = React.createRef();
    }

    // postconstruct
    componentDidMount() {
        console.log("Did mount")
        PlayerService.getTeams().then(teams => this.setState({teams}));
        console.log(this.context);
    }
  
    // predestroy
    componentWillUnmount() {
    }

    onSave() {
        this.props.onSave(this.state);
        this.setState({ name: '', team: '' });
        this.numInput.current.value='TODO'
        this.myDiv.current.style.fontSize = "5rem";
    }

    onHandleChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    avance() {        
        this.myDiv.current.style.position = 'absolute';
        this.myDiv.current.style.left = (this.state.position + 10) + 'px';
        this.setState({position : this.state.position + 10});
    }

    render() {
        if (!this.state.teams) return (<div>Loading...</div>)

        this.onHandleChange = this.onHandleChange.bind(this);

        return (
            <div>
                <h2>Player Form</h2>         
                <div ref={this.myDiv}>myDiv</div>       
                <input type='text' ref={this.numInput} placeholder='Age'/>
                <button onClick={()=>this.avance()}>Avance</button>
                <input name="name" placeholder='Nom du joueur' value={this.state.name} onChange={this.onHandleChange} />
                <select name="team" value={this.state.team} onChange={this.onHandleChange}>
                    <option value="">- Choisir une équipe -</option>
                    {this.state.teams.map((team) => (<option key={team}>{team}</option>))}
                </select>
                <button onClick={() => this.onSave()}>Enregistrer</button>
                {this.context.lang}
            </div>
        )
    }
}

export default PlayerForm;