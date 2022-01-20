import { useEffect } from 'react'
import useLang from '../hooks/useLang'
import En from './en'
import Ar from './ar'
import Fr from './fr'

export default function Home() {
	//Custom Hooks
	const [lang] = useLang()

	//main render
	return (
		<div>
			{
				lang === 'ar' ? <Ar /> :
				lang === 'fr' ? <Fr /> :
				<En />
			}
		</div>
	)
}
