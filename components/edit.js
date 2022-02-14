import {useState, useEffect} from 'react'
import 'animate.css'
import Axios from 'axios'
import EditIcon from '@mui/icons-material/Edit'
import ImageIcon from '@mui/icons-material/Image'
import PersonIcon from '@mui/icons-material/Person'
import TranslateIcon from '@mui/icons-material/Translate'
import TitleIcon from '@mui/icons-material/Title'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import DescriptionIcon from '@mui/icons-material/Description'
import CheckIcon from '@mui/icons-material/Check'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const Edit = () => {
    //useState HOOKS
    const [niches, setNiches] = useState([])
    const [nicheToEdit, setNicheToEdit] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    
    //useEffect HOOKS
    useEffect(async() => {
        const fetched_data = await fetch('/api/get-niches')
        const json_data = await fetched_data.json()
        setNiches(json_data)
    }, [])

    //functions
    const copyPath = (niche) => {
        navigator.clipboard.writeText(`${window.location.origin}/${undefined != niche.en_title ? 'en' : ''}${undefined != niche.ar_title ? 'ar' : ''}${undefined != niche.tr_title ? 'tr' : ''}${undefined != niche.id_title ? 'id' : ''}${undefined != niche.fr_title ? 'fr' : ''}${undefined != niche.de_title ? 'de' : ''}${undefined != niche.es_title ? 'es' : ''}${undefined != niche.br_title ? 'br' : ''}?niche=${niche.id}
        `)
        window.scrollTo(0, 0)
        setShowSuccess(true)
        setSuccessMsg('Path copied to clipboard 👍')
        setTimeout(() => {
            setShowSuccess(false)
        }, 5000)
    } 

    const edit_niche = async() => {
        await Axios({
            method: 'PUT',
            url: '/api/edit-niche',
            data: {niche: nicheToEdit}
        }).then(result => {
            if(result.data.error === true) return 0
            setShowSuccess(true)
            setSuccessMsg('Changes saved 👍 (you will be redirected to the home page in 5 seconds)')
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        })
    }

    //main render
    return (
        <div className="my-6 px-6 md:px-12 w-full text-center justify-center mx-auto">
            <h1 className='text-center font-bold text-2xl text-gray-800 md:text-5xl flex gap-4 justify-center'>Edit niche {nicheToEdit && <img src={nicheToEdit.image} className='rounded-xl' width="70px" height="70px" />}</h1>

            {showSuccess && <div className='animate__animated animate__shakeX py-4 w-full md:w-2/6 rounded-xl shadow-lg mt-7 mx-auto bg-green-500 font-bold text-xl text-gray-100'>{successMsg}</div>}

            {nicheToEdit &&
                <>
                <div className="relative w-full text-center md:w-2/6 py-2 my-1 mt-7 mx-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                        <ImageIcon className="w-6 h-6" />
                    </span>
                    <input type="text" value={nicheToEdit.image} onChange={e => setNicheToEdit({...nicheToEdit, image:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="image... "/>
                </div>

                <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                        <PersonIcon className="w-6 h-6" />
                    </span>
                    <input type="text" value={nicheToEdit.author} onChange={e => setNicheToEdit({...nicheToEdit, author:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="author... "/>
                </div>

                {typeof(nicheToEdit.en_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.en_title} onChange={e => setNicheToEdit({...nicheToEdit, en_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="EN Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.en_description} onChange={e => setNicheToEdit({...nicheToEdit, en_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="EN Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.en_keywords} onChange={e => setNicheToEdit({...nicheToEdit, en_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="EN Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.en_locker} onChange={e => setNicheToEdit({...nicheToEdit, en_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="EN Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.ar_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.ar_title} onChange={e => setNicheToEdit({...nicheToEdit, ar_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="AR Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.ar_description} onChange={e => setNicheToEdit({...nicheToEdit, ar_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="AR Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.ar_keywords} onChange={e => setNicheToEdit({...nicheToEdit, ar_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="AR Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.ar_locker} onChange={e => setNicheToEdit({...nicheToEdit, ar_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="AR Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.tr_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.tr_title} onChange={e => setNicheToEdit({...nicheToEdit, tr_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="tr Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.tr_description} onChange={e => setNicheToEdit({...nicheToEdit, tr_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="tr Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.tr_keywords} onChange={e => setNicheToEdit({...nicheToEdit, tr_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="tr Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.tr_locker} onChange={e => setNicheToEdit({...nicheToEdit, tr_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="tr Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.id_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.id_title} onChange={e => setNicheToEdit({...nicheToEdit, id_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="id Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.id_description} onChange={e => setNicheToEdit({...nicheToEdit, id_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="id Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.id_keywords} onChange={e => setNicheToEdit({...nicheToEdit, id_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="id Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.id_locker} onChange={e => setNicheToEdit({...nicheToEdit, id_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="id Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.fr_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.fr_title} onChange={e => setNicheToEdit({...nicheToEdit, fr_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="fr Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.fr_description} onChange={e => setNicheToEdit({...nicheToEdit, fr_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="fr Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.fr_keywords} onChange={e => setNicheToEdit({...nicheToEdit, fr_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="fr Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.fr_locker} onChange={e => setNicheToEdit({...nicheToEdit, fr_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="fr Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.de_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.de_title} onChange={e => setNicheToEdit({...nicheToEdit, de_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="de Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.de_description} onChange={e => setNicheToEdit({...nicheToEdit, de_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="de Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.de_keywords} onChange={e => setNicheToEdit({...nicheToEdit, de_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="de Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.de_locker} onChange={e => setNicheToEdit({...nicheToEdit, de_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="de Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.es_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.es_title} onChange={e => setNicheToEdit({...nicheToEdit, es_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Es Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.es_description} onChange={e => setNicheToEdit({...nicheToEdit, es_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Es Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.es_keywords} onChange={e => setNicheToEdit({...nicheToEdit, es_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Es Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.es_locker} onChange={e => setNicheToEdit({...nicheToEdit, es_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Es Locker... "/>
                        </div>
                    </>
                }

                {typeof(nicheToEdit.br_title) !== 'undefined' &&
                    <>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <TitleIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.br_title} onChange={e => setNicheToEdit({...nicheToEdit, br_title:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="br Title... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <DescriptionIcon className="w-6 h-6" />
                            </span>
                            <textarea type="text" value={nicheToEdit.br_description} onChange={e => setNicheToEdit({...nicheToEdit, br_description:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="br Description... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <LocalOfferIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.br_keywords} onChange={e => setNicheToEdit({...nicheToEdit, br_keywords:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="br Keywords... "/>
                        </div>
                        <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                <AttachMoneyIcon className="w-6 h-6" />
                            </span>
                            <input type="text" value={nicheToEdit.br_locker} onChange={e => setNicheToEdit({...nicheToEdit, br_locker:e.target.value})} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="br Locker... "/>
                        </div>
                    </>
                }
                <center>
                    <button onClick={edit_niche} className="mt-4 py-4 px-8 bg-green-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite"><CheckIcon /> Save changes</button>
                </center>
                </>
            }

            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 w-full mt-8 mx-auto">
                {!nicheToEdit && niches.map((niche, i) => (
                    <div key={i} className='py-3 px-4 rounded-xl my-2 shadow-lg bg-gray-300'>
                        <div className="flex gap-2 px-3 py-2 text-center">
                            <img src={niche.image} className='rounded-xl' width="70px" height="70px" />
                            <h1 className='text-center font-bold text-lg px-3'>langs : 
                                {niche.en_title && ' EN'}
                                {niche.ar_title && ' AR'}
                                {niche.tr_title && ' TR'}
                                {niche.id_title && ' ID'}
                                {niche.fr_title && ' FR'}
                                {niche.de_title && ' DE'}
                                {niche.es_title && ' ES'}
                                {niche.br_title && ' BR'}
                            </h1>
                            <center>
                                <button onClick={e => copyPath(niche)} className="mt-4 mx-1 py-2 px-4 bg-green-500 rounded-xl shadow-lg font-bold text-white"><ContentCopyIcon /></button>
                            </center>
                            
                        </div>
                        <center>
                            <button onClick={e => setNicheToEdit(niche)} className="mt-4 mx-1 py-4 px-8 bg-red-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite"><EditIcon />Edit niche</button>
                        </center>
                        
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Edit;
