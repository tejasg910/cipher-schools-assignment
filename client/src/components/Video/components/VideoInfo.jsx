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
    const dispatch = useDispatch()
    const { details, liked } = useSelector((state) => state.video)
    console.log(details)
    useEffect(() => {
        dispatch(getVideoDetails(params.id))

        setTimeout(() => {
            setDetails({ views: details.views, likes: details.likes, liked: liked })
        }, 100);
    }, [params.id, dispatch, liked]);


    const addLike = () => {
        dispatch(likeVideo(params.id))
    }
    return (
        <div><div className="videoinfo">
            <p className='views'>Views: {videodetails.views} </p>
            <p className='likes'> <span onClick={addLike} className='like-video' >{videodetails.liked ? <AiOutlineLike /> : <AiFillLike />}</span>: {videodetails.likes}</p>

        </div>
            <h3 className='video__title'>THis is the best vieoo on the internt</h3></div>
    )
}

export default VideoInfo