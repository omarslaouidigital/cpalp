//imports
import {useState, useEffect} from 'react'

const useLang = () => {
    const [lang, setLang] = useState(false)

    useEffect(() => {
        undefined !== window && setLang(window.navigator.language.substring(0, 2).toLocaleLowerCase())
    }, [])

    return [lang]
};

export default useLang;
