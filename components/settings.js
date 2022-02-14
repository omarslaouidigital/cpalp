import {useState, useEffect} from 'react'
import 'animate.css'
import Axios from 'axios'
import PersonIcon from '@mui/icons-material/Person'
import HttpsIcon from '@mui/icons-material/Https'
import ImageIcon from '@mui/icons-material/Image'
import TitleIcon from '@mui/icons-material/Title'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'

const Remove = () => {
    //useState HOOKS
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const [name, setName] = useState()
    const [logo, setLogo] = useState()
    const [style, setStyle] = useState()

    //functions
    const save = async() => {
        if(login && password){
            await Axios({
                method: 'PUT',
                url: '/api/update-auth',
                data: {
                    login: login,
                    password: password
                }
            }).then(result => {
                if(result.data.error === true) return 0
                setShowSuccess(true)
                setSuccessMsg('Settings updated 👍 (you will be redirected to the home page in 5 seconds)')
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            })
        }
        if(name){
            await Axios({
                method: 'PUT',
                url: '/api/update-name',
                data: {
                    name: name
                }
            }).then(result => {
                if(result.data.error === true) return 0
                setShowSuccess(true)
                setSuccessMsg('Settings updated 👍 (you will be redirected to the home page in 5 seconds)')
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            })
        }
        if(logo){
            await Axios({
                method: 'PUT',
                url: '/api/update-logo',
                data: {
                    logo: logo
                }
            }).then(result => {
                if(result.data.error === true) return 0
                setShowSuccess(true)
                setSuccessMsg('Settings updated 👍 (you will be redirected to the home page in 5 seconds)')
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            })
        }
        if(style && style != 0){
            await Axios({
                method: 'PUT',
                url: '/api/update-style',
                data: {
                    style: style
                }
            }).then(result => {
                if(result.data.error === true) return 0
                setShowSuccess(true)
                setSuccessMsg('Settings updated 👍 (you will be redirected to the home page in 5 seconds)')
                setTimeout(() => {
                    window.location.reload()
                }, 5000)
            })
        }
    }

    //main render
    return (
        <div className="my-6 px-6 md:px-12 w-full text-center justify-center mx-auto">
            <h1 className='text-center font-bold text-2xl text-gray-800 md:text-5xl'>Settings</h1>

            {showSuccess && <div className='animate__animated animate__shakeX py-4 w-full md:w-2/6 rounded-xl shadow-lg mt-7 mx-auto bg-green-500 font-bold text-xl text-gray-100'>{successMsg}</div>}

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mt-7 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <PersonIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setLogin(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="new login... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <HttpsIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setPassword(e.target.value)} type="password" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="new password... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <ImageIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setLogo(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Logo of the Landing Page... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <TitleIcon className="w-6 h-6" />
                </span>
                <input onChange={e => setName(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Name of the Landing Page... "/>
            </div>

            <div className="relative w-full text-center md:w-2/6 py-2 my-1 mx-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                    <FormatColorFillIcon className="w-6 h-6" />
                </span>
                <select onChange={e => setStyle(e.target.value)} className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-400 font-bold text-lg text-center">
                    <option value="0" selected>Select your style</option>
                    <option value="1">Style 1</option>
                    <option value="2">Style 2</option>
                </select>   
            </div>

            <center>
                <button onClick={save} className="mt-4 py-4 px-8 bg-green-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite">SAVE</button>
            </center>
        </div>
    )
};

export default Remove;
