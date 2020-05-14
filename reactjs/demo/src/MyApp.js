import React from 'react';
import PlayerManager from './PlayerManager';
import { LangProvider } from './LangContext';
import LangSwitcher from './LangSwitcher';
import Test from './Test';
import SubTest from './SubTest';

function MyApp() {
    return (
        <LangProvider value='fr'>
            <Test title="titre" content="Mon Contenu">
                <SubTest/>
                <SubTest/>                
                <SubTest/>
            </Test>
            <LangSwitcher/>
            <PlayerManager />
        </LangProvider>
    );
}

export default MyApp;