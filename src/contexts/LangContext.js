import React from 'react'; 

const LangContext = () => React.createContext({
    lang: 'en',
    setLang: (value) => {}
});

export default LangContext;

