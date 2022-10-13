import { useEffect } from 'react'
import useLang from '../hooks/useLang'
import En from './en'
import Ar from './ar'
import Fr from './fr'
import Tr from './tr'
import Id from './id'
import De from './de'
import Es from './es'
import Br from './br'


function Home() {
	//Custom Hooks
	const [lang] = useLang()
	//main render
	return (
		<div>
			{
				lang === 'ar' ? <Ar /> :
				lang === 'fr' ? <Fr /> :
				// lang === 'tr' ? <Tr /> :
				// lang === 'id' ? <Id /> :
				lang === 'de' ? <De /> :
				lang === 'es' ? <Es /> :
				lang === 'pr' ? <Br /> :
				<En />
			}
		</div>
	)
}



export default Home
