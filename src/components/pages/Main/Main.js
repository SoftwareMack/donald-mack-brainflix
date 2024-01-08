import axios from 'axios';
import '../Main/Main.scss';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import videoDetails from '../../../data/video-details.json';
import VideoDetails from '../../../components/VideoDetails/VideoDetails';
import videos from '../../../data/videos.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NextVideos from '../../../../src/components/NextVideo/NextVideo';
import Comments from '../../../../src/components/Comments/Comments';

const api = "https://project-2-api.herokuapp.com/";
const apiKey = "?api_key=455c80ec-91e0-48c5-a08b-7d12531971ac";
const apiVideos = "videos/";



function Main() {


  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);

  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)

  useEffect(() => {
    axios.get(api + apiVideos + apiKey)
        .then(res => {
            setVideos(res.data);
        })
  }, [])

  const [video, setVideo] = useState(null)

  useEffect(() => {
    if(videoIdDisplayed === null){
        return;
    }
    axios.get(api + apiVideos + videoIdDisplayed + apiKey)
        .then(response => {
            setVideo(response.data);
        })
  }, [videoIdDisplayed])

  if(video=== null) {
    return <div className='loader-wrapper'><div className='loader'></div></div>
  }


    return (

        <main>
          <VideoPlayer video={video}/>
          <div className='desktop-bottom'>
          <div className='desktop-bottom-left'>
            <VideoDetails video={video}/>
            <Comments video={video}/>
          </div>
            <NextVideos videos={filteredVideos}/>
          </div>
        </main>
    )
}

export default Main;
