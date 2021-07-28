import React, { useContext, useState } from 'react';
import HeaderTitle from './contexts/HeaderTitle';
import LangContext  from './contexts/LangContext';
import './App.css';


const LangButton = ({lang, setLang}) => { 

  const onSwitchLang = () => setLang(lang === 'en'? 'th': 'en');

  return(
    <button onClick={onSwitchLang}>
      {lang === 'en'? 'switch to th': 'switch to en'}
    </button>
  )
}

const LangButtonTwo = () => {
  const {lang, setLang} = useContext(LangContext);
  console.log(lang, setLang);
  const onSwitchLang = () => setLang(lang === 'en'? 'th': 'en');
  return(
    <>
    <button onClick={onSwitchLang}>
      {lang === 'en'? 'switch to th': 'switch to en'}
    </button>
    </>
  )
}

function App() {

  const [lang, setLang] = useState('en');

  return (
    
      <div className="App">
        <HeaderTitle/>
          <LangButton lang={lang} setLang={setLang}/>
        <LangContext.Provider value={{lang, setLang}}>
          <LangButtonTwo />
        </LangContext.Provider>
      </div>
 
  );
}

export default App;
