import React from 'react';

var LangContext = React.createContext('fr');

export const LangProvider = LangContext.Provider
export const LangConsumer = LangContext.Consumer

export default LangContext