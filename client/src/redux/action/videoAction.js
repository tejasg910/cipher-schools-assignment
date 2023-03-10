import axios from "axios";
import { server } from "../../store";

export const getAllVideos = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllVideosRequest" });
    const { data } = await axios.get(`${server}/api/get-all-videos`, {
      withCredentials: true,
    });

    dispatch({ type: "getAllVideosSuccess", payload: data.data });
  } catch (error) {
    dispatch({
      type: "getAllVideosFail",
      payload: error.response.data.message,
    });
  }
};

export const getVideo = (params) => async (dispatch) => {
  try {
    dispatch({ type: "getVideoRequest" });
    const { data } = await axios.get(`${server}/api/get-video/${params}`, {
      withCredentials: true,
    });

    dispatch({ type: "getVideoSuccess", payload: data.data });
  } catch (error) {
    dispatch({
      type: "getVideoFail",
      payload: error.response.data.message,
    });
  }
};

export const getVideoDetails = (params) => async (dispatch) => {
  try {
    dispatch({ type: "getVideoDetailsRequest" });
    const { data } = await axios.get(
      `${server}/api/get-video-details/${params}`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "getVideoDetailsSuccess", payload: data.data });
  } catch (error) {
    dispatch({
      type: "getVideoDetailsFail",
      payload: error.response.data.message,
    });
  }
};

export const likeVideo = (params) => async (dispatch) => {
  try {
    dispatch({ type: "likeVideoRequest" });
    const { data } = await axios.get(`${server}/api/add-like/${params}`, {
      withCredentials: true,
    });

    dispatch({ type: "likeVideoSuccess", payload: data.liked });
  } catch (error) {
    dispatch({
      type: "likeVideoFail",
      payload: error.response.data.message,
    });
  }
};

export const getComments = (params) => async (dispatch) => {
  try {
    dispatch({ type: "likeVideoRequest" });
    const { data } = await axios.get(`${server}/api/add-like/${params}`, {
      withCredentials: true,
    });

    dispatch({ type: "likeVideoSuccess", payload: data.liked });
  } catch (error) {
    dispatch({
      type: "likeVideoFail",
      payload: error.response.data.message,
    });
  }
};

export const addComment = (params, comment) => async (dispatch) => {
  try {
    dispatch({ type: "addCommentRequest" });
    const { data } = await axios.get(
      `${server}/api/add-comment/${params}`,
      { comment },
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "addCommentSuccess", payload: data.comments });
  } catch (error) {
    dispatch({
      type: "addCommentFail",
      payload: error.response.data.message,
    });
  }
};
