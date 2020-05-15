import React, { Component } from 'react';

var LoginContext = React.createContext();

class LoginProvider extends Component {
    state = {
        username: null
    }
    setUsername = username => {
        this.setState({ username })
    }
    render() {
        const { children } = this.props
        const { username } = this.state
        const { setUsername } = this
        return (
            <LoginContext.Provider value={{ username, setUsername }}>
                {children}
            </LoginContext.Provider>
        )
    }
}

export default LoginContext
export { LoginProvider }