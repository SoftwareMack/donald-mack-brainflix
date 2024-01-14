import '../CommentCard/CommentCard.scss';
import React from 'react';






function CommentCard({comment}){
   
    return (
        <div className='comment-card'>
            <div className='comment-card__img'></div>
                <div className='comment-card-wrapper'>
                    <div className='comment-card-wrapper'>
                        <p className='comment-card-wrapper__name'>{comment.name}</p>
                        <p className='comment-card-wrapper__date'>{new Date(comment.timestamp).toLocaleDateString()}</p>
                    </div>
                    <p className='comment-card-wrapper__comment'>{comment.comment}</p>
                </div>
            </div>

    )
}


export default CommentCard;
