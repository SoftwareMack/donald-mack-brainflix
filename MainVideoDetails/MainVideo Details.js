import React from 'react';
import './VideoPlayer.scss'; // Make sure to replace with the correct path to your VideoPlayer styles
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import VideoDetails from '../../data/video-details.json';



const VideoPlayer = ({ mainVideo }) => {
  const { title, image, video, views, description, comments } = mainVideo;

  return (
    <div className="video-player">
      <div className="video-container">
        <video controls poster={image}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-details">
        <h1 className="video-title">{title}</h1>
        <div className="video-timestamp">{/* Add timestamp logic here */}</div>
        <div className="video-views">{views} views</div>
        <div className="video-description">{description}</div>
      </div>
      <div className="comments-section">
        <h3 className="comments-count">{comments.length} Comments</h3>
        {/* Add comments mapping logic here */}
        {/* Include dynamic timestamps for each comment */}
        <div className="comment-form">{/* Add comment form (non-functional) */}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
