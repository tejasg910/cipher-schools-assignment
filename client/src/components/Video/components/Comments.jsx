import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getVideo } from '../../../redux/action/videoAction';
const Comments = () => {
    const params = useParams();

    const dispatch = useDispatch()
    const { video } = useSelector((state) => state.video)
    console.log(video, "from video comonent")
    useEffect(() => {


        dispatch(getVideo(params.id))
        setTimeout(() => {

        }, 100);

    }, [params.id, dispatch]);
    return (
        <div>
            <div className="add-comments">

                <textarea name="comment" id="comemnt" cols="100" rows="2"></textarea>
                <button>Add comment</button>
            </div>
            <div className="comments">
                <div className="comment-box">
                    <p className="user">
                        anonymous
                    </p>
                    <p>Nice</p>
                    <p>reply</p>
                    <div className="reply">
                        <p className="user">
                            anonymous
                        </p>

                        <p>Yes</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments