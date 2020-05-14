import React from 'react';
import LangContext from './LangContext';

class LangSwitcher extends React.Component {

    static contextType = LangContext

    switchLang() {
        this.context.setLang((this.context.lang === 'fr') ? 'en' : 'fr');
    }

    render() {
        return (<button onClick={() => this.switchLang()}>{this.context.lang}</button>)
    }
}

export default LangSwitcher;