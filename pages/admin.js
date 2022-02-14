//imports
import PersonIcon from '@mui/icons-material/Person'
import HttpsIcon from '@mui/icons-material/Https'
import 'animate.css'
import {admin} from '../db.json'
import {useState, useEffect} from 'react'
import Panel from '../components/panel'
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import Loader from '../components/loader'

const Admin = () => {
    //useState HOOKS
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [showError, setShowError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const [connected, setConnected] = useState(false)
    const [loading, setLoading] = useState(true)

    //useEffect HOOKS
    useEffect(() => {
        if(window){
            if(window.localStorage.getItem('connection_id') !== "false"){
                Axios({
                    method: 'POST',
                    url: '/api/check-connection',
                    data: {id: window.localStorage.getItem('connection_id')}
                }).then(result => {
                    setLoading(false)
                    if(result.data.connected) setConnected(true)
                })
            }
        }
    },[])

    //functions
    const check_login = async(e) => {
        e.preventDefault()
        if(!login || !password){
            setShowError(true)
            setErrorMsg('Login or password is empty!')
            setTimeout(() => {
                setShowError(false)
            }, 3000)
        }
        await Axios({
            method: 'POST',
            url: '/api/check-auth',
            data: {
                login: login,
                password: password
            }
        }).then(async(result) => {
            if(result.data.incorrect){
                setShowError(true)
                setErrorMsg('Login or password is incorrect!')
                setTimeout(() => {
                    setShowError(false)
                }, 3000)
                return 0
            }
            setLogin('')
            setPassword('')
            setShowSuccess(true)
            setSuccessMsg('Connected successfully 👍')
            let id = uuidv4()
            window.localStorage.setItem('connection_id', id)
            await Axios({
                method: 'PUT',
                url: '/api/update-connection',
                data: {id: id}
            })
            setTimeout(() => {
                setConnected(true)
            }, 2000)
        })
    }

    //main render
    return (
        <div className="w-full min-h-screen bg-slate-200">
            {loading && <Loader />}
            {!connected ?
                <>
                    <h1 className="text-center py-5 font-bold text-4xl text-gray-700 md:text-6xl md:py-10">Admin Panel</h1>
                    <div className="w-5/6 md:w-2/6 mx-auto bg-gray-100 rounded-xl shadow-lg my-4 py-4 md:mt-5">
        
                        {showError && <div className='py-3 px-3 text-center font-bold w-5/6 md:w-4/6 mx-auto rounded-lg shadow-md text-gray-100 bg-red-500'>{errorMsg}</div>}
                        {showSuccess && <div className='py-3 px-3 text-center font-bold w-5/6 md:w-4/6 mx-auto rounded-lg shadow-md text-gray-100 bg-green-500'>{successMsg}</div>}
                        <form onSubmit={e => check_login(e)}>
                            {/* Login */}
                            <div className="relative w-5/6 text-center md:w-4/6 mx-auto py-6">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                    <PersonIcon className="w-6 h-6" />
                                </span>
                                <input value={login} onChange={e => setLogin(e.target.value)} type="text" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Login ... "/>
                            </div>
            
                            {/* Password */}
                            <div className="relative w-5/6 text-center md:w-4/6 mx-auto">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-5">
                                    <HttpsIcon className="w-6 h-6" />
                                </span>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="w-full mx-auto bg-gray-300 rounded-xl shadow-sm py-3 text-gray-100 font-bold text-lg text-center" placeholder="Password..."/>
                            </div>
            
                            <center>
                                <button type='submit' className="mt-4 py-4 px-8 bg-red-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite">LOG IN</button>
                            </center>
                        </form>
                    </div>
                </>
                :
                <Panel />
            }
        </div>
    )
};

export default Admin;
