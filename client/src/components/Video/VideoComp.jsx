import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getVideo, getVideoDetails } from '../../redux/action/videoAction';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import Comments from './components/Comments';
import Video from './components/Video';
import VideoInfo from './components/VideoInfo';


const VideoComp = () => {




    return (
        <div className="video-container">
            <Video />
            <VideoInfo />

            <Comments />
        </div>

    )
}

export default VideoComp