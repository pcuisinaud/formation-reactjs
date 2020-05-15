import React from 'react';
import LoginContext from './LoginContext';


class CTF extends React.Component {

    static contextType = LoginContext

    render() {
        if (this.context.username) {
            return (<div>
                <h2>CTF</h2>
                <span>⛳</span>
            </div>)
        } else {
            return (<div>
                <h2>Pas le droit</h2>
                <span>☠️</span>
            </div>)
        }
    }
}

export default CTF;