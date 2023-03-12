import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addComment, getVideo, getVideoDetails } from '../../../redux/action/videoAction';
const Comments = () => {
    const params = useParams();
    const [mainComment, setMainComment] = useState("");
    const dispatch = useDispatch()
    const { details } = useSelector((state) => state.video)
    const onMainComment = (e) => {
        setMainComment(e.target.value)
    }




    dispatch(addComment(params.id, mainComment))


    return (
        <div>
            <div className="add-comments">

                <textarea name="comment" id="comemnt" cols="100" rows="2" onChange={onMainComment} value={mainComment}></textarea>
                <button >Add comment</button>
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