import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { getVideoDetails, likeVideo } from '../../../redux/action/videoAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const VideoInfo = () => {

    const params = useParams();
    const [videodetails, setDetails] = useState({
        likes: "",
        views: "",
        liked: false,
    })


    const [videoTitle, setVideoTitle] = useState("");
    const dispatch = useDispatch()
    const { details, liked } = useSelector((state) => state.video)

    useEffect(() => {
        dispatch(getVideoDetails(params.id))

        setTimeout(() => {
            setDetails({ views: details.views, likes: details.likes, liked: liked })
            setVideoTitle(details.title)
        }, 100);
    }, [params.id, dispatch, liked]);


    const addLike = () => {
        console.log(params.id)
        dispatch(likeVideo(params.id))
    }
    return (
        <div><div className="videoinfo">
            <p className='views'>Views: {videodetails.views} </p>
            <p className='likes'> <span onClick={addLike} className='like-video' >{videodetails.liked ? <AiOutlineLike /> : <AiFillLike />}</span>: {videodetails.likes}</p>

        </div>
            {<h3 className='video__title'>{videoTitle}</h3>}</div>
    )
}

export default VideoInfo