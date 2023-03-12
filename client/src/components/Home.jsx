import React, { useEffect } from 'react'
import { getAllVideos } from '../redux/action/videoAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {

    const dispatch = useDispatch()
    const { videos } = useSelector((state) => state.video)
    useEffect(() => {
        dispatch(getAllVideos())
    }, []);

    const getVideo = () => {


    }

    return (
        <div className='container'>


            {videos && videos.map((item) => {

                return <Link to={`/${item._id}`}><div className="card" onClick={getVideo}>
                    <video className='video' src='https://res.cloudinary.com/dymgcz8qy/video/upload/v1678447591/hlhkfvbktjyxegshnsmx.mp4' ></video>
                    <h3 className='card__heading'>{item.title}</h3>
                </div>
                </Link>
            })}

        </div>
    )
}

export default Home