import React from 'react';
import PlayerManager from './PlayerManager';
import { LangProvider } from './LangContext';
import LangSwitcher from './LangSwitcher';
import Test from './Test';
import SubTest from './SubTest';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function MyApp() {
    return (
        <LangProvider value='fr'>
            <LangSwitcher />
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/player">Player</Link></li>
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
                </Switch>
            </Router>
        </LangProvider>
    );
}

export default MyApp;