import { useState, useEffect } from "react"
import getBrowserFingerprint   from "get-browser-fingerprint"
import Axios                   from "axios"
import { v4 as uuid_v4 }       from "uuid"

const useAnalytics = () => {
    //useState HOOKS
    const [os, setOs]                       = useState(false)
    const [browser, setBrowser]             = useState(false)
    const [lang, setLang]                   = useState(false)
    const [fingerprint, setFingerprint]     = useState(false)
    const [referrer, setRef]                = useState(false)
    const [reqId, setReqId]                 = useState(uuid_v4())
    const [niche, setNiche]                 = useState(false)
    const [lockerClicked, setLockerClicked] = useState(false)
    const [path, setPath] = useState(false)
    const [data, setData] = useState(false)

    //useEffect HOOKS
    useEffect(() => {
        if(undefined !== window){
            setOs(window.navigator.platform.toLocaleLowerCase().includes('linux') ? 'Android' : window.navigator.platform)
            if(navigator.userAgent.match(/chrome|chromium|crios/i)) setBrowser('Chrome')
            else if(navigator.userAgent.match(/firefox|fxios/i))    setBrowser('Firefox')
            else if(navigator.userAgent.match(/safari/i))           setBrowser('Safari')
            else if(navigator.userAgent.match(/opr\//i))            setBrowser('Opera')
            else if(navigator.userAgent.match(/edg/i))              setBrowser('Edge')
            else setBrowser('other')
            setLang(window.navigator.language)
            setRef(document.referrer)
            setFingerprint(getBrowserFingerprint())
            setPath(window.location.pathname)
        }
    } ,[])

    useEffect(() => {
        if(os !== false && browser !== false && lang !== false && referrer !== false && fingerprint !== false){
            const tmp_data = {
                id: reqId,
                os: os,
                browser: browser,
                lang: lang,
                ref: referrer,
                fingerprint: fingerprint,
                path: path,
                niche: niche,
                lockerClicked: lockerClicked
            }
            setData(tmp_data)
        }
    }, [os, browser, lang, referrer, fingerprint, niche])

    useEffect(async() => {
        if(niche){
            await Axios({
                method: 'POST',
                url: '/api/add-analytics',
                data: {
                    id: reqId,
                    os: os,
                    browser: browser,
                    lang: lang,
                    ref: referrer,
                    fingerprint: fingerprint,
                    path: path,
                    niche: niche,
                    lockerClicked: lockerClicked
                }
            })
        }
    }, [niche])

    //main return
    return [data, setNiche, setLockerClicked]
};

export default useAnalytics;
