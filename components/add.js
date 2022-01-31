//imports
import ImageIcon from '@mui/icons-material/Image'
import TitleIcon from '@mui/icons-material/Title'
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PersonIcon from '@mui/icons-material/Person'
import TranslateIcon from '@mui/icons-material/Translate'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useState } from 'react'
import Axios from 'axios'
import 'animate.css'
import { v4 as uuidv4 } from 'uuid'

const Add = () => {
    //useState HOOKS
    const [showError, setShowError] = useState(false)
    const [errorMsg, setErrMsg] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const [langs, setLangs] = useState([])
    const [image, setImage] = useState()
    const [author, setAuthor] = useState()
    const [en_title, setEnTitle] = useState()
    const [ar_title, setArTitle] = useState()
    const [tr_title, setTrTitle] = useState()
    const [id_title, setIdTitle] = useState()
    const [fr_title, setFrTitle] = useState()
    const [de_title, setDeTitle] = useState()
    const [es_title, setEsTitle] = useState()
    const [br_title, setBrTitle] = useState()
    const [en_description, setEnDescription] = useState()
    const [ar_description, setArDescription] = useState()
    const [tr_description, setTrDescription] = useState()
    const [id_description, setIdDescription] = useState()
    const [fr_description, setFrDescription] = useState()
    const [de_description, setDeDescription] = useState()
    const [es_description, setEsDescription] = useState()
    const [br_description, setBrDescription] = useState()
    const [en_keywords, setEnKeywords] = useState()
    const [ar_keywords, setArKeywords] = useState()
    const [tr_keywords, setTrKeywords] = useState()
    const [id_keywords, setIdKeywords] = useState()
    const [fr_keywords, setFrKeywords] = useState()
    const [de_keywords, setDeKeywords] = useState()
    const [es_keywords, setEsKeywords] = useState()
    const [br_keywords, setBrKeywords] = useState()
    const [en_locker, setEnLocker] = useState()
    const [ar_locker, setArLocker] = useState()
    const [tr_locker, setTrLocker] = useState()
    const [id_locker, setIdLocker] = useState()
    const [fr_locker, setFrLocker] = useState()
    const [de_locker, setDeLocker] = useState()
    const [es_locker, setEsLocker] = useState()
    const [br_locker, setBrLocker] = useState()

    //functions
    const add_lang = (lang) => {
        let tmp_langs = [...langs]
        tmp_langs.push(lang)
        setLangs(tmp_langs)
        console.log(tmp_langs)
    }

    const remove_lang = (lang) => {
        let tmp_langs = [...langs]
        const index = tmp_langs.indexOf(lang);
        if (index > -1) {
            tmp_langs.splice(index, 1)
        }
        setLangs(tmp_langs)
        console.log(tmp_langs)
    }

    //functions
    const save_niche = async() => {
        if(!image){
            setShowError(true)
            setErrMsg('Please enter the image of the niche (URL)')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(!author){
            setShowError(true)
            setErrMsg('Please enter the author')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('en') && (!en_title || !en_description || !en_keywords || !en_locker)){
            setShowError(true)
            setErrMsg('Some English data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('ar') && (!ar_title || !ar_description || !ar_keywords || !ar_locker)){
            setShowError(true)
            setErrMsg('Some Arabic data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('tr') && (!tr_title || !tr_description || !tr_keywords || !tr_locker)){
            setShowError(true)
            setErrMsg('Some Turkish data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('id') && (!id_title || !id_description || !id_keywords || !id_locker)){
            setShowError(true)
            setErrMsg('Some Indonesian data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('fr') && (!fr_title || !fr_description || !fr_keywords || !fr_locker)){
            setShowError(true)
            setErrMsg('Some French data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('de') && (!de_title || !de_description || !de_keywords || !de_locker)){
            setShowError(true)
            setErrMsg('Some German data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('es') && (!es_title || !es_description || !es_keywords || !es_locker)){
            setShowError(true)
            setErrMsg('Some Spanish data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        if(langs.includes('br') && (!br_title || !br_description || !br_keywords || !br_locker)){
            setShowError(true)
            setErrMsg('Some Brazil data is missing!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return 0
        }
        let niche = {
            id: uuidv4(),
            image: image,
            author: author
        }
        if(langs.includes('ar')){
            niche.ar_title = ar_title
            niche.ar_description = ar_description
            niche.ar_keywords = ar_keywords
            niche.ar_locker = ar_locker
        }
        if(langs.includes('en')){
            niche.en_title = en_title
            niche.en_description = en_description
            niche.en_keywords = en_keywords
            niche.en_locker = en_locker
        }
        if(langs.includes('tr')){
            niche.tr_title = tr_title
            niche.tr_description = tr_description
            niche.tr_keywords = tr_keywords
            niche.tr_locker = tr_locker
        }
        if(langs.includes('id')){
            niche.id_title = id_title
            niche.id_description = id_description
            niche.id_keywords = id_keywords
            niche.id_locker = id_locker
        }
        if(langs.includes('fr')){
            niche.fr_title = fr_title
            niche.fr_description = fr_description
            niche.fr_keywords = fr_keywords
            niche.fr_locker = fr_locker
        }
        if(langs.includes('de')){
            niche.de_title = de_title
            niche.de_description = de_description
            niche.de_keywords = de_keywords
            niche.de_locker = de_locker
        }
        if(langs.includes('es')){
            niche.es_title = es_title
            niche.es_description = es_description
            niche.es_keywords = es_keywords
            niche.es_locker = es_locker
        }
        if(langs.includes('br')){
            niche.br_title = br_title
            niche.br_description = br_description
            niche.br_keywords = br_keywords
            niche.br_locker = br_locker
        }
        await Axios({
            method: 'POST',
            url: '/api/add-niche',
            data: niche
        }).then(result => {
            if(result.data.error === true){
                setShowError(true)
                setErrMsg('Error while adding the niche :(')
                setTimeout(() => {
                    setShowError(false)
                }, 3000)
                return 0
            }
            setShowSuccess(true)
            setSuccessMsg('Niche added succesfully 👍 (you will be redirected to the home page in 5 seconds)')
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        })
    }

    //main render
    return (
        <div className='my-6 px-6 md:px-12 w-full text-center justify-center mx-auto'>
            <h1 className='text-center font-bold text-2xl text-gray-800 md:text-5xl'>Add new niche</h1>

            {showError && <div className='animate__animated animate__shakeX py-4 w-full md:w-2/6 rounded-xl shadow-lg mt-7 mx-auto bg-red-500 font-bold text-xl text-gray-100'>{errorMsg}</div>}
            {showSuccess && <div className='animate__animated animate__shakeX py-4 w-full md:w-2/6 rounded-xl shadow-lg mt-7 mx-auto bg-green-500 font-bold text-xl text-gray-100'>{successMsg}</div>}

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mt-7 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <ImageIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setImage(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="icon of the niche ... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <PersonIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setAuthor(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Author ... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <h1 className='w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-400 font-bold text-lg text-center px-8'><TranslateIcon className="w-6 h-6 text-gray-800" /> Choose languages :
                    <div className="grid gap-2 grid-cols-3 mt-3">
                        <div>AR <input type="radio" name="lang" onChange={e => setLangs(['ar'])}/></div>
                        
                        <div>EN <input type="radio" name="lang" onChange={e => setLangs(['en'])}/></div>
                        
                        <div>ES <input type="radio" name="lang" onChange={e => setLangs(['es'])}/></div>
                        
                        <div>BR <input type="radio" name="lang" onChange={e => setLangs(['br'])}/></div>
                        
                        <div>TR <input type="radio" name="lang" onChange={e => setLangs(['tr'])}/></div>
                        
                        <div>ID <input type="radio" name="lang" onChange={e => setLangs(['id'])}/></div>
                        
                        <div>DE <input type="radio" name="lang" onChange={e => setLangs(['de'])}/></div>
                        
                        <div>FR <input type="radio" name="lang" onChange={e => setLangs(['fr'])}/></div>
                    </div>
                </h1>
            </div>


            {langs.includes('fr') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setFrTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="French Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setFrDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="French Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setFrKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="French Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setFrLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="French Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('en') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEnTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="English Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setEnDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="English Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEnKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="English Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEnLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="English Locker ... "/>
                    </div>
                </>
            }


            {langs.includes('ar') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setArTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Arab Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setArDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Arab Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setArKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Arab Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setArLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Arab Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('tr') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setTrTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Turkish Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setTrDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Turkish Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setTrKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Turkish Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setTrLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Turkish Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('id') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setIdTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Indonesian Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setIdDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Indonesian Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setIdKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Indonesian Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setIdLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Indonesian Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('de') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setDeTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="German Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setDeDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="German Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setDeKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="German Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setDeLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="German Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('es') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEsTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Spanish Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setEsDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Spanish Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEsKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Spanish Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setEsLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Spanish Locker ... "/>
                    </div>
                </>
            }

            {langs.includes('br') &&
                <>
                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <TitleIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setBrTitle(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Brazil Title ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <FormatIndentDecreaseIcon className="w-6 h-6" />
                        </span>
                        <textarea onChange={e => setBrDescription(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Brazil Description ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <LocalOfferIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setBrKeywords(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Brazil Keywords ... "/>
                    </div>

                    <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                            <AttachMoneyIcon className="w-6 h-6" />
                        </span>
                        <input onChange={e => setBrLocker(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Brazil Locker ... "/>
                    </div>
                </>
            }

            {langs.length > 0 ?
                <center>
                    <button onClick={save_niche} className="mt-4 py-4 px-8 bg-green-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite">ADD NICHE</button>
                </center>
                :
                <h1 className='font-bold text-lg text-red-400'>*Choose at least 1 language to continue</h1>
            }

        </div>
    )
};

export default Add;
