//imports
import 'animate.css';

const Loader = () => {
    return (
        <div className="loader w-full h-screen relative bg-red-400">
            <div className="logo absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <img src="https://svgshare.com/i/TGi.svg" className="animate__animated animate__heartBeat animate__infinite" alt="" />
            </div>
        </div>
    )
}

export default Loader