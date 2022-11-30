import React, {useRef} from 'react'
import "./UseRefPlayer.css"

const src = "Videos/SainaNehwal.mp4"
const UseRefPlayer = () => {
    const videoRef = useRef(null);
    const handlefwrd = () => {
        videoRef.current.seekTo(videoRef.current.geTCurrentTime()+5);
      };
      const handlebwrd = () => {
        videoRef.current.seekTo(videoRef.current.geTCurrentTime()-5);
      };
    const handlePlay = () => {
        videoRef.current.play();
      };
      const handlePause = () => {
        videoRef.current.pause();
      };

  return (
    <>

        <video width={520} height={300} ref={videoRef} className="UseRefPlayer">
            <source src={src} type="video/mp4"/>
        </video>

        <div className='grid-btn'>
            <button className='btn' onClick={handlebwrd}>
                5 sec Back
            </button>
            <button className='btn' onClick={handlePlay}>
                Play
            </button>
            <button className='btn' onClick={handlePause}>
                Pause
            </button>
            <button className='btn' onClick={handlefwrd}>
                5 sec forward
            </button>
        </div>
    </>
  )
}

export default UseRefPlayer

