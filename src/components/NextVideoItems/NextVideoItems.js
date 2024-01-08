import '../NextVideoItems/NextVideoItems.scss'
import { Link } from 'react-router-dom';

function NextVideoItem({video}) {
    return (
        <Link to={`/video/${video.id}`}>
        <div className='next-video'>
        <img className='next-video__thumbnail' src={video.image} alt={`Thumbnail for ${video.title}`} />

            <div className='next-video-wrapper'>
                <h3 className='next-video-wrapper__title'>{video.title}</h3>
                <p className='next-video-wrapper__channel'>{video.channel}</p>
            </div>
        </div>
        </Link>
    )
}

export default NextVideoItem;
