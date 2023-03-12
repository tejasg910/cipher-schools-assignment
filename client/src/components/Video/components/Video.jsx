import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getVideo } from '../../../redux/action/videoAction';


const Video = () => {
    const params = useParams();
    const [url, setUrl] = useState("")
    const dispatch = useDispatch()
    const { video } = useSelector((state) => state.video)
    console.log(video, "from video comonent")
    useEffect(() => {


        dispatch(getVideo(params.id))
        setTimeout(() => {
            setUrl(video.url)
        }, 100);

    }, [params.id, dispatch]);
    return (
        <video className='video' autoPlay
            muted
            controls src={url} ></video>
    )
}

export default Video