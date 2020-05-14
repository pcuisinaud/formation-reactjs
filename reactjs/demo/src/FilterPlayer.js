import React from 'react';

class FilterPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { filterName: '', filterTeam: '' }
    }

    onHandleChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.props.onFilter(this.state);
    }

    render() {
        this.onHandleChange = this.onHandleChange.bind(this);
        return (
            <div>
                <input name="filterName" placeholder='Filter par nom' value={this.state.searchName} onChange={this.onHandleChange} />
                <select name="filterTeam" value={this.state.searchTeam} onChange={this.onHandleChange}>
                    <option value="">- filtrer par équipe -</option>
                    <option>Juve</option>
                    <option>Madrid</option>
                    <option>Strasbourg</option>
                </select>
            </div>
        )
    }
}

export default FilterPlayer;