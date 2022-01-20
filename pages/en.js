//imports
import Head from "next/head"
import Image from "next/image"
import 'animate.css'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import StarIcon from '@mui/icons-material/Star'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import {useState, useRef, useEffect} from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import SettingsIcon from '@mui/icons-material/Settings'
import CloseIcon from '@mui/icons-material/Close'
import LocalMallIcon from '@mui/icons-material/LocalMall'

const En = () => {
    //useState Hooks
    const [step_2, setStep2] = useState(false)
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [buffer, setBuffer] = useState(10)
    const [progress_text, setProgressText] = useState('')
    const [locker, setLocker] = useState('')
    const [search, setSearch] = useState('')

    //useRef Hooks
    const progressRef = useRef(() => {})

    //useEffect Hooks
    useEffect(() => {
        progressRef.current = () => {
        if (progress > 100) {
            window.location.href = locker
        } else {
            const diff = Math.random() * 5;
            const diff2 = Math.random() * 5;
            setProgress(progress + diff);
            setBuffer(progress + diff + diff2);
        }
        }
    })

    useEffect(() => {
        if(search !== ''){

        }
    }, [search])

    useEffect(() => {
        if(loading){
            const timer = setInterval(() => {
                progressRef.current()
            }, 500)
            
            setProgressText('Downloading ' + title + '...')
            setTimeout(() => {
                setProgressText('Unpacking ' + title + '.gz')
            }, 8000)
            setTimeout(() => {
                setProgressText('Starting injection...')
            }, 16000)
          
            return () => {
                clearInterval(timer)
            }
        }
    }, [loading])

    //functions
    const choose_niche = (e) => {
        setStep2(true)
        const url = new URL(e.target.parentNode.parentNode.querySelector('.image').src)
        const img_src = '/' + url.search.substring(8).split('&')[0]
        setTitle(e.target.parentNode.parentNode.querySelector('h1').innerText)
        setLocker(e.target.parentNode.parentNode.parentNode.querySelector('.locker').innerText)
        setDescription(e.target.parentNode.parentNode.querySelector('.description').innerText)
        setImg(img_src)
    }

    const isShow = (e) => {
        return 'hidden'
    }

    //main render
    return (
        <div className="bg-slate-100 w-full min-h-screen overflow-x-hidden">

            {/* H T M L   H E A D */}
            <Head>
                <title>GG-EZ.net - Tweaked and Premium Apps for free, Jailbreak and many more...</title>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="lang" content="en-US"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta name="description" content="GG-EZ.net - Tweaked and Premium Apps for free, Jailbreak and many more..." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" />
            </Head>


            {/* H E A D E R */}
            <div className="w-full shadow-md text-center text-white bg-red-500 py-4 px-5">
                <Image src='/logo.png' width='200px' height='70px'/>
                <h1 className="my-2 px-5"><LocalMallIcon sx={{fontSize: '80px'}} className='font-bold'/></h1>
                <p className="animate__animated animate__backInLeft text-sm">Tweaked and Premium Apps for free, Jailbreak and many more...</p>
            </div>


            {/* A F T E R   C H O O S I N G   A P P */}
            {step_2 && 
                <>
                    <div className="w-full h-screen overflow-x-hidden overflow-y-hidden bg-black fixed top-0 z-30 opacity-80"></div>
                    <div className="w-5/6 md:w-2/6 bg-gray-200 rounded-xl shadow-lg py-8 text-center fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 animate__animated animate__fadeIn">
                        <CloseIcon className='absolute top-3 right-5 text-gray-200 bg-gray-400 rounded-xl cursor-pointer' onClick={e => setStep2(false)}/>
                        <Image src={img} width='90px' height='90px' className='rounded-xl'/>
                        <div className="flex text-center gap-2 text-gray-400 mx-auto mt-2 justify-center">
                            <AppleIcon />
                            <AndroidIcon />    
                            <span>|</span>
                            <StarIcon className='text-yellow-500'/>
                            <span className='font-bold'>5.0</span>
                            <span>|</span>
                            <CloudDownloadIcon />
                            <span className='font-bold'>900k+</span>
                        </div>
                        <div className='text-red-400 font-bold text-sm mt-5'>GG-EZ.net</div>
                        <h1 className="font-bold text-gray-600 text-2xl">{title}</h1>
                        <p className="text-gray-400 text-sm description px-5">{description}</p>
                        <hr className="border-gray-300 border w-5/6 mx-auto my-5"/>
                        {!loading ?
                            <>
                            <h1 className="text-red-500 font-bold text-xl">Download ready</h1>
                            <p className="px-6 text-gray-600">Click the button below in order to start with your app download.</p>
                            <button onClick={e => setLoading(true)} className="mt-4 py-4 px-8 bg-red-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite">DOWNLOAD NOW</button>
                            </>
                            :
                            <> 
                                <SettingsIcon sx={{fontSize: '70px'}} className='mb-4 text-gray-400 animate__animated animate__rotateIn animate__infinite'/>
                                <h1 className="font-bold text-gray-600 text-2xl px-6 mb-4 animate__animated animate__pulse animate__infinite">{progress_text}</h1>
                                <Box className='px-10' sx={{ width: '100%' }}>
                                    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                                </Box>
                            </>
                        }
                    </div>
                </>
            }


            {/* C O N T E N T */}
            <div className="w-5/6 mx-auto my-4">

                {/* Search Bar */}
                <div className="relative text-center md:w-2/6 mx-auto animate__animated animate__pulse animate__infinite">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </span>
                    <input onChange={e => setSearch(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-200 text-lg text-center" placeholder="Search for apps..."/>
                </div>

                {/* Niches */}
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 md:mt-2 md:w-3/6 md:mx-auto">

                    {/* instagram++ */}
                    <div onClick={e => choose_niche(e)} className={`${search !== '' && !'instagram insta insta++ instagram++'.includes(search.toLowerCase()) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
                        <div className="locker hidden">https://google.com</div>
                        <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
                        <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
                        <div className='flex gap-3 px-3'>
                            <div className="relative w-32 text-center justify-center align-middle items-center">
                                <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                                    <Image src='/insta_verified.png' className="image" width='100px' height='100px' />
                                </div>
                            </div>
                            <div>
                                <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
                                <h1 className="font-bold text-gray-600 text-2xl">Instagram++</h1>
                                <p className="text-gray-400 text-sm description">This app will help you get a verification badge for instagram.</p>
                                <div className='flex'>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tinder Plus */}
                    <div onClick={e => choose_niche(e)} className={`${search !== '' && !'tinder tinder plus tinder++ tinder premium'.includes(search.toLowerCase()) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
                        <div className="locker hidden">https://google.com</div>
                        <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
                        <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
                        <div className='flex gap-3 px-3'>
                            <div className="relative w-32 text-center justify-center align-middle items-center">
                                <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                                    <Image src='/tinder.png' className="image rounded-xl" width='100px' height='100px' />
                                </div>
                            </div>
                            <div>
                                <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
                                <h1 className="font-bold text-gray-600 text-2xl">Tinder Plus</h1>
                                <p className="text-gray-400 text-sm description">This app will activate tinder plus for you for free.</p>
                                <div className='flex'>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Whatsapp Gold */}
                    <div onClick={e => choose_niche(e)} className={`${search !== '' && !'Whatsapp gold wtsp whatsapp++'.includes(search.toLowerCase()) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
                        <div className="locker hidden">https://google.com</div>
                        <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
                        <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
                        <div className='flex gap-3 px-3'>
                            <div className="relative w-32 text-center justify-center align-middle items-center">
                                <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                                    <Image src='/whatsapp_gold.png' className="image rounded-xl" width='100px' height='100px' />
                                </div>
                            </div>
                            <div>
                                <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
                                <h1 className="font-bold text-gray-600 text-2xl">Whatsapp Gold</h1>
                                <p className="text-gray-400 text-sm description">Get premium features for whatsapp.</p>
                                <div className='flex'>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spotify ++ */}
                    <div onClick={e => choose_niche(e)} className={`${search !== '' && !'spotify Spotify spotify++'.includes(search.toLowerCase()) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
                        <div className="locker hidden">https://google.com</div>
                        <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
                        <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
                        <div className='flex gap-3 px-3'>
                            <div className="relative w-32 text-center justify-center align-middle items-center">
                                <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                                    <Image src='/spotify.png' className="image rounded-xl" width='100px' height='100px' />
                                </div>
                            </div>
                            <div>
                                <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
                                <h1 className="font-bold text-gray-600 text-2xl">Spotify++</h1>
                                <p className="text-gray-400 text-sm description">Get paid version of spotify for free.</p>
                                <div className='flex'>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PES 2022 */}
                    <div onClick={e => choose_niche(e)} className={`${search !== '' && !'pes pes 2022 pes 22 pes mod pro evoluation soccer'.includes(search.toLowerCase()) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
                        <div className="locker hidden">https://google.com</div>
                        <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
                        <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
                        <div className='flex gap-3 px-3'>
                            <div className="relative w-32 text-center justify-center align-middle items-center">
                                <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                                    <Image src='/pes2022.jpg' className="image rounded-xl" width='100px' height='100px' />
                                </div>
                            </div>
                            <div>
                                <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
                                <h1 className="font-bold text-gray-600 text-2xl">PES 2022 MOD</h1>
                                <p className="text-gray-400 text-sm description">PES 2022 modded version with unlimited coins</p>
                                <div className='flex'>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                    <StarIcon className='mt-2 text-yellow-400'/>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>

            </div>



        </div>
    )
};

export default En;
