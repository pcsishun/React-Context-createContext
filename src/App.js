import React, { useContext, useState } from 'react';
import HeaderTitle from './contexts/HeaderTitle';
import LangContext  from './contexts/LangContext';
import './App.css';
 

const LangButtonTwo = () => {
  const {lang, setLang} = useContext(LangContext);
  console.log(lang);
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
    
      <div className="App">ย
        <LangContext.Provider value={{lang:lang, setLang:setLang}}>
          <HeaderTitle/>
          {/* <LangButton lang={lang} setLang={setLang}/> */}
          <LangButtonTwo />
        </LangContext.Provider>
      </div>
 
  );
}

export default App;
