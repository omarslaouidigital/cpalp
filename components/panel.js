//imports
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import AddBoxIcon from '@mui/icons-material/AddBox'
import SettingsIcon from '@mui/icons-material/Settings'
import BarChartIcon from '@mui/icons-material/BarChart'
import LogoutIcon from '@mui/icons-material/Logout'
import DeleteIcon from '@mui/icons-material/Delete'
import {useState, useEffect} from 'react'
import Add from './add'
import Remove from './remove'
import Settings from './settings'
import EditIcon from '@mui/icons-material/Edit'
import Edit from './edit'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import ImportExport from './import-export'

const Panel = () => {
    //useState HOOKS
    const [expandMenu, setExpandMenu] = useState(false)
    const [page, setPage] = useState()

    //functions
    const log_out = () => {
        window.localStorage.setItem('connection_id', "")
        window.location.reload()
    }

    //main render
    return (
        <div className="w-full min-h-screen bg-slate-200 overflow-x-hidden">

            <div className="flex">
                <div className={`relative min-h-screen ${expandMenu ? 'w-5/6' : 'w-1/6'} md:w-1/6 bg-gray-800 py-5`}>
                    {window.innerWidth < 600 && !expandMenu &&
                        <h1 onClick={e => setExpandMenu(true)} className="text-white font-bold text-center text-2xl"><MenuIcon sx={{fontSize: '40px'}}/></h1>
                    }
                    {window.innerWidth < 600 ? expandMenu &&
                        <>
                            <h1 onClick={e => setExpandMenu(false)} className="text-white font-bold text-center text-2xl"><CloseIcon sx={{fontSize: '40px'}}/></h1>
                            <div onClick={e => {setPage(1);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><HomeIcon className='text-gray-400 font-bold' /> Home</div>
                            <div onClick={e => {setPage(2);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><AddBoxIcon className='text-gray-400 font-bold' /> Add niche</div>
                            <div onClick={e => {setPage(3);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><SettingsIcon className='text-gray-400 font-bold' /> Settings</div>
                            <div onClick={e => {setPage(4);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><BarChartIcon className='text-gray-400 font-bold' /> Analytics</div>
                            <div onClick={e => {setPage(5);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><DeleteIcon className='text-gray-400 font-bold' /> Remove niche</div>
                            <div onClick={e => {setPage(6);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><EditIcon className='text-gray-400 font-bold' /> Edit niche</div>
                            <div onClick={e => {setPage(7);setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><ImportExportIcon className='text-gray-400 font-bold' /> Import/Export</div>
                            <div onClick={e => {log_out();setExpandMenu(false)}} className='bg-gray-700 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><LogoutIcon className='text-gray-400 font-bold' /> Log out</div>
                        </>
                        :
                        <>
                            <div onClick={e => setPage(1)} className='bg-gray-700 cursor-pointer hover:bg-gray-900 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><HomeIcon className='text-gray-400 font-bold' /> Home</div>
                            <div onClick={e => setPage(2)} className='bg-gray-700 cursor-pointer hover:bg-gray-900 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><AddBoxIcon className='text-gray-400 font-bold' /> Add niche</div>
                            <div onClick={e => setPage(3)} className='bg-gray-700 cursor-pointer hover:bg-gray-900 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><SettingsIcon className='text-gray-400 font-bold' /> Settings</div>
                            <div onClick={e => setPage(4)} className='bg-gray-700 cursor-pointer hover:bg-gray-900 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><BarChartIcon className='text-gray-400 font-bold' /> Analytics</div>
                            <div onClick={e => setPage(5)} className='bg-gray-700 text-gray-200 hover:bg-gray-900 cursor-pointer text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><DeleteIcon className='text-gray-400 font-bold' /> Remove niche</div>
                            <div onClick={e => setPage(6)} className='bg-gray-700 text-gray-200 hover:bg-gray-900 cursor-pointer text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><EditIcon className='text-gray-400 font-bold' /> Edit niche</div>
                            <div onClick={e => setPage(7)} className='bg-gray-700 text-gray-200 hover:bg-gray-900 cursor-pointer text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><ImportExportIcon className='text-gray-400 font-bold' /> Import/Export</div>
                            <div onClick={e => log_out()} className='bg-gray-700 cursor-pointer hover:bg-gray-900 text-gray-200 text-lg text-center my-6 py-3 w-5/6 mx-auto rounded-lg shadow-lg'><LogoutIcon className='text-gray-400 font-bold' /> Log out</div>
                        </>
                    }
                </div>
                {page === 2 && <Add />}
                {page === 3 && <Settings />}
                {page === 5 && <Remove />}
                {page === 6 && <Edit />}
                {page === 7 && <ImportExport />}
            </div>
            
        </div>
    )
};

export default Panel;
