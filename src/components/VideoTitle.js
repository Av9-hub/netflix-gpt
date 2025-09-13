

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen pt-[25%]  absolute aspect-video bg-gradient-to-r from-black px-20 z-10'>
        <h1 className='text-3xl font-bold text-white w-1/3'>{title}</h1>
        <h3 className='text-white w-1/3'>{overview}</h3>
        <div className='my-4' >
            <button className='border bg-white text-black p-2 px-3 rounded-sm font-bold mr-4 hover:bg-slate-400'>▶︎Play</button>
            <button className='border bg-gray-400 p-2 px-3 rounded-sm text-black font-bold border-gray-400'>MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle