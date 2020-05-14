import React from 'react';
import PlayerManager from './PlayerManager';
import { LangProvider } from './LangContext';

function MyApp() {
    return (
        <LangProvider value='fr'>
            <PlayerManager />
        </LangProvider>
    );
}

export default MyApp;