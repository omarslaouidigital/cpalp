import {useState, useEffect} from 'react'
import 'animate.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Axios from 'axios'

const Remove = () => {
    //useState HOOKS
    const [niches, setNiches] = useState([])
    
    //useEffect HOOKS
    useEffect(async() => {
        const fetched_data = await fetch('/api/get-niches')
        const json_data = await fetched_data.json()
        setNiches(json_data)
    }, [])

    //functions
    const delete_niche = async(id, e) => {
        e.target.parentNode.parentNode.style.display = 'none'
        await Axios({
            method: 'DELETE',
            url :'/api/remove-niche',
            data: {id: id}
        })
    }

    //main render
    return (
        <div className="my-6 px-6 md:px-12 w-full text-center justify-center mx-auto">
            <h1 className='text-center font-bold text-2xl text-gray-800 md:text-5xl'>Remove niche</h1>

            <div className="grid gap-2 grid-cols-4 w-full mt-8 mx-auto">
                {niches.map((niche, i) => (
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
                            
                        </div>
                        <center>
                            <button onClick={e => delete_niche(niche.id, e)} className="mt-4 py-4 px-8 bg-red-500 rounded-xl shadow-lg font-bold text-white animate__animated animate__pulse animate__infinite"><DeleteIcon />Delete niche</button>
                        </center>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Remove;
