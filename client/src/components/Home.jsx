import React, { useEffect, useState } from 'react'
import { getAllVideos } from '../redux/action/videoAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
    const [videoslist, setVideos] = useState([]);
    const dispatch = useDispatch()
    const { videos } = useSelector((state) => state.video)
    useEffect(() => {
        dispatch(getAllVideos())

        setTimeout(() => {
            setVideos(videos)
        }, 100);
    }, []);

    const getVideo = () => {


    }

    return (
        <div className='container'>


            {videos && videos.map((item) => {

                return <Link key={item._id} to={`/${item._id}`}><div className="card" onClick={getVideo}>
                    <img className='video' src={"https://cdn.pixabay.com/photo/2013/07/13/11/45/play-158609_960_720.png"} />
                    <h3 className='card__heading'>{item.title}</h3>
                </div>
                </Link>
            })}

        </div >
    )
}

export default Home