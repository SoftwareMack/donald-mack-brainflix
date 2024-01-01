import { useState } from 'react';
import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './Comments.scss';
import buttonIcon from '../../assets/icons/add_comment.svg';
import Button from '../Button/Button';
import videoDataJSON from '../../data/video-details.json';

function Comments () {
    const commentsButton = "comments";
    const commentsIcon = buttonIcon;
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    const date = new Date (selectedVideo.timestamp).toLocaleDateString();

    return (
        <div className="commentsSection">
            <div className='comments__title'>
                <h3>3 COMMENTS</h3>
            </div>
            <div className='comments__form'>
                <div className="comments__form-container">
                    <div className='comments__form-miniContainer'>
                        <img className="comments__form-image" src={commentsImage} alt="comments photo"/>
                        <form className="comments__form-input">
                        <label for="userComment">Join the Conversation</label>
                        <input type="text" name="userComment" id="userComment" placeholder=" Add a new comment" />
                        <Button buttonImage={commentsIcon} buttonLabel={commentsButton} />
                        </form>
                    </div>
                </div>
                <span className='commentList__divider'></span>

                </div>
                <ul>
                        {selectedVideo.comments.map((commentData) => (
                        <li key={commentData.id}>
                        <div className='commentList'>
                        <span className='list'></span>

                            <div className='commentList__text-container'>

                                <div className='commentList__text-miniContainer'>
                                    <p className='commentList__text-name'>{commentData.name}</p>
                                    <p className='commentList__text-date'>{date}</p>
                                </div>
                                <p>{commentData.comment}</p>
                            </div>
                        </div>
                        <span className='commentList__divider'></span>

                        </li>))}
                    </ul>

                    <p className='videoListTitle'>Next Videos</p>
                    
                   <ul className='videos'>
                        {videoData.map((video) => (
                        <li key={video.id}>
                        <div className='videoList'>
                           <div> <img src={video.image} alt={video.title} />
                           </div>

                            <div className='videoList__text'>
                                <p className='videoList__name'>{video.title}</p>
                                <p className='videoList__channel'>{video.channel}</p>
                            </div>
                        </div>
                        </li>))}
                    </ul>
            </div>

    )
}


export default Comments;
