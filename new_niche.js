<div onClick={e => choose_niche(e)} className={`${search !== '' && !'K E Y W O R D S   H E R E'.includes(search) && 'hidden'} w-full bg-gray-50 rounded-xl shadow-lg mt-4 md:my-2 relative py-8 cursor-pointer `}>
    <div className="locker hidden">https://google.com</div> {/* L O C K E R   H E R E */}
    <span className="absolute top-3 right-12"><AppleIcon className="text-slate-300" /></span>
    <span className="absolute top-3 right-5"><AndroidIcon className="text-slate-300" /></span>
    <div className='flex gap-3 px-3'>
        <div className="relative w-32 text-center justify-center align-middle items-center">
            <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-5/6 md:w-4/6">
                <Image src='/logo.png' className="image" width='100px' height='100px' /> {/* I M A G E   H E R E */}
            </div>
        </div>
        <div>
            <h6 className='text-gray-300 text-sm'>Author: <span className="text-red-300">gg-ez.net</span></h6>
            <h1 className="font-bold text-gray-600 text-2xl">Instagram++</h1> {/* T I T L E   H E R E */}
            <p className="text-gray-400 text-sm description">This app will help you get a verification badge for instagram.</p> {/* D E S C R I P T I O N   H E R E */}
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