import React from 'react';
import PlayerManager from './PlayerManager';
import { LangProvider } from './LangContext';
import LangSwitcher from './LangSwitcher';
import Test from './Test';
import TeamForm from './TeamForm';
import SubTest from './SubTest';
import Login from './Login';
import CTF from './CTF';
import { LoginProvider } from './LoginContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function MyApp() {
    return (
        <LoginProvider>
            <Login />
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/player">Player</Link></li>
                        <li><Link to="/teams">Teams</Link></li>
                        <li><Link to="/ctf">CTF</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/test">
                        <Test title="titre" content="Mon Contenu">
                            <SubTest />
                            <SubTest />
                            <SubTest />
                        </Test>
                    </Route>
                    <Route path="/player">
                        <PlayerManager />
                    </Route>
                    <Route path="/teams">
                        <TeamForm />
                    </Route>
                    <Route path="/ctf">
                        <CTF />
                    </Route>
                </Switch>
            </Router>
        </LoginProvider>
    );
}

export default MyApp;