import React from 'react';
import LoginContext from './LoginContext';
import LoginService from './services/Login.service';

class Login extends React.Component {

    usernameInput = React.createRef();
    passwordInput = React.createRef();
    messageLabel = React.createRef();

    static contextType = LoginContext

    login() {
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;

        LoginService.login(username, password)
            .then(res => this.callbackLogin(username, res));
    }

    callbackLogin(username, res) {
        if (res.status == '200') {
            this.context.setUsername(username)
        } else {
            this.messageLabel.current.innerText = 'Bad credential !';
            this.context.setUsername({ username: null });
        }
    }

    logout() {
        this.context.setUsername({ username: null });
    }

    render() {
        console.log(this.context)
        if (this.context.username) {
            return (
                <div>
                    <p>Bienvenue {this.context.username}</p>
                    <button onClick={() => this.logout()}>Se déconnecter</button>
                </div>
            )
        } else {
            return (
                <div>
                    <input type='text' name='username' ref={this.usernameInput} />
                    <input type='password' name='password' ref={this.passwordInput} />
                    <span ref={this.messageLabel}></span>
                    <button onClick={() => this.login()}>Se connecter</button>
                </div>
            )
        }
    }
}

export default Login;