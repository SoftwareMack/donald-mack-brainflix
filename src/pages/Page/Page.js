import axios from 'axios';
import './Page.scss';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import videos from '../../data/videos.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NextVideos from '../../components/NextVideo/NextVideo';
import Comments from '../../components/Comments/Comments';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
const api = "http://localhost:8000/";
//const apiKey = "?api_key=455c80ec-91e0-48c5-a08b-7d12531971ac";
const apiVideos = "videos/";



function Page() {


  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);

  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)

  useEffect(() => {
    axios.get(api + apiVideos )
        .then(res => {
            setVideos(res.data);
        })
  }, [])

  const [video, setVideo] = useState(null)

  useEffect(() => {
    if(videoIdDisplayed === null){
        return;
    }
    axios.get(api + apiVideos + videoIdDisplayed )
        .then(response => {
            setVideo(response.data);
        })
  }, [videoIdDisplayed])

  if(videos=== null) {
    return <div className='loader-wrapper'><div className='loader'></div></div>
  }

    return (

        <main>
          {video&&<VideoPlayer video={video}/>}
          <div className='desktop-bottom'>
          <div className='desktop-bottom-left'>
          {video&& <VideoDetails video={video}/>}
          {video&&<Comments video={video}/>}
          </div>
            <NextVideos videos={filteredVideos}/>
          </div>
        </main>
    )
}

export default Page;
