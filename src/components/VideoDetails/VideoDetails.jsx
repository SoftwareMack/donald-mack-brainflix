import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './VideoDetails.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';


function VideoDetails () {
    const [videoData,VideoDetails ] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const date = new Date (selectedVideo.timestamp).toLocaleDateString();

    return (
        <div className='activeVideoPlayer'>

            <div className='videoContainer'>
                <video poster={selectedVideo.image} controls>
                    <source src={selectedVideo.video}></source>
                </video>
            </div>

            <p className='activeVideoPlayer__title'>{selectedVideo.title}</p>

            <span className='activeVideo__divider1'></span>
            <div className='activeVideoData'>
                <div className='activeVideoData__section1'>
                    <p className='activeVideoData__section1--channel'>By {selectedVideo.channel}</p>
                    <p className = 'activeVideoData__section1--date'>{date}</p>
                </div>
                <div className='activeVideoData__section2'>
                    <div className='activeVideoData__viewsSection'>
                        <img src={views} alt='views' />
                        <p className='activeVideoData__viewsSection--count'>{selectedVideo.views}</p>
                    </div>
                    <div className='activeVideoData__likesSection'>
                        <img src={likes} alt='likes' />
                        <p className='activeVideoData__likesSection--likes'>{selectedVideo.likes}</p>
                    </div>
                </div>

            </div>
            <span className='activeVideo__divider'></span>

            <p className='activeVideoData__description'>{selectedVideo.description}</p>
        </div>

)}

export default VideoDetails;
