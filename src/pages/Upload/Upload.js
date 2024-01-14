import uploadPreview from '../../assets/images/Upload-video-preview.jpg';
import '../Upload/Upload.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import formValidation from '../../components/formValidation/formValidation ';
import '../../assets/images/Upload-video-preview.jpg';
import '../Upload/Upload.scss';
import React, { useState } from 'react';


const api = "http://localhost:8000";

function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlePublish = () => {

        if (formValidation({ value: title }) && formValidation({ value: description })) {
            const newVideo = {
                title,
                description,
            };

            axios.post(api + '/videos', newVideo)
                .then(res => {
                
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <>
            <div className='upload-wrapper'>
                <div className='upload'>
                    <h1 className='upload__heading'>Upload Video</h1>
                    <div className='desktop-wrapper'>
                        <div className='upload__img-wrapper'>
                            <p className='upload-label__img'>VIDEO THUMBNAIL</p>
                            <img className='upload__img' alt='test-thumbnail' src={uploadPreview}></img>
                        </div>
                        <form className='upload-form'>
                            <label htmlFor='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                            <textarea placeholder='Add a title to your video' name='title' className='upload-form__title' onChange={(e) => setTitle(e.target.value)}></textarea>
                            <label htmlFor='descr' className='upload-label__descr'>ADD A VIDEO DESCRIPTION</label>
                            <textarea placeholder='Add a description to your video' name='descr' className='upload-form__descr' onChange={(e) => setDescription(e.target.value)}></textarea>
                        </form>
                    </div>
                    <div className='upload-buttons'>
                        <Link to={'/'}><button className='upload-buttons__publish buttons' onClick={handlePublish}>PUBLISH</button></Link>
                        <button className='upload-buttons__cancel buttons'>CANCEL</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;
