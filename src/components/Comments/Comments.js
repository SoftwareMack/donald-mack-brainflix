//import { useState } from 'react';
import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './Comments.scss';
//import buttonIcon from '../../assets/icons/add_comment.svg';
//import Button from '../Button/Button';
//import videoDataJSON from '../../data/video-details.json';
import '../Comments/Comments.scss'
import CommentCard from '../CommentCard/CommentCard'


function Comments({video}){
console.log(video.comments)
    const getCommentCountText = () => {
        const count = video.comments.length;
        return count === 1 ? '1 Comment' : `${count} Comments`;
    };

    return (
        <div className='comment-section'>
            <p className='comment-section__number'>{getCommentCountText()}</p>
            <div className='input'>
                <img className='input-img' src={commentsImage} alt={`input-img for ${video.img}`}></img>
                <div className='input-wrapper'>
                    <form className='input-wrapper'>
                        <div className='text-wrapper'>
                            <label className='input-wrapper__label' htmlFor='text'>JOIN THE CONVERSATION</label>
                            <textarea className='input-wrapper__text' placeholder='Add a new comment' required name='text'></textarea>
                            <label htmlFor='submit' ></label>
                        </div>

                        <button name='submit' className='input-wrapper__submit'>COMMENT</button>
                    </form>
                </div>
            </div>
            {video.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}

        </div>
    )
}

export default Comments;
