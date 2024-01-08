import uploadPreview from '../../../../src/assets/images/Upload-video-preview.jpg';
import '../Upload/Upload.scss'
import { Link } from 'react-router-dom';

function Upload() {
    return (
        <>
        <div className='upload-wrapper'>
            <div className='upload'>
                <h1 className='upload__heading'>Upload Video</h1>
                <div className='desktop-wrapper'>
                    <div className='upload__img-wrapper'>
                    <p className='upload-label__img'>VIDEO THUMBNAIL</p>
                        <img className='upload__img' src={uploadPreview} alt=''/>
                    </div>
                    <form className='upload-form'>
                        <label for='title' className='upload-label__title'>TITLE YOUR VIDEO</label>
                        <textarea placeholder='Add a title to your video' name='title' className='upload-form__title'></textarea>
                        <label for='descr' className='upload-label__descr'>ADD A VIDEO DESCRIPTION</label>
                        <textarea placeholder='Add a description to your video' name='descr' className='upload-form__descr'></textarea>
                    </form>
                </div>
                <div className='upload-buttons'>
                    <Link to={'/'}><button className='upload-buttons__publish buttons'>PUBLISH</button></Link>
                    <button className='upload-buttons__cancel buttons'>CANCEL</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Upload;
