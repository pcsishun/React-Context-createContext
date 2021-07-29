import React,{useContext} from 'react';
import LangContext from './LangContext';

const HeaderTitle = () => {
    
    const {lang} = useContext(LangContext);
    const showLang = lang === 'en' ? 'Now using English.' : 'Now using Thai.'
    const headername = "Title useContext"

    return (
        <div>
            <h1>{headername}</h1>
            <h5>{showLang}</h5>
        </div>
    )
}

export default HeaderTitle;