import React from 'react';
import PlayerManager from './PlayerManager';
import { LangProvider } from './LangContext';
import LangSwitcher from './LangSwitcher';

function MyApp() {
    return (
        <LangProvider value='fr'>
            <LangSwitcher/>
            <PlayerManager />
        </LangProvider>
    );
}

export default MyApp;