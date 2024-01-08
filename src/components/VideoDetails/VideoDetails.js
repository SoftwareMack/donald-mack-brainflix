import './VideoDetails.scss';
import views1 from '../../assets/icons/views.svg';
import likes1 from '../../assets/icons/likes.svg';


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
          <div className='video-info-info1'>
            <div className='video-info-info1-views'>
              <img src={views1} alt="views" className='video-info-info1-views__img'/>
              <p className='video-info-info1-views__viewcount'>{views}</p>
            </div>
            <div className='video-info-info1-likes'>
              <img src={likes1} alt="likes" className='video-info-info1-likes__img'/>
              <p className='video-info-info1-likes__likecount'>{likes}</p>
            </div>
          </div>
        </div>
         <p className='video__desc'>{description}</p>
        </div>
    )
}


export default VideoDetails;
