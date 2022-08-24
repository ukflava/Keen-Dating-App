import React from 'react';

const VidRoom = React.forwardRef((props, ref) => {
  return(
    <div className='absolute inset-0 z-50 bg-gray-500/60 flex flex-col items-center justify-center'>
      <div className="bg-transparent flex flex-col max-w-min h-4/5">
      <div className="flex bg-transparent justify-between">
        <button onClick={() => props.setRoomOpen(false)} type="button" className="text-white bg-fuchsia-800 px-2 oy-1 rounded-full max-w-max mb-2">
            X
        </button>
        <button onClick={() => props.call(props.remotePeerId)} type="button" className="text-white bg-fuchsia-800 px-2 oy-1 rounded-full max-w-max mb-2">
          Start
        </button>
      </div>

        <div className="video-grid bg-white">
          <div className="my-video border">
            <video muted={true}/>
          </div>
          <div className="match-video border">
            <video ref={ref.remoteVideoRef} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default VidRoom;