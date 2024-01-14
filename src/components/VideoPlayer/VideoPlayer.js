import '../VideoPlayer/VideoPlayer.scss'

function VideoPlayer({video}) {
   
    return(
        <div className='player-wrapper'>
            <div className="player-wrapper__player--bg">
                <video className="player-wrapper__player" controls poster={"http://localhost:8000/images/" + video.image}></video>
            </div>
        </div>

    )
}

export default VideoPlayer;
