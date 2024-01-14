import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './Comments.scss';
import '../Comments/Comments.scss';
import CommentCard from '../CommentCard/CommentCard';
import React, { useState } from 'react';
import formValidation from '../formValidation/formValidation ';

function Comments({ video }) {
  const [commentText, setCommentText] = useState('');

  const getCommentCountText = () => {
    const count = video.comments.length;
    return count === 1 ? '1 Comment' : `${count} Comments`;
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const textarea = event.target.elements.text;
    formValidation(textarea);

    if (!textarea.classList.contains("required")) {
      console.log("Comment submitted:", commentText);
      setCommentText('');
    }
  };

  const handleTextChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <div className='comment-section'>
      <p className='comment-section__number'>{getCommentCountText()}</p>
      <div className='input'>
        <img className='input-img' src={commentsImage} alt={`input-img for ${video.img}`}></img>
        <div className='input-wrapper'>
          <form onSubmit={handleCommentSubmit} className='input-wrapper'>
            <div className='text-wrapper'>
              <label className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</label>
              <textarea
                className='input-wrapper__text'
                placeholder='Add a new comment'
                required
                name='text'
                value={commentText}
                onChange={handleTextChange}
              ></textarea>
              <label htmlFor='submit'></label>
            </div>

            <button type='submit' name='submit' className='input-wrapper__submit'>COMMENT</button>
          </form>
        </div>
      </div>
      {video.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
    </div>
  );
}

export default Comments;
