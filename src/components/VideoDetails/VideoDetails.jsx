import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './VideoDetails.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';


function VideoDetails({video}) {


    const {title, channel, timestamp, views, likes, description} = video;


    const date = new Date(timestamp).toLocaleDateString();

    return (
        <div className='video-text'>
        <div >
          <h1 className='video__title'>{title}</h1>
        </div>
        <div className='video-info'>
          <div className='video-info-side'>
            <p className='video-info-side__Band'>By {channel}</p>
            <p className='video-info-side__date'>{date}</p>
          </div>
          <div className='video-info-int'>
            <div className='video-info-int-views'>
              <img src={views} alt="views" className='video-info-int-views__img'/>
              <p className='video-info-int-views__viewcount'>{views}</p>
            </div>
            <div className='video-info-int-likes'>
              <img src={likes} alt="likes" className='video-info-int-likes__img'/>
              <p className='video-info-int-likes__likecount'>{likes}</p>
            </div>
          </div>
        </div>
         <p className='video__desc'>{description}</p>
        </div>
    )
}

export default VideoDetails;
