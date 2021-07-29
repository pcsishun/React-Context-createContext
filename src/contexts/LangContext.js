import {createContext} from 'react'; 

const LangContext = createContext({
    lang: 'en',
    setLang: (value) => {}
});

export default LangContext;

