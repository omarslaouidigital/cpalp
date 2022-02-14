import {useState, useEffect} from 'react'
import 'animate.css'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import Axios from 'axios'

const ImportExport = () => {
    //useState HOOKS
    const [niches, setNiches] = useState([])
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    
    //useEffect HOOKS
    useEffect(async() => {
        const fetched_data = await fetch('/api/get-niches')
        const json_data = await fetched_data.json()
        setNiches(json_data)
    }, [])

    //functions
    const import_niches = async(e) => {
        let fr = new FileReader()
        fr.readAsText(e.target.files[0])
        fr.addEventListener('load', async(e) => {
            const imported_niches = JSON.parse(fr.result)
            console.log(imported_niches)
            await Axios({
                method: 'POST',
                url: '/api/import-niches',
                data: {imported_niches: imported_niches}
            }).then(result => {
                if(result.data.error === true) return 0
                setShowSuccess(true)
                setSuccessMsg(`${imported_niches.length} Niches imported successfully 👍`)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 5000)
            })
        })
    }

    const export_niches = () => {
        let dataStr = JSON.stringify(niches);
        let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        let exportFileDefaultName = 'niches.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        setShowSuccess(true)
        setSuccessMsg(`${niches.length} Niches exported successfully 👍`)
        setTimeout(() => {
            setShowSuccess(false)
        }, 5000)
    }

    //main render
    return (
        <div className="my-6 px-6 md:px-12 w-full text-center justify-center mx-auto">
            <h1 className='text-center font-bold text-2xl text-gray-800 md:text-5xl mb-7'>Import / Export</h1>
            <center className=''>
                <input type='file' onChange={e => import_niches(e)} className="mt-4 mx-auto px-2 py-4 md:px-8 bg-blue-500 rounded-xl text-center shadow-lg font-bold text-white"/>
                <br />
                <button onClick={export_niches} className="mt-4 mx-auto py-4 px-8 bg-blue-600 rounded-xl shadow-lg font-bold text-white"><FileDownloadIcon /> Export niches</button>
            </center>
            {showSuccess && <div className='animate__animated animate__shakeX py-4 w-full md:w-2/6 rounded-xl shadow-lg mt-7 mx-auto bg-green-500 font-bold text-xl text-gray-100'>{successMsg}</div>}
        </div>
    )
};

export default ImportExport;
