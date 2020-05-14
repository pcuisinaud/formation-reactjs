import React from 'react';

class MotDePasse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testLength: false,
            testUpper: false,
            testLower: false,
            testNumber: false
        };
    }
    onKeyUp() {
        let password = document.getElementById('password').value;
        console.log(password);
        let newState = {
            testLength: password.length > 8,
            testUpper: password.match(/[A-Z]/g),
            testLower: password.match(/[a-z]/g),
            testNumber: password.match(/[0-9]/g)
        }
        this.setState(newState);
    }
    render() {
        return (
            <>
                <div>
                    <label for="password">Mot de passe</label>
                    <input id="password" type="password" onKeyUp={()=>this.onKeyUp()}/>
                </div>
                <div>
                    <p style={{color: this.state.testLength?'green':'red'}}>8 caractères minimum</p>
                    <p style={{color: this.state.testUpper?'green':'red'}}>Une majuscule</p>
                    <p style={{color: this.state.testLower?'green':'red'}}>Une minuscule</p>
                    <p style={{color: this.state.testNumber?'green':'red'}}>Un chiffre</p>                    
                </div>
            </>)
    }
}

export default MotDePasse;