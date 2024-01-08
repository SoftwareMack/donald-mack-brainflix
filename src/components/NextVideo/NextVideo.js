import NextVideoItem from '../NextVideoItems/NextVideoItems';
import '../NextVideo/NextVideo.scss';


function NextVideo({videos}){
    return (
        <section className='next-video'>
            <h3 className="next-video__header">NEXT VIDEOS</h3>
            {
                videos.map(video => (
                    <NextVideoItem key={video.id} video={video}/>
                ))
            }
        </section>
    )
}

export default NextVideo;
